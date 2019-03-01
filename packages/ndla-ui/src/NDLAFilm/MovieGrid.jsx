import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { injectT } from '@ndla/i18n';

const movieListClasses = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const MovieGrid = ({
  margin,
  resourceTypeName,
  fetchingMoviesByType,
  moviesByType,
  columnWidth,
  resourceTypes,
  loadingPlaceholderHeight,
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
            <a
              href={movie.url}
              key={movie.id}
              {...movieListClasses('movie-item', '', 'slide-item')}
              style={{ width: `${columnWidth}px` }}>
              <div
                {...movieListClasses('slidecolumn-image')}
                role="img"
                aria-label={movie.metaImage ? movie.metaImage.alt : ''}
                style={{
                  height: `${columnWidth * 0.5625}px`,
                  backgroundImage: `url(${
                    movie.metaImage && movie.metaImage.url
                      ? movie.metaImage.url
                      : ''
                  })`,
                }}>
                <div {...movieListClasses('movie-tags-wrapper')}>
                  {Object.keys(movie.movieTypes).map(movieType => {
                    const resource = resourceTypes.find(
                      resourceType => resourceType.id === movieType,
                    );
                    return resource ? (
                      <span {...movieListClasses('movie-tags')} key={movieType}>
                        {
                          resourceTypes.find(
                            resourceType => resourceType.id === movieType,
                          ).name
                        }
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
              <h2 {...movieListClasses('movie-title')}>{movie.title}</h2>
            </a>
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
