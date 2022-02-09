import React from 'react';
import BEMHelper from 'react-bem-helper';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';
import FilmContentCard from './FilmContentCard';
import { CalculatedProps } from '../../../carousel/src/Carousel';
import { MovieResourceType, MovieType } from './types';

const movieListClasses = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

interface Props {
  autoSizedProps: CalculatedProps;
  resourceTypeName?: MovieResourceType;
  fetchingMoviesByType: boolean;
  moviesByType: MovieType[];
  resourceTypes: MovieResourceType[];
  loadingPlaceholderHeight?: string;
  resizeThumbnailImages?: boolean;
}

const MovieGrid = ({
  resourceTypeName,
  fetchingMoviesByType,
  moviesByType,
  resourceTypes,
  loadingPlaceholderHeight,
  autoSizedProps,
  resizeThumbnailImages,
}: Props) => {
  const { t } = useTranslation();
  return (
    <section>
      <h1
        {...movieListClasses('heading')}
        css={css`
          margin-left: ${autoSizedProps.margin}px;
        `}>
        {resourceTypeName && resourceTypeName.name}
        <small>
          {fetchingMoviesByType
            ? t('ndlaFilm.loadingMovies')
            : `${moviesByType.length} ${t('ndlaFilm.movieMatchInCategory')}`}
        </small>
      </h1>
      <div
        {...movieListClasses('movie-listing')}
        css={css`
          margin-left: ${autoSizedProps.margin}px;
        `}>
        {fetchingMoviesByType && (
          <div
            css={css`
              height: ${loadingPlaceholderHeight};
            `}
          />
        )}
        {!fetchingMoviesByType &&
          moviesByType.map((movie) => (
            <FilmContentCard
              hideTags
              movie={movie}
              columnWidth={autoSizedProps.columnWidth}
              distanceBetweenItems={autoSizedProps.distanceBetweenItems}
              resourceTypes={resourceTypes}
              resizeThumbnailImages={resizeThumbnailImages}
            />
          ))}
      </div>
    </section>
  );
};

export default MovieGrid;
