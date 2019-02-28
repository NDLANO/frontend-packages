/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'react-emotion';
import { spacing } from '@ndla/core';
import { SafeLink } from '@ndla/ui';

const ItemWrapperCSS = props => css`
  padding: ${spacing.xsmall};
  color: #fff;
  box-shadow: none;
  width: ${props.imageWidth}px;
  ${props.asDiv &&
    css`
      &:hover,
      &:focus {
        .c-film-movielist__movie-title {
          text-decoration: underline;
        }
        .c-film-movielist__movie-tags {
          opacity: 1;
        }
        .c-film-movielist__slidecolumn-image:before {
          opacity: 0.3;
        }
      }
    `}
`;

const ItemWrapper = ({
  toLinkProps,
  title,
  imageWidth,
  imageHeight,
  children,
}) => {
  if (toLinkProps) {
    return (
      <SafeLink
        {...toLinkProps()}
        className={ItemWrapperCSS({ imageWidth })}
        title={title}>
        {children({ imageHeight, imageWidth })}
      </SafeLink>
    );
  }
  return (
    <div className={ItemWrapperCSS({ imageWidth, asDiv: true })}>
      {children({ imageHeight, imageWidth })}
    </div>
  );
};

ItemWrapper.propTypes = {
  url: PropTypes.string,
  title: (props, propName, componentName) => {
    if (props['url'] && typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Validation failed. Must have title prop as string if url defined`,
      );
    }
  },
  children: PropTypes.func.isRequired,
};

export default ItemWrapper;
