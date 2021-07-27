import React from 'react';
import PropTypes from 'prop-types';
import { spacing, colors, fonts, breakpoints } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import styled from '@emotion/styled';
// @ts-ignore
import { makeSrcQueryString } from '../Image';
import FilmContentCardTags from './FilmContentCardTags';

const FilmContentCard = ({
  movie: { metaImage, resourceTypes: movieResourceTypes, title, id, path },
  columnWidth,
  distanceBetweenItems,
  resourceTypes,
  resizeThumbnailImages,
  hideTags,
}) => {
  let backgroundImage = `${(metaImage && metaImage.url) || ''}`;
  if (resizeThumbnailImages && metaImage) {
    backgroundImage += '?width=480';
  }

  return (
    <StyledSlideWrapper key={id} columnWidth={columnWidth} style={{ marginRight: `${distanceBetweenItems}px` }}>
      <SafeLink to={path}>
        <StyledImage
          role="img"
          columnWidth={columnWidth}
          aria-label={(metaImage && metaImage.alt) || ''}
          style={{
            backgroundImage: `url(${backgroundImage}?${makeSrcQueryString(600)})`,
          }}>
          {movieResourceTypes && !hideTags && (
            <FilmContentCardTags movieResourceTypes={movieResourceTypes} resourceTypes={resourceTypes} />
          )}
        </StyledImage>
        <StyledMovieTitle>{title}</StyledMovieTitle>
      </SafeLink>
    </StyledSlideWrapper>
  );
};

const StyledMovieTitle = styled.h2`
  ${fonts.sizes('14px', '20px')};
  font-weight: ${fonts.weight.semibold};
  color: #fff;
  margin: ${spacing.xsmall} 0 ${spacing.normal};
  min-height: ${spacing.large};
  @media (min-width: ${breakpoints.mobileWide}) {
    ${fonts.sizes('16px', '22px')};
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin: ${spacing.small} 0;
    ${fonts.sizes('18px', '24px')};
  }
`;

const StyledImage = styled.div`
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

const StyledSlideWrapper = styled.div`
  width: ${(props) => props.columnWidth}px;
  color: #fff;
  box-shadow: none;
  &:hover,
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

FilmContentCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
  columnWidth: PropTypes.number,
  distanceBetweenItems: PropTypes.number,
  resourceTypes: PropTypes.arrayOf(PropTypes.object),
  resizeThumbnailImages: PropTypes.bool,
  hideTags: PropTypes.bool,
};

FilmContentCard.defaultProps = {
  hideTags: false,
};

export default FilmContentCard;
