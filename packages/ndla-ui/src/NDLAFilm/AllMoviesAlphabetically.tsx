/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { RefObject, useMemo, useRef } from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing, spacingUnit, colors } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import groupBy from 'lodash/groupBy';
import sortBy from 'lodash/sortBy';
import { useTranslation } from 'react-i18next';
import { makeSrcQueryString } from '../Image';
import { MovieType } from './types';

const IMAGE_WIDTH = 143;

const Letter = styled.h2`
  color: ${colors.white};
  ${mq.range({ from: breakpoints.tablet })} {
    text-indent: ${spacingUnit * 0.75}px;
  }
  &:after {
    content: '';
    display: block;
    height: 1px;
    background: ${colors.brand.greyDark};
    margin-top: ${spacing.small};
  }
`;

const StyledWrapper = styled.section`
  width: 652px;
  max-width: 100%;
  margin: ${spacing.large} auto;
  padding: 0 ${spacing.normal};
`;

const MovieItem = styled.div`
  display: flex;
  gap: ${spacing.small};
  color: ${colors.white};
`;

const MovieTextWrapper = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.xsmall} ${spacing.xsmall} 0 0;
  }
  flex: 1;
`;

const MovieImage = styled.img`
  width: 104px;
  height: 80px;
  ${mq.range({ from: breakpoints.tablet })} {
    width: ${IMAGE_WIDTH}px;
    height: 90px;
  }
`;

const MovieTitle = styled.h3`
  color: ${colors.white};
  margin: 0;
`;

const MovieDescription = styled.p`
  color: ${colors.brand.greyLighter};
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StyledSafeLink = styled(SafeLink)`
  box-shadow: none;
  display: flex;
  gap: ${spacing.small};
  &:hover,
  &:focus {
    ${MovieTitle} {
      text-decoration: underline;
    }
    ${MovieImage} {
      &:after {
        transition: opacity 200ms ease;
        display: block;
        opacity: 0.3;
      }
    }
  }
`;

interface Props {
  movies: MovieType[];
}

const MovieGroup = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${spacing.normal};
`;

const groupMovies = (movies: MovieType[]) => {
  const sortedMovies = sortBy(movies, (m) => m.title);
  const grouped = groupBy(sortedMovies, (movie) => {
    const firstChar = movie.title[0]?.toUpperCase();
    const isLetter = firstChar?.match(/[A-Z\WÆØÅ]+/);
    return isLetter ? firstChar : '#';
  });
  return Object.entries(grouped).map(([letter, movies]) => ({ letter, movies }));
};

const AllMoviesAlphabetically = ({ movies }: Props) => {
  const groupedMovies = useMemo(() => groupMovies(movies), [movies]);
  const { t } = useTranslation();
  // Split into Letters.
  const wrapperRef: RefObject<HTMLElement> = useRef(null);

  return (
    <StyledWrapper ref={wrapperRef}>
      {groupedMovies.map(({ letter, movies }) => (
        <MovieGroup key={letter}>
          <Letter aria-label={t('filmfrontpage.allMovieGroupTitleLabel', { letter })}>{letter}</Letter>
          {movies.map((movie) => (
            <MovieItem key={movie.id}>
              <StyledSafeLink to={movie.path}>
                <MovieImage
                  alt=""
                  loading="lazy"
                  src={
                    movie?.metaImage?.url ? `${movie.metaImage?.url}?${makeSrcQueryString(IMAGE_WIDTH * 2)}` : undefined
                  }
                />
                <MovieTextWrapper>
                  <MovieTitle>{movie.title}</MovieTitle>
                  <MovieDescription>{movie.metaDescription}</MovieDescription>
                </MovieTextWrapper>
              </StyledSafeLink>
            </MovieItem>
          ))}
        </MovieGroup>
      ))}
    </StyledWrapper>
  );
};

export default AllMoviesAlphabetically;
