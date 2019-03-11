/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';

const SpinnerDiv = styled('div')`
  border: calc(${props => spacing[props.size]} / 6.5) solid rgba(0, 0, 0, 0.1);
  border-bottom-color: ${colors.brand.primary};
  border-radius: 50%;
  animation: spinnerAnimation 0.7s linear infinite;
  height: ${props => spacing[props.size]};
  width: ${props => spacing[props.size]};
  display: block;
  margin: ${props => props.margin};
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ size, margin }) => (
  <SpinnerDiv size={size} margin={margin} />
);

Spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'medium', 'normal']),
  margin: PropTypes.string,
};

Spinner.defaultProps = {
  size: 'large',
  margin: `${spacing.normal} auto`,
};

export default Spinner;
