/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import css from '@emotion/css';
import { colors, fonts, misc, spacing } from '@ndla/core';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { themes } from './themes';
import { ButtonSize, ButtonColor, ButtonShape, ButtonVariant, ButtonTheme, ButtonFontWeight } from './types';

interface ButtonStyleProps {
  theme: ButtonTheme;
  size: ButtonSize | undefined;
  variant: ButtonVariant | undefined;
  shape: ButtonShape | undefined;
  inverted: boolean | undefined;
  fontWeight: ButtonFontWeight | undefined;
}

export const buttonStyle = ({
  size = 'normal',
  theme,
  shape = 'normal',
  inverted,
  variant = 'solid',
  fontWeight = 'semibold',
}: ButtonStyleProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${spacing.xsmall};

  color: ${theme.foreground};
  background: ${theme.background};
  border: 2px solid ${theme.background};
  border-radius: ${misc.borderRadius};
  outline-width: 0;
  cursor: pointer;
  text-decoration: none;

  font-family: ${fonts.sans};
  font-weight: ${fonts.weight[fontWeight]};
  transition: ${misc.transition.default};
  box-shadow: none;
  text-align: center;

  &:hover,
  &:focus {
    color: ${theme.hoverForeground};
    background-color: ${theme.hoverBackground};
    border-color: ${theme.hoverBackground};
  }

  &[disabled] {
    color: ${colors.brand.grey};
    background-color: ${colors.background.dark};
    border-color: transparent;
    cursor: not-allowed;
  }

  // Sizes
  ${size === 'xsmall' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    ${fonts.sizes('12px', '14px')};
    min-height: 24px;
    border-width: 1px;
  `}
  ${size === 'small' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    ${fonts.sizes('14px', '18px')};
    min-height: 32px;
    border-width: 1px;
  `}
  ${size === 'normal' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.small};
    ${fonts.sizes('16px')};
    min-height: 40px;
  `}
  ${size === 'medium' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.nsmall};
    ${fonts.sizes('16px', '18px')};
    min-height: 48px;
  `}
  ${size === 'large' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.normal};
    ${fonts.sizes('18px', '20px')};
    min-height: 52px;
  `}

  // Borders
  ${shape === 'pill' &&
  css`
    border-radius: ${spacing.normal};
  `}
  ${shape === 'sharp' &&
  css`
    border-radius: 0;
  `}
  
  // Variants
  ${variant === 'outline' &&
  css`
    color: ${theme.background};
    background: transparent;
    border-color: ${theme.background};
    :hover {
      color: ${theme.foreground};
      background: ${theme.background};
      border-color: ${theme.background};
    }
  `}
  ${variant === 'ghost' &&
  css`
    outline-width: 2px;
    color: ${theme.foreground};
    background: transparent;
    border-color: transparent;
    :hover,
    :active,
    :focus {
      color: ${theme.foreground};
      background: ${theme.background};
      border-color: ${theme.background};
    }
  `}
  ${variant === 'link' &&
  css`
    border-radius: 0;
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    color: ${colors.brand.primary};
    box-shadow: ${colors.link};
    background: none;
    border: none;
    font-weight: ${fonts.weight.normal};
    min-height: unset;
    &:hover,
    &:active,
    &:disabled,
    &:focus {
      outline-width: 2px;
      box-shadow: ${colors.linkHover};
      color: ${colors.brand.primary};
      background: none;
      border: none;
    }
  `}

  // Modifiers
  ${inverted &&
  css`
    background: transparent;
    color: ${colors.white};
    border-color: ${variant === 'outline' ? colors.white : 'transparent'};
    :hover {
      color: ${theme.foreground};
      background: ${theme.background};
      border-color: ${variant === 'outline' ? theme.background : 'transparent'};
    }
  `}
`;

interface Props {
  size?: ButtonSize;
  colorTheme?: ButtonColor;
  variant?: ButtonVariant;
  inverted?: boolean;
  shape?: ButtonShape;
  fontWeight?: ButtonFontWeight;
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorTheme = 'primary', size, variant, inverted, shape, fontWeight, children, ...rest }, ref) => {
    const theme = themes[colorTheme];
    return (
      <button css={buttonStyle({ theme, size, variant, inverted, shape, fontWeight })} {...rest}>
        {children}
      </button>
    );
  },
);

export default Button;
