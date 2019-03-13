import React from 'react';
import PropTypes from 'prop-types';
import { spacing, colors, fonts, misc, breakpoints } from '@ndla/core';
import { SafeLink } from '@ndla/ui';
import styled from '@emotion/styled';

const FilmContentCard = ({ movie, columnWidth, resourceTypes }) => {
  return (
    <StyledSlideWrapper key={movie.id}>
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
};

const StyledMovieTags = styled.span`
  transition: opacity 200ms ease;
  background: ${colors.brand.greyLight};
  padding: ${spacing.small} / 4 ${spacing.small} / 2;
  ${fonts.sizes('14px', '16px')};
  font-weight: ${fonts.weight.semibold};
  border-radius: ${misc.borderRadius};
  color: ${colors.brand.primary};
  margin-right: ${spacing.small} / 2;
  margin-bottom: ${spacing.small} / 4;
  opacity: 0;
`;
const StyledMovieTitle = styled.h2`
  ${fonts.sizes('14px', '20px')};
  font-weight: ${fonts.weight.bold};
  color: #fff;
  margin: calc(${spacing.small} / 2) 0 ${spacing.small};
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
  width: ${props => props.columnWidth}px;
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
  padding: calc(${spacing.small} / 2);
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
  padding: ${spacing.small} / 2 ${spacing.small};
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
  resourceTypes: PropTypes.arrayOf(PropTypes.object),
};

export default FilmContentCard;
