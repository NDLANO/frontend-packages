/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { spacing, colors, fonts, breakpoints } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
import { makeSrcQueryString } from '../Image';
import FilmContentCardTags from './FilmContentCardTags';
import { MovieResourceType, MovieType } from './types';

interface Props {
  movie: MovieType;
  columnWidth: number;
  distanceBetweenItems?: number;
  resourceTypes: MovieResourceType[];
  resizeThumbnailImages?: boolean;
  hideTags?: boolean;
}

const FilmContentCard = ({
  movie: { metaImage, resourceTypes: movieResourceTypes, title, id, path },
  columnWidth,
  distanceBetweenItems,
  resourceTypes,
  resizeThumbnailImages,
  hideTags = false,
}: Props) => {
  let backgroundImage = `${(metaImage && metaImage.url) || ''}`;
  const contentTypeId = `content-type-${id}`;
  if (resizeThumbnailImages && metaImage) {
    backgroundImage += '?width=480';
  }

  return (
    <StyledSafeLink
      onMouseDown={(e) => e.preventDefault()}
      to={path}
      aria-describedby={contentTypeId}
      columnWidth={columnWidth}
      style={{ marginRight: `${distanceBetweenItems}px` }}
    >
      <StyledImage
        role="img"
        columnWidth={columnWidth}
        style={{
          backgroundImage: `url(${backgroundImage}?${makeSrcQueryString(600)})`,
        }}
      >
        {movieResourceTypes && !hideTags && (
          <FilmContentCardTags
            id={contentTypeId}
            movieResourceTypes={movieResourceTypes}
            resourceTypes={resourceTypes}
          />
        )}
      </StyledImage>
      <StyledMovieTitle>{title}</StyledMovieTitle>
    </StyledSafeLink>
  );
};

const StyledMovieTitle = styled.span`
  ${fonts.sizes('14px', '20px')};
  font-weight: ${fonts.weight.semibold};
  color: #fff;
  @media (min-width: ${breakpoints.mobileWide}) {
    ${fonts.sizes('16px', '22px')};
  }
  @media (min-width: ${breakpoints.tablet}) {
    ${fonts.sizes('18px', '24px')};
  }
`;

interface StyledImageProps {
  columnWidth: number;
}
const StyledImage = styled.div<StyledImageProps>`
  height: ${(props) => props.columnWidth * 0.5625}px;
  background-size: cover;
  background-color: ${colors.ndlaFilm.filmColorLight};
  background-position-x: center;
  background-position-y: center;
  position: relative;
  display: flex;
  align-items: flex-end;
  &:before {
    content: '';
    transition: 200ms ease;
    display: block;
    background: ${colors.ndlaFilm.filmColor};
    opacity: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`;

interface StyledSlideWrapperProps {
  columnWidth: number;
}

const shouldForwardProp = (p: string) => p !== 'columnWidth';

const StyledSafeLink = styled(SafeLink, { shouldForwardProp })<StyledSlideWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  width: ${(props) => props.columnWidth}px;
  color: #fff;
  box-shadow: none;
  &:hover,
  &:focus-within,
  &:active,
  &:focus {
    ${StyledMovieTitle} {
      text-decoration: underline;
    }
    ${StyledImage} {
      &:before {
        opacity: 0.3;
      }
      > div {
        opacity: 1;
      }
    }
  }
`;

export default FilmContentCard;
