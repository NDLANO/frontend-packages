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
  noBackground?: boolean;
  link?: boolean;
}

const buttonStyle = ({ disabled, size, outline, theme, border, inverted, noBackground, link }: ButtonStyleProps) => css`
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
  font-weight: ${fonts.weight.semibold};
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
  &:focus {
    box-shadow: 0 0 2px ${colors.brand.primary};
  }

  // Borders
  ${border === 'pill' &&
  css`
    border-radius: ${spacing.normal};
  `}

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

  // Modifiers
  ${outline &&
  css`
    background: transparent;
    border-color: ${theme.background};
    color: ${theme.background};
  `}

  ${inverted &&
  css`
    background: transparent;
    color: ${colors.white};
    border-color: ${outline ? colors.white : 'transparent'};
    :hover {
      background: ${theme.background};
      color: ${theme.foreground};
      border-color: ${outline ? theme.background : 'transparent'};
    }
  `}

  ${link &&
  css`
    padding: 0;
    font-size: inherit;
    line-height: inherit;
    color: ${colors.brand.primary};
    box-shadow: ${colors.link};
    &:hover,
    &:focus {
      box-shadow: ${colors.linkHover};
    }
  `}

  ${noBackground &&
  css`
    background: transparent;
    border-color: transparent;
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
    foreground: colors.brand.primary,
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
  colorTheme?: ButtonColor;
  inverted?: boolean;
  border?: ButtonBorder;
  noBackground?: boolean;
  link?: boolean;
}

type ButtonProps = Props & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

const Button = ({ colorTheme, children, ...rest }: ButtonProps) => {
  const theme = themes[colorTheme || 'primary'];
  return (
    <button css={buttonStyle({ ...rest, theme })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
