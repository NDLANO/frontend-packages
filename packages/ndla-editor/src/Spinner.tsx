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
import { spacing, colors, SpacingNames } from '@ndla/core';

interface SpinnerDivProps {
  size: SpacingNames;
  inverted?: boolean;
  margin: string;
}

const SpinnerDiv = styled.div<SpinnerDivProps>`
  border: calc(${(props) => spacing[props.size]} / 6.5) solid rgba(0, 0, 0, 0.1);
  border-bottom-color: ${(props) => (props.inverted ? '#fff' : colors.brand.primary)};
  border-radius: 50%;
  animation: spinnerAnimation 0.7s linear infinite;
  height: ${(props) => spacing[props.size]};
  width: ${(props) => spacing[props.size]};
  display: block;
  margin: ${(props) => props.margin};
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

type SpinnerProps = Partial<SpinnerDivProps>;

const Spinner = ({ size = 'large', margin = `${spacing.normal} auto`, inverted = false }: SpinnerProps) => {
  return <SpinnerDiv size={size} margin={margin} inverted={inverted} />;
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['xxsmall', 'xsmall', 'small', 'nsmall', 'normal', 'medium', 'large']),
  margin: PropTypes.string,
  inverted: PropTypes.bool,
};

Spinner.defaultProps = {
  size: 'large',
  margin: `${spacing.normal} auto`,
  inverted: false,
};

export default Spinner;
