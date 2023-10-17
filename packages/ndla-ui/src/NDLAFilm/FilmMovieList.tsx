/** * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Carousel } from '@ndla/carousel';
import styled from '@emotion/styled';
import { IconButtonV2 } from '@ndla/button';
import { ChevronLeft, ChevronRight } from '@ndla/icons/common';
import { breakpoints, mq, spacing } from '@ndla/core';
import FilmContentCard from './FilmContentCard';
import { MovieResourceType, MovieType } from './types';
import { StyledHeadingH2 } from './filmStyles';

interface Props {
  movies: MovieType[];
  name?: string;
  slideBackwardsLabel: string;
  slideForwardsLabel: string;
  resourceTypes: MovieResourceType[];
}

const StyledSection = styled.section`
  margin-bottom: ${spacing.normal};
  ${mq.range({ from: breakpoints.tablet })} {
    margin-bottom: ${spacing.large};
  }
`;

const FilmMovieList = ({ name, movies = [], slideBackwardsLabel, slideForwardsLabel, resourceTypes = [] }: Props) => (
  <StyledSection>
    {!!name && <StyledHeadingH2>{name}</StyledHeadingH2>}
    <Carousel
      leftButton={
        <IconButtonV2 aria-label={slideBackwardsLabel}>
          <ChevronLeft />
        </IconButtonV2>
      }
      rightButton={
        <IconButtonV2 aria-label={slideForwardsLabel}>
          <ChevronRight />
        </IconButtonV2>
      }
      items={movies.map((movie) => (
        <FilmContentCard key={movie.id} movie={movie} type="list" lazy resourceTypes={resourceTypes} />
      ))}
    />
  </StyledSection>
);

export default FilmMovieList;
