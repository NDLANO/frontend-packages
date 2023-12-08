/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, mq, spacing, spacingUnit } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import FilmContentCard from './FilmContentCard';
import { MovieResourceType, MovieType } from './types';
import { setAnimations, StyledHeadingH1 } from './filmStyles';

interface MovieListingProps {
  marginLeft?: number;
}

const MovieListing = styled.div<MovieListingProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.normal};
  margin: ${spacing.small} 0;
  margin-left: ${(props) => props.marginLeft && `${props.marginLeft}px`};
  ${setAnimations()};
  margin-left: ${spacing.normal};
  margin-right: ${spacing.normal};
  ${mq.range({ from: breakpoints.desktop })} {
    margin-left: ${spacingUnit * 3}px;
    margin-right: ${spacingUnit * 3}px;
  }
  > div {
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: fadeIn;
    animation-duration: 300ms;
  }
`;

interface LoadingPlaceholderProps {
  height?: string;
}

const LoadingPlaceholder = styled.div<LoadingPlaceholderProps>`
  height: ${(props) => props.height};
`;

interface Props {
  resourceTypeName?: MovieResourceType;
  fetchingMoviesByType: boolean;
  moviesByType: MovieType[];
  resourceTypes: MovieResourceType[];
  loadingPlaceholderHeight?: string;
}

const MovieGrid = ({
  resourceTypeName,
  fetchingMoviesByType,
  moviesByType,
  resourceTypes,
  loadingPlaceholderHeight,
}: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <StyledHeadingH1>
        {resourceTypeName && resourceTypeName.name}
        <small>
          {fetchingMoviesByType
            ? t('ndlaFilm.loadingMovies')
            : `${moviesByType.length} ${t('ndlaFilm.movieMatchInCategory')}`}
        </small>
      </StyledHeadingH1>
      <MovieListing>
        {fetchingMoviesByType && <LoadingPlaceholder height={loadingPlaceholderHeight} />}
        {!fetchingMoviesByType &&
          moviesByType.map((movie, index) => (
            <FilmContentCard key={index} hideTags movie={movie} resourceTypes={resourceTypes} lazy type="list" />
          ))}
      </MovieListing>
    </section>
  );
};

export default MovieGrid;
