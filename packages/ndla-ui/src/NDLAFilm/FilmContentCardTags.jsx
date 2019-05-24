import React from 'react';
import PropTypes from 'prop-types';
import { spacing, colors, fonts, misc } from '@ndla/core';
import { css } from '@emotion/core';

const FilmContentCardTags = ({ movieResourceTypes, resourceTypes }) => {
  const resources = {};
  movieResourceTypes.forEach(movieResourceType => {
    const resource = resourceTypes.find(
      resourceType => resourceType.id === movieResourceType.id,
    );
    if (resource) {
      resources[resource.name] = true;
    }
  });
  return (
    <div css={wrapperCSS}>
      {Object.keys(resources).map(resourceName => (
        <span css={movieTagsCSS} key={resourceName}>
          {resourceName}
        </span>
      ))}
    </div>
  );
};

const wrapperCSS = css`
  transition: opacity 200ms ease;
  padding: ${spacing.xsmall} ${spacing.xsmall};
  opacity: 0;
  display: relative;
  z-index: 1;
`;

const movieTagsCSS = css`
  ${fonts.sizes('14px', '16px')};
  font-weight: ${fonts.weight.semibold};
  background: ${colors.brand.greyLight};
  padding: calc(${spacing.xsmall} / 2) ${spacing.xsmall};
  border-radius: ${misc.borderRadius};
  color: ${colors.text.primary};
  margin-right: ${spacing.spacingUnit / 4}px;
  margin-bottom: ${spacing.spacingUnit / 8}px;
`;

FilmContentCardTags.propTypes = {
  resourceTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FilmContentCardTags;
