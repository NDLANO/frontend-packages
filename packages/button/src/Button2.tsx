/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import css from '@emotion/css';
import { colors, fonts, misc, spacing } from '@ndla/core';
import React, { ButtonHTMLAttributes } from 'react';

type ButtonSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large';
type ButtonColor = 'primary' | 'light' | 'lighter' | 'greyLighter' | 'greyLightest' | 'ghost';
type ButtonBorder = 'normal' | 'pill' | 'sharpened';

interface ButtonStyleProps {
  disabled?: boolean;
  size?: ButtonSize;
  outline?: boolean;
  theme: ButtonTheme;
  border?: ButtonBorder;
  inverted?: boolean;
}

const buttonStyle = ({ disabled, size, outline, theme, border }: ButtonStyleProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${theme.foreground};
  background: ${theme.background};

  border: 2px solid ${theme.background};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xxsmall} ${spacing.small};
  outline-width: 0;
  cursor: pointer;
  text-decoration: none;
  ${fonts.sizes('16px')}
  min-height: 40px;

  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.bold};
  transition: ${misc.transition.default};
  box-shadow: none;
  text-align: center;

  &:hover,
  &:focus {
    color: ${colors.white};
    background-color: ${theme.hoverBackground};
    border: 2px solid ${theme.hoverBackground};
  }

  &[disabled] {
    color: ${colors.brand.grey};
    background-color: ${colors.background.dark};
    border-color: transparent;
    cursor: not-allowed;
  }
  &:focus {
    box-shadow: 0 0 2px ${colors.brand.primary};
  }

  ${size === 'xsmall' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    ${fonts.sizes('12px', '14px')};
    min-height: 24px;
  `}
  ${size === 'small' &&
  css`
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    ${fonts.sizes('12px', '14px')};
    min-height: 32px;
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
`;

interface ButtonTheme {
  foreground: string;
  background: string;
  hoverForeground: string;
  hoverBackground: string;
}

const themes: Record<ButtonColor, ButtonTheme> = {
  primary: {
    foreground: colors.white,
    background: colors.brand.primary,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.dark,
  },
  light: {
    foreground: colors.brand.primary,
    background: colors.brand.light,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.dark,
  },
  lighter: {
    foreground: colors.brand.primary,
    background: colors.brand.lighter,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.primary,
  },
  greyLighter: {
    foreground: colors.brand.primary,
    background: colors.brand.greyLighter,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.primary,
  },
  greyLightest: {
    foreground: colors.brand.primary,
    background: colors.brand.greyLightest,
    hoverForeground: colors.white,
    hoverBackground: colors.brand.primary,
  },
  ghost: {
    foreground: colors.white,
    background: 'transparent',
    hoverForeground: colors.brand.primary,
    hoverBackground: colors.brand.lighter,
  },
};

interface Props {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  outline?: boolean;
  color?: ButtonColor;
  inverted?: boolean;
  border?: ButtonBorder;
}

type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button2 = ({ color, inverted, children, ...rest }: ButtonProps) => {
  const theme = themes[color || 'primary'];
  return (
    <button css={buttonStyle({ ...rest, theme })} {...rest}>
      {children}
    </button>
  );
};
