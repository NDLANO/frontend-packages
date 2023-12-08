/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, forwardRef } from 'react';
import { css } from '@emotion/react';
import { spacingUnit } from '@ndla/core';
import { ButtonProps, buttonStyle, ButtonStyleProps } from './ButtonV2';

export const svgSizes = {
  xsmall: spacingUnit * 0.75,
  small: spacingUnit,
  normal: spacingUnit * 1.25,
  medium: spacingUnit * 2,
  large: spacingUnit * 2.5,
};

export const iconButtonStyle = ({ size = 'small', colorTheme = 'primary', ...props }: ButtonStyleProps) => css`
  ${buttonStyle({ size, colorTheme, ...props })}

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

export interface IconButtonProps extends Omit<ButtonProps, 'shape'> {
  ['aria-label']: string;
  /** Usually an icon from `'@ndla/icons'` */
  children?: ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { type = 'button', size = 'small', colorTheme = 'primary', variant, fontWeight, inverted, children, ...rest },
    ref,
  ) => (
    // eslint-disable-next-line react/button-has-type
    <button type={type} ref={ref} css={iconButtonStyle({ size, variant, fontWeight, inverted, colorTheme })} {...rest}>
      {children}
    </button>
  ),
);

export default IconButton;
