import React from 'react';
import PropTypes from 'prop-types';
import { spacing, colors, fonts, misc } from '@ndla/core';
import styled from '@emotion/styled';

const StyledWrapperDiv = styled.div`
  transition: opacity 200ms ease;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  opacity: 0;
  display: relative;
  z-index: 1;
`;

const StyledMovieTags = styled.span`
  ${fonts.sizes('14px', '16px')};
  font-weight: ${fonts.weight.semibold};
  background: ${colors.brand.greyLight};
  padding: calc(${spacing.xsmall} / 2) ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  color: ${colors.text.primary};
  margin-right: ${spacing.spacingUnit / 4}px;
  margin-bottom: ${spacing.spacingUnit / 8}px;
`;

const FilmContentCardTags = ({ movieResourceTypes, resourceTypes }) => {
  const resources = {};
  movieResourceTypes.forEach((movieResourceType) => {
    const resource = resourceTypes.find((resourceType) => resourceType.id === movieResourceType.id);
    if (resource) {
      resources[resource.name] = true;
    }
  });
  return (
    <StyledWrapperDiv>
      {Object.keys(resources).map((resourceName) => (
        <StyledMovieTags key={resourceName}>{resourceName}</StyledMovieTags>
      ))}
    </StyledWrapperDiv>
  );
};

FilmContentCardTags.propTypes = {
  resourceTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmContentCardTags;
