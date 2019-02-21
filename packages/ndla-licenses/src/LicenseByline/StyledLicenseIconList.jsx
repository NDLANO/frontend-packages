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

const styleAppearances = {
  vertical: css`
    flex-direction: column;
  `,
  horizontal: css`
    flex-direction: row;
  `,
  marginRight: css`
    margin-right: ${spacing.small};
  `,
  grey: css`
    color: ${colors.brand.grey};
    fill: ${colors.brand.grey};
  `,
  /* Hack to differentiate CC-icon because it's not a license. Perhaps give it a class? */
  firstChildBlue: css`
    & li:first-child {
      margin-bottom: ${spacing.small};
      border-bottom: 1px solid ${colors.brand.tertiary};
      padding-bottom: ${spacing.small};
      svg {
        fill: ${colors.brand.primary};
      }
    }
  `,
};

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  ${p => p.appearance};
`;

const getAppearances = appearances =>
  appearances
    .filter(appearance => !!styleAppearances[appearance])
    .map(appearance => styleAppearances[appearance]);

const StyledLicenseIconList = ({ appearances, children }) => {
  return (
    <StyledList appearance={getAppearances(appearances)}>{children}</StyledList>
  );
};

StyledLicenseIconList.propTypes = {
  appearances: PropTypes.arrayOf(
    PropTypes.oneOf(['horizontal', 'vertical', 'grey', 'marginRight']),
  ),
};

StyledLicenseIconList.defaultProps = {
  appearances: ['vertical'],
};

export default StyledLicenseIconList;
