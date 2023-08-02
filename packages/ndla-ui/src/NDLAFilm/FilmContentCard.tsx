/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes } from 'react';
import { spacing, colors, fonts, breakpoints, misc } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
import { makeSrcQueryString } from '../Image';
import FilmContentCardTags from './FilmContentCardTags';
import { MovieResourceType, MovieType } from './types';

interface Props extends HTMLAttributes<HTMLElement> {
  movie: MovieType;
  columnWidth: number;
  distanceBetweenItems?: number;
  resourceTypes: MovieResourceType[];
  resizeThumbnailImages?: boolean;
  hideTags?: boolean;
  className?: string;
}

const FilmContentCard = ({
  movie: { metaImage, resourceTypes: movieResourceTypes, title, id, path },
  columnWidth,
  distanceBetweenItems,
  resourceTypes,
  resizeThumbnailImages,
  hideTags = false,
  className,
  ...rest
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
      className={className}
      style={{ marginRight: `${distanceBetweenItems}px` }}
      {...rest}
    >
      <StyledImage
        role="img"
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

const StyledImage = styled.div`
  aspect-ratio: 16/9;
  background-size: cover;
  background-color: ${colors.ndlaFilm.filmColorLight};
  background-position-x: center;
  background-position-y: center;
  border-radius: ${misc.borderRadius};
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
