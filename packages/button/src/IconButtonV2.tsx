/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { spacingUnit } from '@ndla/core';
import { css } from '@emotion/react';
import { ButtonProps, buttonStyle, ButtonStyleProps } from './ButtonV2';
import { ButtonSize } from './types';

export const svgSizes = {
  xsmall: spacingUnit * 0.75,
  small: spacingUnit,
  normal: spacingUnit * 1.25,
  medium: spacingUnit * 2,
  large: spacingUnit * 2.5,
};

interface IconButtonStyleProps extends ButtonStyleProps {
  size: ButtonSize;
}

export const iconButtonStyle = ({ size, ...props }: IconButtonStyleProps) => css`
  ${buttonStyle({ size, ...props })}

  border-radius: 100%;
  padding: ${spacingUnit * (svgSizes[size] > spacingUnit ? 0.5 : 0.25)}px;
  line-height: 1;
  border-color: transparent;
  min-height: unset;
  svg {
    width: ${svgSizes[size]}px;
    height: ${svgSizes[size]}px;
    margin: 0;
  }
`;

export interface IconButtonProps extends ButtonProps {
  ['aria-label']: string;
}

export const IconButton = ({
  children,
  size = 'small',
  colorTheme = 'primary',
  variant,
  shape,
  fontWeight,
  inverted,
  ...rest
}: IconButtonProps) => (
  <button css={iconButtonStyle({ size, variant, shape, fontWeight, inverted, colorTheme })} {...rest}>
    {children}
  </button>
);

export default IconButton;
