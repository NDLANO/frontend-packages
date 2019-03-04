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
import FilmContentCard from './FilmContentCard';
import { movieShape } from './shapes';

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

const FilmMovieList = ({
  name,
  movies,
  slideBackwardsLabel,
  slideForwardsLabel,
  resourceTypes,
}) => (
  <section {...classes()}>
    <h1 {...classes('heading')} style={{ marginLeft: `${7}px` }}>
      {name}
    </h1>
    <Carousel
      padding
      slideBackwardsLabel={slideBackwardsLabel}
      slideForwardsLabel={slideForwardsLabel}
      distanceBetweenItems={13}>
      {movies.map(movie => (
        <FilmContentCard
          movie={movie}
          columnWidth={260}
          resourceTypes={resourceTypes}
        />
      ))}
    </Carousel>
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
