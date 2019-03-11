/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { colors, spacing } from '@ndla/core';
import styled, { css } from 'react-emotion';

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  ${p =>
    p.highlightCC
      ? css`
          & li:first-child {
            margin-bottom: ${spacing.small};
            border-bottom: 1px solid ${colors.brand.tertiary};
            padding-bottom: ${spacing.small};
            svg {
              fill: ${colors.brand.primary};
            }
          }
        `
      : ''};
  flex-direction: ${p => (p.horizontal ? 'row' : 'column')};
  color: ${p => p.color || 'black'};
  fill: ${p => p.color || 'black'};
  margin-right: ${p => (p.marginRight ? spacing.small : 0)};
`;

const StyledLicenseIconList = ({
  highlightCC,
  horizontal,
  color,
  marginRight,
  children,
}) => {
  return (
    <StyledList
      marginRight={marginRight}
      color={color}
      horizontal={horizontal}
      highlightCC={highlightCC}>
      {children}
    </StyledList>
  );
};

StyledLicenseIconList.propTypes = {
  horizontal: PropTypes.bool,
  highlightCC: PropTypes.bool,
  color: PropTypes.string,
  marginRight: PropTypes.bool,
};

StyledLicenseIconList.defaultProps = {
  horizontal: false,
};

export default StyledLicenseIconList;
