/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacingUnit } from '@ndla/core';
import { Button, ButtonSize, ButtonProps } from './OldButton';

export interface IconButtonProps extends ButtonProps {
  ['aria-label']: string;
}

interface StyledButtonProps extends ButtonProps {
  svgSize: number;
}

const StyledButton = styled(Button)<StyledButtonProps>`
  border-radius: 100%;
  padding: ${({ svgSize }) => spacingUnit * (svgSize > spacingUnit ? 0.5 : 0.25)}px;
  line-height: 1;
  border-color: transparent;
  svg {
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
    margin: 0;
  }
`;

export const convertSizeForSVG = (size: ButtonSize) => {
  if (size === 'xsmall') {
    return spacingUnit * 0.75;
  }
  if (size === 'small') {
    return spacingUnit * 1;
  }
  if (size === 'normal') {
    return spacingUnit * 1.25;
  }
  if (size === 'medium') {
    return spacingUnit * 2;
  }
  if (size === 'large') {
    return spacingUnit * 2.5;
  }
  return spacingUnit;
};

export const IconButton = ({ children, size, ...rest }: IconButtonProps) => (
  <StyledButton svgSize={convertSizeForSVG(size || 'normal')} {...rest}>
    <span aria-hidden="true">{children}</span>
  </StyledButton>
);

export default IconButton;
