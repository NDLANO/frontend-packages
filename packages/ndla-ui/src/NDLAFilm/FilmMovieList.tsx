/** * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { Carousel, CalculatedCarouselProps } from '@ndla/carousel';
import FilmContentCard from './FilmContentCard';
import { MovieResourceType, MovieType } from './types';

const classes = new BEMHelper({
  name: 'film-movielist',
  prefix: 'c-',
});

interface Props {
  movies: MovieType[];
  name: string;
  slideBackwardsLabel: string;
  slideForwardsLabel: string;
  resourceTypes: MovieResourceType[];
  autoSizedProps: CalculatedCarouselProps;
  resizeThumbnailImages?: boolean;
}

const FilmMovieList = ({
  name,
  movies = [],
  slideBackwardsLabel,
  slideForwardsLabel,
  resourceTypes = [],
  autoSizedProps,
  resizeThumbnailImages,
}: Props) => (
  <section {...classes()}>
    <h1 {...classes('heading')} style={{ marginLeft: `${autoSizedProps.margin}px` }}>
      {name}
    </h1>
    <Carousel
      disableScroll={false}
      slideBackwardsLabel={slideBackwardsLabel}
      slideForwardsLabel={slideForwardsLabel}
      buttonClass="c-film-movielist__carousel-buttons"
      wrapperClass="c-film-movielist__carousel-wrapper-buttons"
      items={movies.map((movie) => (
        <FilmContentCard
          key={movie.id}
          movie={movie}
          columnWidth={autoSizedProps.columnWidth}
          resourceTypes={resourceTypes}
          resizeThumbnailImages={resizeThumbnailImages}
        />
      ))}
      {...autoSizedProps}
    />
  </section>
);

export default FilmMovieList;
