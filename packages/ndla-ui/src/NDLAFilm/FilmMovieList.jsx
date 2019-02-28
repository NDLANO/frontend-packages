/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import Carousel from '@ndla/carousel';
import { SafeLink } from '@ndla/ui';
import { movieShape } from './shapes';

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const FilmMovieList = ({
  columnWidth,
  columnsPrSlide,
  name,
  movies,
  slideBackwardsLabel,
  slideForwardsLabel,
  resourceTypes,
  margin,
}) => (
  <section {...classes()}>
    <h1 {...classes('heading')} style={{ marginLeft: `${margin + 7}px` }}>
      {name}
    </h1>
    <Carousel
      padding
      columnWidth={columnWidth}
      columnsPrSlide={columnsPrSlide}
      slideBackwardsLabel={slideBackwardsLabel}
      slideForwardsLabel={slideForwardsLabel}
      imageFormat={0.5625}
      distanceBetweenItems={13}
      margin={margin}
      items={movies.map(movie => ({
        toLinkProps: () => ({ to: movie.url }),
        children: ({ imageHeight, imageWidth }) => (
          <div {...classes('slide-item')}>
            <SafeLink {...movie.toLinkProps()}>
              <div
                {...classes('slidecolumn-image')}
                role="img"
                aria-label={(movie.metaImage && movie.metaImage.alt) || ''}
                style={{
                  height: `${imageHeight}px`,
                  width: `${imageWidth}px`,
                  backgroundImage: `url(${(movie.metaImage &&
                    movie.metaImage.url) ||
                    ''})`,
                }}>
                <div {...classes('movie-tags-wrapper')}>
                  {Object.keys(movie.movieTypes).map(movieType => {
                    const resource = resourceTypes.find(
                      resourceType => resourceType.id === movieType,
                    );
                    return resource ? (
                      <span {...classes('movie-tags')} key={movieType}>
                        {resource.name}
                      </span>
                    ) : null;
                  })}
                </div>
              </div>
              <h2 {...classes('movie-title')}>{movie.title}</h2>
            </SafeLink>
          </div>
        ),
      }))}
    />
  </section>
);

FilmMovieList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  name: PropTypes.string.isRequired,
  columnsPrSlide: PropTypes.number.isRequired,
  columnWidth: PropTypes.number.isRequired,
  margin: PropTypes.number.isRequired,
  slideBackwardsLabel: PropTypes.string.isRequired,
  slideForwardsLabel: PropTypes.string.isRequired,
  resourceTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.id,
    }),
  ),
};

FilmMovieList.defaultProps = {
  movies: [],
  resourceTypes: [],
};

export default FilmMovieList;
