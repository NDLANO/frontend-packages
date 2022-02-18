/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, spacingUnit, misc, fonts, animations, breakpoints, mq } from '@ndla/core';

export type ButtonAppearance =
  | 'outline'
  | 'link'
  | 'stripped'
  | 'lighter'
  | 'inverted'
  | 'invertedOutline'
  | 'ghostPill'
  | 'ghostPillInverted'
  | 'ghostPillOutline'
  | 'ghostPillOutlineInverted'
  | 'large'
  | 'clippedButton'
  | 'clippedButtonOutline'
  | 'clippedButtonAttachment'
  | 'clippedButtonAttachmentOutline'
  | 'clippedButtonLarge'
  | 'clippedButtonOutlineLarge'
  | 'clippedButtonAttachmentLarge'
  | 'clippedButtonAttachmentOutlineLarge';

export type ButtonSize = 'xsmall' | 'small' | 'normal' | 'medium' | 'large';
export type ButtonBorder = 'normal' | 'rounded' | 'sharpened';
export type ButtonWidth = 'auto' | 'full';
export type ButtonTextAlign = 'center' | 'left' | 'right';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  outline?: boolean;
  link?: boolean;
  large?: boolean;
  stripped?: boolean;
  light?: boolean;
  lighter?: boolean;
  ghostPill?: boolean;
  ghostPillInverted?: boolean;
  loading?: boolean;
  safelink?: string;
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  borderShape?: ButtonBorder;
  width?: ButtonWidth;
  textAlign?: ButtonTextAlign;
  darker?: boolean;
  greyLighter?: boolean;
  greyLightest?: boolean;
  submit?: boolean;
  ghostPillOutline?: boolean;
  ghostPillOutlineInverted?: boolean;
  clippedButton?: boolean;
  clippedButtonOutline?: boolean;
  clippedButtonAttachment?: boolean;
  clippedButtonAttachmentOutline?: boolean;
  inverted?: boolean;
  invertedOutline?: boolean;
}

export const strippedStyle = css`
  transition: background-color none;
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
  &:focus {
    box-shadow: none;
    color: ${colors.brand.primary};
    background-color: transparent;
    border: none;
  }
  &:focus {
    outline-width: medium;
  }
`;

export const pillStyle = css`
  padding: ${spacing.small} ${spacingUnit * 0.75}px;
  border-radius: ${spacing.normal};
  transition: background-color ${animations.durations.fast} ease-in-out;
  color: ${colors.brand.primary};
  ${fonts.sizes('16px', '18px')};
  background-color: transparent;
  > svg {
    margin-left: ${spacing.xsmall};
    height: 18px;
    width: 18px;
  }
  > span {
    box-shadow: 0 1px 0 ${colors.brand.primary};
  }
  &:hover {
    > span {
      box-shadow: none;
    }
  }
`;
export const outlineStyle = css`
  color: ${colors.brand.primary};
  background-color: transparent;
  border: 2px solid ${colors.brand.primary};
  box-shadow: none;
  &:hover,
  &:focus {
    color: white;
    background-color: ${colors.brand.primary};
    border: 2px solid transparent;
  }
  &:disabled {
    color: ${colors.brand.grey};
    border: 2px solid transparent;
    background-color: ${colors.background.dark};
    cursor: not-allowed;
  }
`;

const outlineWithSize = (size?: ButtonSize) =>
  css`
    ${outlineStyle}
    ${(size === 'xsmall' || size === 'small') &&
    `border-width:1px;
        &:hover,
        &:focus,
        &:disabled {
          border-width:1px;
        }
     `}
  `;

export const clippedButtonStyle = css`
  border-radius: ${misc.borderRadius} 0 0 ${misc.borderRadius};
`;
export const clippedButtonAttachmentStyle = css`
  border-radius: 0 ${misc.borderRadius} ${misc.borderRadius} 0;
`;
export const clippedButtonOutlineStyle = css`
  ${outlineStyle};
  border-radius: ${misc.borderRadius} 0 0 ${misc.borderRadius};
  border-right: 0;
  padding-right: calc(${spacing.small} + 2px);
  &:hover,
  &:focus,
  &:disabled {
    border-right: 0;
  }
`;
export const clippedButtonAttachmentOutlineStyle = css`
  ${outlineStyle};
  border-radius: 0 ${misc.borderRadius} ${misc.borderRadius} 0;
  border-left: 0;
  padding-left: calc(${spacing.small} + 2px);
  &:hover,
  &:focus,
  &:disabled {
    border-left: 0;
  }
`;

export const largeStyle = css`
  height: ${spacing.large};
  padding: 0 ${spacing.normal};
  ${fonts.sizes(18, 1.25)};
`;

export const roundedStyle = css`
  border-radius: 23px;
`;

