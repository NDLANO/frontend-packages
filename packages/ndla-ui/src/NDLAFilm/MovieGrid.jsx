import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
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
  margin,
  columnWidth,
  t,
}) => {
  return (
    <section>
      <h1
        {...movieListClasses('heading')}
        style={{ marginLeft: `${margin + 7}px` }}>
        {resourceTypeName && resourceTypeName.name}
        <small>
          {fetchingMoviesByType
            ? t('ndlaFilm.loadingMovies')
            : `${moviesByType.length} ${t('ndlaFilm.movieMatchInCategory')}`}
        </small>
      </h1>
      <div
        {...movieListClasses('movie-listing')}
        style={{ marginLeft: `${margin}px` }}>
        {fetchingMoviesByType && (
          <div style={{ height: loadingPlaceholderHeight }} />
        )}
        {!fetchingMoviesByType &&
          moviesByType.map(movie => (
            <FilmContentCard
              movie={movie}
              columnWidth={columnWidth}
              resourceTypes={resourceTypes}
            />
          ))}
      </div>
    </section>
  );
};

MovieGrid.propTypes = {
  margin: PropTypes.number,
  resourceTypeName: PropTypes.shape({
    name: PropTypes.string,
  }),
  fetchingMoviesByType: PropTypes.bool,
  moviesByType: PropTypes.array,
  classes: PropTypes.func,
  columnWidth: PropTypes.number,
  resourceTypes: PropTypes.array,
  loadingPlaceholderHeight: PropTypes.string,
};

export default injectT(MovieGrid);
