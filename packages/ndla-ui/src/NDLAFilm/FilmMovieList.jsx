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
  autoSizedProps,
}) => (
  <section {...classes()}>
    <h1
      {...classes('heading')}
      style={{ marginLeft: `${autoSizedProps.margin}px` }}>
      {name}
    </h1>
    <Carousel
      slideBackwardsLabel={slideBackwardsLabel}
      slideForwardsLabel={slideForwardsLabel}
      buttonClass="c-film-movielist__carousel-buttons"
      wrapperClass="c-film-movielist__carousel-wrapper-buttons"
      items={movies.map(movie => (
        <FilmContentCard
          key={movie.id}
          movie={movie}
          columnWidth={autoSizedProps.columnWidth}
          resourceTypes={resourceTypes}
        />
      ))}
      {...autoSizedProps}
    />
  </section>
);

FilmMovieList.propTypes = {
  movies: PropTypes.arrayOf(movieShape),
  name: PropTypes.string.isRequired,
  slideBackwardsLabel: PropTypes.string.isRequired,
  slideForwardsLabel: PropTypes.string.isRequired,
  resourceTypes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.id,
    }),
  ),
  autoSizedProps: PropTypes.shape({}),
};

FilmMovieList.defaultProps = {
  movies: [],
  resourceTypes: [],
};

export default FilmMovieList;
