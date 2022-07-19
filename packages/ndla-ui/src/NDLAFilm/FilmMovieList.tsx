/** * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { Carousel, CalculatedCarouselProps } from '@ndla/carousel';
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import FilmContentCard from './FilmContentCard';
import { MovieResourceType, MovieType } from './types';
import { StyledHeadingH1 } from './filmStyles';

interface Props {
  movies: MovieType[];
  name: string;
  slideBackwardsLabel: string;
  slideForwardsLabel: string;
  resourceTypes: MovieResourceType[];
  autoSizedProps: CalculatedCarouselProps;
  resizeThumbnailImages?: boolean;
}

const StyledSection = styled.section`
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: ${spacing.large};
  }
`;

const FilmMovieList = ({
  name,
  movies = [],
  slideBackwardsLabel,
  slideForwardsLabel,
  resourceTypes = [],
  autoSizedProps,
  resizeThumbnailImages,
}: Props) => (
  <StyledSection>
    <StyledHeadingH1 marginLeft={autoSizedProps.margin}>{name}</StyledHeadingH1>
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
  </StyledSection>
);

export default FilmMovieList;
