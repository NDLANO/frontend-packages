/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing, colors, fonts, animations } from '@ndla/core';
import SafeLink from '../common/SafeLink';
import { movieType } from './types';

const StyledNewLetter = styled.h2`
  color: #fff;
  margin: ${spacing.large} 0 ${spacing.spacingUnit * 0.75}px;
  ${fonts.sizes(26, 1.1)};
  ${mq.range({ from: breakpoints.tablet })} {
    text-indent: ${spacing.spacingUnit * 0.75}px;
  }
  &:after {
    content: "";
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
  display: flex;
  flex-direction: column;
`;

type MovieItemProps = {
  currentIndex: number;
};

const MovieItem = styled.div<MovieItemProps>`
  margin: 0 0 ${spacing.spacingUnit * 0.75}px;
  display: inline-flex;
  &:last-child {
    margin-bottom: ${spacing.large};
  }
  opacity: 0;
  animation-fill-mode: forwards;
  animation-delay: ${(props: MovieItemProps) => props.currentIndex * 50}ms;
  ${animations.fadeIn(animations.durations.normal)};
`;

const MovieTextWrapper = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.xsmall} ${spacing.xsmall} 0 0;
  }
  flex: 1;
`;

type MovieImageType = {
  backgroundImage?: string;
};

const MovieImage = styled.div<MovieImageType>`
  width: 104px;
  height: 80px;
  background-color: ${colors.ndlaFilm.filmColorLight};
  background-image: url(${(props: MovieImageType) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  margin: 0 ${spacing.spacingUnit * 0.75}px 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    margin-left: ${spacing.spacingUnit * 0.75}px;
    width: 143px;
    height: 90px;
  }
  position: relative;
  &:after {
    content: "";
    position: absolute; 
    z-index; 1;
    background: ${colors.ndlaFilm.filmColor};
    opacity: 0;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
`;

const MovieTitle = styled.h3`
  color: #fff;
  margin: 0 0 2px;
  ${fonts.sizes(18, 1.3)};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(20, 1.3)};
  }
`;

const MovieDescription = styled.p`
  color: ${colors.brand.greyLighter};
  margin: 0;
  ${fonts.sizes(14, 1.5)};
  ${mq.range({ from: breakpoints.tablet })} {
    ${fonts.sizes(16, 1.5)};
  }
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StyledSafeLink = styled(SafeLink)`
  box-shadow: none;
  display: flex;
  &:hover, &:focus {
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

const isLetter = (title: string): boolean => {
   const regTest: RegExp = /^[A-Za-zÅØÆåøæ]+$/;
   const firstLetter = title.substr(0,1);
   return !(firstLetter.match(regTest) === null);
}

interface Props {
  movies: movieType[];
}

const AllMoviesAlphabetically: React.FunctionComponent<Props> = ({ movies }) => {
  // Split into Letters.
  let previousLetter = '';
  return (
    <StyledWrapper>
      {movies.map((movie: movieType, index: number) => {
        const currentLetter = movie.title.substr(0, 1);
        const isNewLetter = currentLetter.localeCompare(previousLetter) === 1 && isLetter(movie.title);
        previousLetter = currentLetter;
        return (
          <Fragment key={movie.id}>
            {isNewLetter && <StyledNewLetter>{movie.title.substr(0, 1)}</StyledNewLetter>}
            <MovieItem currentIndex={index}>
              <StyledSafeLink to={`/subjects${movie.path}`}>
              <MovieImage
                role="img"
                backgroundImage={movie.metaImage && movie.metaImage.url}
                aria-label={movie.metaImage && movie.metaImage.alt}
                title={movie.title}
              />
              
                <MovieTextWrapper>
                  <MovieTitle>
                    {movie.title}
                  </MovieTitle>
                  <MovieDescription>
                    {movie.metaDescription}
                  </MovieDescription>
                </MovieTextWrapper>
              </StyledSafeLink>
            </MovieItem>
          </Fragment>
        );
      })}
    </StyledWrapper>
  );
}

export default AllMoviesAlphabetically;