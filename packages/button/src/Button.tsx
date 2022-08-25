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

export type ButtonSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large';
type ButtonColor = 'primary' | 'light' | 'lighter' | 'greyLighter' | 'greyLightest';
type ButtonBorder = 'normal' | 'pill' | 'sharpened';
type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link' | 'text';

interface ButtonStyleProps {
  size?: ButtonSize;
  outline?: boolean;
  variant?: ButtonVariant;
  theme: ButtonTheme;
  border?: ButtonBorder;
  inverted?: boolean;
}

const buttonStyle = ({
  size = 'normal',
  theme,
  border = 'normal',
  inverted,
  variant = 'solid',
}: ButtonStyleProps) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  color: ${theme.foreground};
  background: ${theme.background};
  border: 2px solid ${theme.background};
  border-radius: ${misc.borderRadius};
  outline-width: 0;
  cursor: pointer;
  text-decoration: none;

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

  // Sizes
  ${size === 'xsmall' &&
  css`
    padding: ${spacing.xxsmall} ${border === 'pill' ? spacing.small : spacing.xsmall};
    ${fonts.sizes('12px', '14px')};
    min-height: 24px;
    border-width: 1px;
  `}
  ${size === 'small' &&
  css`
    padding: ${spacing.xxsmall} ${border === 'pill' ? spacing.small : spacing.xsmall};
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
  ${border === 'pill' &&
  css`
    border-radius: ${spacing.normal};
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
};

interface Props {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  outline?: boolean;
  colorTheme?: ButtonColor;
  variant?: ButtonVariant;
  inverted?: boolean;
  border?: ButtonBorder;
  noBackground?: boolean;
  link?: boolean;
}

export type ButtonProps = Props & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'>;

const Button = ({ colorTheme, children, ...rest }: ButtonProps) => {
  const theme = themes[colorTheme || 'primary'];
  return (
    <button css={buttonStyle({ ...rest, theme })} {...rest}>
      {children}
    </button>
  );
};

export default Button;
