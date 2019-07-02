import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import { css } from '@emotion/core';
import FilmContentCard from './FilmContentCard';

const movieListClasses = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const MovieGrid = ({
  resourceTypeName,
  fetchingMoviesByType,
  moviesByType,
  resourceTypes,
  loadingPlaceholderHeight,
  autoSizedProps,
  resizeThumbnailImages,
  t,
}) => (
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
        moviesByType.map(movie => (
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

MovieGrid.propTypes = {
  autoSizedProps: PropTypes.shape({}),
  resourceTypeName: PropTypes.shape({
    name: PropTypes.string,
  }),
  fetchingMoviesByType: PropTypes.bool,
  moviesByType: PropTypes.array,
  classes: PropTypes.func,
  resourceTypes: PropTypes.array,
  loadingPlaceholderHeight: PropTypes.string,
};

export default injectT(MovieGrid);
