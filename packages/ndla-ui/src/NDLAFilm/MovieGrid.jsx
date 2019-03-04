import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';
import { getCurrentBreakpoint, breakpoints } from '@ndla/util';
import FilmContentCard from './FilmContentCard';

const movieListClasses = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const setScreenSize = (startingWidth = 260) => {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth;

  const currentBreakpoint = getCurrentBreakpoint();
  let margin;
  let itemSize;
  if (screenWidth < 385) {
    margin = 26;
    itemSize = startingWidth / 2;
  } else if (screenWidth < 450) {
    margin = 26;
    itemSize = startingWidth * 0.61;
  } else if (currentBreakpoint === breakpoints.mobile) {
    margin = 26;
    itemSize = startingWidth * 0.75;
  } else if (currentBreakpoint === breakpoints.tablet) {
    margin = 52;
    itemSize = startingWidth * 0.85;
  } else if (currentBreakpoint === breakpoints.desktop) {
    margin = 78;
    itemSize = startingWidth * 0.95;
  } else if (screenWidth < 1600) {
    margin = 104;
    itemSize = startingWidth;
  } else {
    margin = 104;
    itemSize = startingWidth * 1.15;
  }

  const columnsPrSlide = Math.floor((screenWidth - margin * 2) / itemSize);

  return {
    columnWidth: (screenWidth - margin * 2) / columnsPrSlide,
    columnsPrSlide,
    margin,
  };
};

const MovieGrid = ({
  resourceTypeName,
  fetchingMoviesByType,
  moviesByType,
  resourceTypes,
  loadingPlaceholderHeight,
  t,
}) => {
  const { margin, columnWidth } = setScreenSize();
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
