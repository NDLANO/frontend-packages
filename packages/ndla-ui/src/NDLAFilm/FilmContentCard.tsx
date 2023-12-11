/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { spacing, colors, fonts, breakpoints, misc, mq } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import FilmContentCardTags from './FilmContentCardTags';
import { MovieResourceType, MovieType } from './types';
import { makeSrcQueryString } from '../Image';

interface Props extends HTMLAttributes<HTMLElement> {
  movie: MovieType;
  resourceTypes: MovieResourceType[];
  hideTags?: boolean;
  className?: string;
  lazy?: boolean;
  type?: 'slideshow' | 'list';
}

const FilmContentCard = ({
  movie: { metaImage, resourceTypes: movieResourceTypes, title, id, path },
  resourceTypes,
  hideTags = false,
  className,
  type = 'slideshow',
  lazy,
  ...rest
}: Props) => {
  const backgroundImage = metaImage ? `${metaImage.url}?${makeSrcQueryString(600)}` : '';
  const contentTypeId = `${type}-content-type-${id}`;

  return (
    <StyledSafeLink
      onMouseDown={(e) => e.preventDefault()}
      to={path}
      data-type={type}
      aria-describedby={contentTypeId}
      className={className}
      {...rest}
    >
      <ImageWrapper>
        <StyledImage src={backgroundImage} loading={lazy ? 'lazy' : 'eager'} alt="" />
        {movieResourceTypes && !hideTags && (
          <FilmContentCardTags
            id={contentTypeId}
            movieResourceTypes={movieResourceTypes}
            resourceTypes={resourceTypes}
          />
        )}
      </ImageWrapper>
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

const ImageWrapper = styled.div`
  position: relative;
  background-color: ${colors.ndlaFilm.filmColorLight};
  border-radius: ${misc.borderRadius};
  overflow: hidden;
`;

const StyledImage = styled.img`
  aspect-ratio: 16/9;
  width: 100%;
  object-fit: cover;
`;

interface StyledSlideWrapperProps {
  columnWidth?: number;
}

const shouldForwardProp = (p: string) => p !== 'columnWidth';

const StyledSafeLink = styled(SafeLink, { shouldForwardProp })<StyledSlideWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  color: ${colors.white};
  box-shadow: none;
  &:hover,
  &:focus-within,
  &:active,
  &:focus {
    ${StyledMovieTitle} {
      text-decoration: underline;
    }
    [data-content-cards] {
      opacity: 1;
    }
    img {
      opacity: 0.7;
    }
  }
  &[data-type='slideshow'] {
    width: 30vw;
    ${mq.range({ until: breakpoints.tablet })} {
      width: 40vw;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      width: 30vw;
    }
  }
  &[data-type='list'] {
    width: 40vw;
    ${mq.range({ from: breakpoints.tablet, until: breakpoints.desktop })} {
      width: 28vw;
    }
    ${mq.range({ from: breakpoints.desktop })} {
      width: 20vw;
    }
    ${mq.range({ from: breakpoints.ultraWide })} {
      width: 14vw;
    }
  }
`;

export default FilmContentCard;
