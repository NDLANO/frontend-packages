import React from 'react';
import PropTypes from 'prop-types';
import { spacing, colors, fonts, misc, breakpoints } from '@ndla/core';
import { SafeLink } from '@ndla/ui';
import styled from 'react-emotion';

const FilmContentCard = ({ movie, columnWidth, distanceBetweenItems, resourceTypes }) => (
  <StyledSlideWrapper key={movie.id} columnWidth={columnWidth} style={{ marginRight: `${distanceBetweenItems}px` }}>
    <SafeLink to={movie.url}>
      <StyledImage
        role="img"
        columnWidth={columnWidth}
        aria-label={(movie.metaImage && movie.metaImage.alt) || ''}
        style={{
          backgroundImage: `url(${(movie.metaImage && movie.metaImage.url) ||
            ''})`,
        }}>
        <StyledTagWrapper>
          {Object.keys(movie.movieTypes).map(movieType => {
            const resource = resourceTypes.find(
              resourceType => resourceType.id === movieType,
            );
            return resource ? (
              <StyledMovieTags key={movieType}>
                {resource.name}
              </StyledMovieTags>
            ) : null;
          })}
        </StyledTagWrapper>
      </StyledImage>
      <StyledMovieTitle>{movie.title}</StyledMovieTitle>
    </SafeLink>
  </StyledSlideWrapper>
);

const StyledMovieTags = styled.span`
  transition: opacity 200ms ease;
  background: ${colors.brand.greyLight};
  padding: calc(${spacing.xsmall} / 2) ${spacing.xsmall};
  ${fonts.sizes('14px', '16px')};
  font-weight: ${fonts.weight.semibold};
  border-radius: ${misc.borderRadius};
  color: ${colors.text.primary};
  margin-right: ${spacing.spacingUnit / 4}px;
  margin-bottom: ${spacing.spacingUnit / 8}px;
  opacity: 0;
`;
const StyledMovieTitle = styled.h2`
  ${fonts.sizes('14px', '20px')};
  font-weight: ${fonts.weight.bold};
  color: #fff;
  margin: ${spacing.xsmall} 0 ${spacing.small};
  @media (min-width: ${breakpoints.mobileWide}) {
    ${fonts.sizes('16px', '22px')};
  }
  @media (min-width: ${breakpoints.tablet}) {
    margin: ${spacing.small} 0;
    ${fonts.sizes('18px', '24px')};
  }
`;
const StyledImage = styled.div`
  height: ${props => props.columnWidth * 0.5625}px;
  background-size: cover;
  background-position-x: center;
  background-position-y: center;
  position: relative;
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
  width: ${props => props.columnWidth}px;
  color: #fff;
  box-shadow: none;
  &:hover,
  &:focus {
    ${StyledMovieTitle} {
      text-decoration: underline;
    }
    ${StyledMovieTags} {
      opacity: 1;
    }
    ${StyledImage}:before {
      opacity: 0.3;
    }
  }
`;

const StyledTagWrapper = styled.div`
  padding: ${spacing.xsmall} ${spacing.xsmall};
  flex-flow: wrap;
  display: flex;
  position: absolute;
  bottom: 0;
`;

FilmContentCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
  }),
  columnWidth: PropTypes.number,
  distanceBetweenItems: PropTypes.number,
  resourceTypes: PropTypes.arrayOf(PropTypes.object),
};

export default FilmContentCard;