export const sizes = {
  xsmall: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px ${spacing.xsmall};
    ${fonts.sizes('12px', '14px')};
    min-height: 24px;
    font-weight: ${fonts.weight.semibold};
  `,
  small: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: ${spacing.xsmall};
    padding-right: ${spacing.xsmall};
    ${fonts.sizes('14px', '18px')};
    min-height: 32px;
    font-weight: ${fonts.weight.semibold};
  `,
  normal: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: ${spacing.small};
    padding-right: ${spacing.small};
    ${fonts.sizes('16px')};
    min-height: 40px;
  `,
  medium: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: 16px;
    padding-right: 16px;
    ${fonts.sizes('16px', '18px')};
    min-height: 48px;
  `,
  large: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding-left: ${spacing.normal};
    padding-right: ${spacing.normal};
    ${fonts.sizes('18px', '20px')};
    min-height: 52px;
  `,
};

export const borderShapes = {
  normal: () => css`
    border-radius: ${misc.borderRadius};
  `,
  rounded: (size?: ButtonSize) => css`
    border-radius: 32px;
    font-weight: ${fonts.weight.semibold};
    padding-left: 20px;
    padding-right: 20px;
    ${size === 'xsmall' &&
    `padding-left: 10px;
       padding-right: 10px;`}
    ${size === 'small' &&
    `padding-left:${spacing.small};
       padding-right:${spacing.small};`}
     ${size === 'normal' &&
    `padding-left:16px;
       padding-right:16px;`}
    ${size === 'medium'
      ? `
      ${mq.range({ from: breakpoints.tablet })} {
        padding-left:${spacing.medium};
        padding-right:${spacing.medium};
      }`
      : null}
    ${size === 'large'
      ? `
        ${mq.range({ from: breakpoints.tablet })} {
        padding-left:${spacing.large};padding-right:${spacing.large};
      }`
      : null}
  `,
  sharpened: (size?: ButtonSize) => css`
    border-radius: 2px;
    font-weight: ${fonts.weight.semibold};
    ${size === 'medium' ? `padding-left:20px;padding-right:20px;` : null};
  `,
};

export const width = {
  auto: css`
    width: auto;
  `,
  full: css`
    width: 100%;
  `,
};

export const textAlign = {
  center: css`
    text-align: center;
  `,
  left: css`
    text-align: left;
  `,
  right: css`
    text-align: right;
  `,
};

export const appearances = {
  inverted: css`
    background: #0f2b47;
    color: #fff;
    .c-icon {
      fill: #fff;
    }
  `,
  invertedOutline: css`
    color: #fff;
    background-color: transparent;
    border: 2px solid #fff;
    font-weight: ${fonts.weight.bold};
    box-shadow: none;
    &:hover,
    &:focus {
      color: white;
      background-color: ${colors.brand.primary};
      border: 2px solid transparent;
    }
    &:disabled {
      border: 2px solid transparent;
      cursor: not-allowed;
    }
  `,
  lighter: css`
    ${fonts.sizes('12px', '15px')};
    background-color: ${colors.brand.lighter};
    border: 2px solid ${colors.brand.lighter};
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};

    &:hover,
    &:focus,
    &:active {
      background: ${colors.brand.primary};
      border-color: ${colors.brand.primary};
    }
    &:disabled {
      color: ${colors.brand.grey};
      border: 2px solid transparent;
      background-color: ${colors.background.dark};
      cursor: not-allowed;
    }
  `,
  darker: css`
    background-color: ${colors.brand.dark};
    border-color: ${colors.brand.dark};
    color: ${colors.background.default};
  `,
  light: css`
    background-color: ${colors.brand.light};
    border-color: ${colors.brand.light};
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};
  `,
  greyLighter: css`
    background-color: ${colors.brand.greyLighter};
    border-color: ${colors.brand.greyLighter};
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};
    &:hover,
    &:focus,
    &:active {
      background: ${colors.brand.primary};
      border-color: ${colors.brand.primary};
    }
  `,
  greyLightest: css`
    background-color: ${colors.brand.greyLightest};
    border-color: ${colors.brand.greyLightest};
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};
    &:hover,
    &:focus,
    &:active {
      background: ${colors.brand.primary};
      border-color: ${colors.brand.primary};
    }
  `,
  outline: css`
    ${outlineStyle};
  `,
  stripped: css`
    ${strippedStyle};
  `,
  link: css`
    ${strippedStyle};
    font-size: inherit;
    line-height: inherit;
    color: ${colors.brand.primary};
    box-shadow: ${colors.link};
    &:hover,
    &:focus {
      box-shadow: ${colors.linkHover};
    }
  `,
  ghostPillInverted: css`
    ${strippedStyle};
    ${pillStyle};
    color: ${colors.brand.lightest};
    > span {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      background-color: ${colors.brand.light};
      box-shadow: none;
      > span {
        box-shadow: none;
      }
    }
  `,
  ghostPill: css`
    ${strippedStyle};
    ${pillStyle};
    > span {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      background-color: ${colors.brand.light};
    }
  `,
  ghostPillOutline: css`
    ${strippedStyle};
    ${pillStyle};
    border: 2px solid ${colors.brand.primary};
    transition: ${misc.transition.default};
    > span {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      background-color: ${colors.brand.light};
      border: 2px solid transparent;
      > span {
        box-shadow: none;
      }
    }
  `,
  ghostPillOutlineInverted: css`
    ${strippedStyle};
    ${pillStyle};
    border: 2px solid #fff;
    transition: ${misc.transition.default};
    color: ${colors.brand.lightest};
    > span {
      box-shadow: none;
    }
    &:hover,
    &:focus {
      background-color: ${colors.brand.light};
      border: 2px solid transparent;
      > span {
        box-shadow: none;
      }
    }
  `,
  large: css`
    ${largeStyle};
  `,
  clippedButton: css`
    ${clippedButtonStyle};
  `,
  clippedButtonAttachment: css`
    ${clippedButtonAttachmentStyle};
  `,
  clippedButtonOutline: css`
    ${clippedButtonOutlineStyle};
  `,
  clippedButtonAttachmentOutline: css`
    ${clippedButtonAttachmentOutlineStyle};
  `,
  clippedButtonLarge: css`
    ${largeStyle};
    ${clippedButtonStyle};
  `,
  clippedButtonAttachmentLarge: css`
    ${largeStyle};
    ${clippedButtonAttachmentStyle};
  `,
  clippedButtonOutlineLarge: css`
    ${largeStyle};
    ${clippedButtonOutlineStyle};
    padding-right: ${spacing.normal};
  `,
  clippedButtonAttachmentOutlineLarge: css`
    ${largeStyle};
    ${clippedButtonAttachmentOutlineStyle};
    padding-left: ${spacing.normal};
  `,
};

export const buttonStyle = css`
  display: inline-block;
  color: ${colors.background.default};
  background-color: ${colors.brand.primary};
  border: 2px solid ${colors.brand.primary};
  border-radius: ${misc.borderRadius};
  padding: 4px ${spacing.small};
  outline-width: 0;
  cursor: pointer;
  text-decoration: none;
  ${fonts.sizes('16px')};
  font-family: ${fonts.sans};
  font-weight: ${fonts.weight.bold};
  transition: ${misc.transition.default};
  box-shadow: none;
  text-align: center;
  &:hover,
  &:focus {
    color: white;
    background-color: ${colors.brand.dark};
    border: 2px solid ${colors.brand.dark};
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
`;

export const ButtonStyles = (p: ButtonProps) =>
  css`
    ${buttonStyle}
    ${p.appearance ? appearances[p.appearance] : null}
  ${p.lighter ? appearances['lighter'] : null}
  ${p.size ? sizes[p.size] : null};
    ${p.outline ? outlineWithSize(p.size) : null}
    ${p.borderShape ? borderShapes[p.borderShape](p.size) : null}
  ${p.width ? width[p.width] : null}
  ${p.textAlign ? textAlign[p.textAlign] : null}
  ${p.darker ? appearances['darker'] : null}
  ${p.greyLighter ? appearances['greyLighter'] : null}
  ${p.greyLightest ? appearances['greyLightest'] : null}
  ${p.light ? appearances['light'] : null}
  `;

export const StyledButton = styled('button')<ButtonProps>`
  ${(p) => ButtonStyles(p)}
`;

// Reverse the array to find the last element first
const modifierToApperance = (modifiers: Record<ButtonAppearance, boolean | undefined>) =>
  (Object.keys(modifiers) as ButtonAppearance[]).reverse().find((key) => modifiers[key]);

export const Button = ({
  outline,
  stripped,
  link,
  large,
  lighter,
  submit,
  loading,
  appearance,
  children,
  disabled,
  inverted,
  invertedOutline,
  safelink,
  ghostPill,
  ghostPillInverted,
  ghostPillOutline,
  ghostPillOutlineInverted,
  clippedButton,
  clippedButtonOutline,
  clippedButtonAttachment,
  clippedButtonAttachmentOutline,
  ...rest
}: ButtonProps) => {
  const clippedButtonLarge = clippedButton && large;
  const clippedButtonOutlineLarge = clippedButtonOutline && large;
  const clippedButtonAttachmentLarge = clippedButtonAttachment && large;
  const clippedButtonAttachmentOutlineLarge = clippedButtonAttachmentOutline && large;
  const modifiers: Record<ButtonAppearance, boolean | undefined> = {
    link,
    large,
    outline,
    lighter,
    stripped,
    inverted,
    invertedOutline,
    ghostPill,
    ghostPillInverted,
    ghostPillOutline,
    ghostPillOutlineInverted,
    clippedButton,
    clippedButtonOutline,
    clippedButtonAttachment,
    clippedButtonAttachmentOutline,
    clippedButtonLarge,
    clippedButtonOutlineLarge,
    clippedButtonAttachmentLarge,
    clippedButtonAttachmentOutlineLarge,
  };

  const styledAppearance = appearance || modifierToApperance(modifiers);

  /* eslint-disable react/button-has-type */
  const type = submit ? 'submit' : rest.type || 'button';
  // Unless the disabled state is explicitly set, the button is disabled when loading.
  const isDisabled = (disabled !== undefined ? disabled : loading) || false;

  const buttonProps = { ...rest, outline };
  return (
    <StyledButton type={type} appearance={styledAppearance} disabled={isDisabled} {...buttonProps}>
      {children}
    </StyledButton>
  );
};
