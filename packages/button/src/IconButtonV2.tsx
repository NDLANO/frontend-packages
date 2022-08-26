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
import Button, { ButtonProps } from './ButtonV2';

export const svgSizes = {
  xsmall: spacingUnit * 0.75,
  small: spacingUnit,
  normal: spacingUnit * 1.25,
  medium: spacingUnit * 2,
  large: spacingUnit * 2.5,
};

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
  min-height: unset;
  svg {
    width: ${({ svgSize }) => svgSize}px;
    height: ${({ svgSize }) => svgSize}px;
    margin: 0;
  }
`;

export const IconButton = ({ children, size = 'small', ...rest }: IconButtonProps) => (
  <StyledButton svgSize={svgSizes[size]} {...rest}>
    <span aria-hidden="true">{children}</span>
  </StyledButton>
);

export default IconButton;
