/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import { breakpoints, spacing, colors, fonts } from '@ndla/core';
import SafeLink from '../common/SafeLink';

const StyledNewLetter = styled.h2`
  color: #fff;
  text-indent: ${spacing.spacingUnit * 0.75}px;
  margin: ${spacing.large} 0 ${spacing.spacingUnit * 0.75}px;
  &:after {
    content: "";
    display: block;
    height: 1px;
    background: ${colors.brand.grey};
    margin-top: ${spacing.xsmall}; 
  }
`;

const StyledWrapper = styled.section`
  max-width: 600px;
  margin: ${spacing.spacingUnit * 4}px auto;
`;

type MovieImageType = {
  backgroundImage: string;
}

const MovieItem = styled.div`
  display: flex;
  margin: 0 0 ${spacing.spacingUnit * 0.75}px;
  width: 100%;
  &:last-child {
    margin-bottom: ${spacing.large};
  }
`;

const MovieTextWrapper = styled.div`
  padding: ${spacing.xsmall} ${spacing.xsmall} 0 0;
  flex: 1;
`;

const MovieImage = styled.div<MovieImageType>`
  width: 135px;
  height: 90px;
  background-image: url(${(props: MovieImageType) => props.backgroundImage});
  background-size: cover;
  background-position: center center;
  margin: 0 ${spacing.spacingUnit * 0.75}px;
`;

const MovieTitle = styled.h3`
  color: #fff;
  margin: 0 0 2px;
  ${fonts.sizes(20, 1.3)};
`;

const MovieDescription = styled.p`
  color: ${colors.brand.greyLighter};
  margin: 0;
  ${fonts.sizes(16, 1.5)};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const StyledSafeLink = styled(SafeLink)`
  box-shadow: none;
  flex: 1;
  &:hover, &:focus {
    ${MovieTitle} {
      text-decoration: underline;
    }
  }
`;

const isLetter = (title: string): boolean => {
   const regTest: RegExp = /^[A-Za-z\ÅØÆåøæ]+$/;
   const firstLetter = title.substr(0,1);
   return !(firstLetter.match(regTest) === null);
}

export interface Props {
  movies: any;
}

const AllMoviesAlphabetically: React.FunctionComponent<Props> = ({ movies }) => {
  // Split into Letters.
  let previousLetter = '';
  return (
    <StyledWrapper>
      {movies.map((movie: any) => {
        const currentLetter = movie.title.substr(0, 1);
        const isNewLetter = currentLetter.localeCompare(previousLetter) === 1 && isLetter(movie.title);
        previousLetter = currentLetter;
        return (
          <Fragment key={movie.id}>
            {isNewLetter && <StyledNewLetter>{movie.title.substr(0, 1)}</StyledNewLetter>}
            <MovieItem>
              <MovieImage backgroundImage={movie.metaImage.url} aria-description={movie.metaImage.alt} />
              <StyledSafeLink to={`/subjects${movie.path}`}>
                <MovieTextWrapper>
                  <MovieTitle>
                    {movie.title}
                  </MovieTitle>
                  <MovieDescription>
                    {movie.metaDescription}
                  </MovieDescription>
                </MovieTextWrapper>
              </StyledSafeLink>
            </MovieItem>
          </Fragment>
        );
      })}
    </StyledWrapper>
  );
}

export default AllMoviesAlphabetically;