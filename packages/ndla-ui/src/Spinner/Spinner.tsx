/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, SpacingNames } from '@ndla/core';

interface Props {
  size?: SpacingNames;
  margin?: string;
  inverted?: boolean;
}

interface StyledProps extends Props {
  size: SpacingNames;
}

const SpinnerDiv = styled('div')<StyledProps>`
  border: calc(${(props) => spacing[props.size]} / 6.5) solid rgba(0, 0, 0, 0.1);
  border-bottom-color: ${(props) => (props.inverted ? '#fff' : colors.brand.primary)};
  border-radius: 50%;
  animation: spinnerAnimation 0.7s linear infinite;
  height: ${(props) => spacing[props.size]};
  width: ${(props) => spacing[props.size]};
  margin: ${(props) => props.margin};
  display: block;
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ size = 'large', margin = `${spacing.normal} auto`, inverted = false }: Props) => (
  <SpinnerDiv size={size} margin={margin} inverted={inverted} />
);

export default Spinner;
