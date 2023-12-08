/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { themes } from './themes';
import { ButtonSize, ButtonColor, ButtonShape, ButtonVariant, ButtonFontWeight } from './types';

export interface ButtonStyleProps {
  colorTheme?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  inverted?: boolean;
  fontWeight?: ButtonFontWeight;
}

const shapeStyles: Partial<Record<ButtonShape, SerializedStyles>> = {
  pill: css`
    border-radius: ${spacing.normal};
  `,
  sharp: css`
    border-radius: 0;
  `,
};

const sizeStyles: Record<ButtonSize, SerializedStyles> = {
  xsmall: css`
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    ${fonts.sizes('12px', '14px')};
    min-height: 24px;
    border-width: 1px;
  `,
  small: css`
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    ${fonts.sizes('14px', '18px')};
    min-height: 32px;
    border-width: 1px;
  `,
  normal: css`
    padding: ${spacing.xxsmall} ${spacing.small};
    ${fonts.sizes('16px')};
    min-height: 40px;
  `,
  medium: css`
    padding: ${spacing.xxsmall} ${spacing.nsmall};
    ${fonts.sizes('16px', '18px')};
    min-height: 48px;
  `,
  large: css`
    padding: ${spacing.xxsmall} ${spacing.normal};
    ${fonts.sizes('18px', '20px')};
    min-height: 52px;
  `,
};

export const buttonStyle = ({
  size = 'normal',
  colorTheme = 'primary',
  shape = 'normal',
  inverted,
  variant = 'solid',
  fontWeight = 'semibold',
}: ButtonStyleProps) => {
  const theme = themes[colorTheme];
  return css`
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
    &:focus-visible {
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
    ${sizeStyles[size]}

    // Borders
    ${shapeStyles[shape]}
  
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
      &[disabled] {
        color: ${colors.brand.grey};
        background-color: transparent;
        border-color: ${colors.brand.grey};
        cursor: not-allowed;
      }
    `}
  ${variant === 'ghost' &&
    css`
      outline-width: 2px;
      color: ${theme.foreground === colors.white ? theme.background : theme.foreground};
      background: transparent;
      border-color: transparent;
      :hover,
      :active,
      :focus-visible {
        color: ${theme.foreground};
        background: ${theme.background};
        border-color: ${theme.background};
      }
      &[disabled] {
        color: ${colors.brand.grey};
        background-color: transparent;
        border-color: transparent;
        cursor: not-allowed;
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
      &:focus-visible {
        outline-width: 2px;
        box-shadow: ${colors.linkHover};
        color: ${colors.brand.primary};
        background: none;
        border: none;
      }
    `}
    ${variant === 'stripped' &&
    css`
      padding: 0;
      border-radius: 0;
      color: inherit;
      font-size: inherit;
      background-color: transparent;
      box-shadow: none;
      border: none;
      font-weight: ${fonts.weight.normal};
      &:hover,
      &:active,
      &:disabled,
      &:focus-visible {
        box-shadow: none;
        color: ${colors.brand.primary};
        background-color: transparent;
        border: none;
      }
      &:focus-visible {
        outline-width: medium;
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
};

interface Props {
  size?: ButtonSize;
  colorTheme?: ButtonColor;
  variant?: ButtonVariant;
  inverted?: boolean;
  shape?: ButtonShape;
  fontWeight?: ButtonFontWeight;
}

export type ButtonProps = Props & ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Knapp-komponent
 */
const ButtonV2 = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorTheme = 'primary', size, variant, inverted, shape, fontWeight, children, type = 'button', ...rest }, ref) => {
    return (
      <button
        // eslint-disable-next-line react/button-has-type
        type={type}
        css={buttonStyle({ colorTheme, size, variant, inverted, shape, fontWeight })}
        {...rest}
        ref={ref}
      >
        {children}
      </button>
    );
  },
);

export default ButtonV2;
