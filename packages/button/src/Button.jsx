/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors, spacing, misc, fonts, animations } from '@ndla/core';
import rgba from 'polished/lib/color/rgba';

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
    transform: none;
    border: none;
  }
  &:focus {
    outline-width: medium;
  }
`;

export const pillStyle = css`
  padding: ${spacing.small} ${spacing.spacingUnit * 0.75}px;
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
    box-shadow: 0px 1px 0px ${colors.brand.primary};
  }
  &:hover {
    transform: none;
    > span {
      box-shadow: none;
    }
  }
`;
export const outlineStyle = css`
  color: ${colors.brand.primary};
  background-color: transparent;
  border: 2px solid ${colors.brand.primary};
  font-weight: ${fonts.weight.bold};
  box-shadow: none;
  &:hover,
  &:focus {
    color: white;
    background-color: ${colors.brand.primary};
    border: 2px solid transparent;
    transform: translateY(0) translateX(0);
  }
  &:disabled {
    color: ${colors.brand.grey};
    border: 2px solid transparent;
    background-color: ${colors.background.dark};
    cursor: not-allowed;
    transform: translateY(0) translateX(0);
  }
`;

export const clippedButtonStyle = css`
  border-radius: ${misc.borderRadius} 0 0 ${misc.borderRadius};
  &:hover,
  &:focus,
  &:disabled {
    transform: translateY(0) translateX(0);
  }
`;
export const clippedButtonAttachmentStyle = css`
  border-radius: 0 ${misc.borderRadius} ${misc.borderRadius} 0;
  &:hover,
  &:focus,
  &:disabled {
    transform: translateY(0) translateX(0);
  }
`;
export const clippedButtonOutlineStyle = css`
  ${outlineStyle};
  border-radius: ${misc.borderRadius} 0 0 ${misc.borderRadius};
  border-right: 0;
  padding-right: calc(${spacing.small} + 2px);
  &:hover,
  &:focus,
  &:disabled {
    transform: translateY(0) translateX(0);
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
    transform: translateY(0) translateX(0);
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
  normal: css`
    padding: 5px ${spacing.small};
    ${fonts.sizes('16px')};
  `,
  medium: css`
    padding: 10px 16px;
    ${fonts.sizes('16px', 1.5)};
  `,
  large: css`
    padding: ${spacing.small} ${spacing.normal};
    ${fonts.sizes('18px', 1.25)};
  `,
};

export const borderShapes = {
  normal: () => css`
    border-radius: ${misc.borderRadius};
  `,
  rounded: size => css`
    border-radius: 32px;
    padding-left: ${spacing.normal};
    padding-right: ${spacing.normal};
    ${size === 'medium'
      ? `padding-left:${spacing.medium};padding-right:${spacing.medium};`
      : null}
    ${size === 'large'
      ? `padding-left:${spacing.large};padding-right:${spacing.large};`
      : null}
  `,
  sharpened: size => css`
    border-radius: 2px;
    ${size === 'medium' ? `padding-left:20px;padding-right:20px;` : null}
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
      transform: translateY(0) translateX(0);
    }
    &:disabled {
      border: 2px solid transparent;
      cursor: not-allowed;
      transform: translateY(0) translateX(0);
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
      transform: translateY(0) translateX(0);
      background: ${colors.brand.primary};
      border-color: ${colors.brand.primary};
    }
    &:disabled {
      color: ${colors.brand.grey};
      border: 2px solid transparent;
      background-color: ${colors.background.dark};
      cursor: not-allowed;
      transform: translateY(0) translateX(0);
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
    border: 2px solid ${rgba(colors.brand.primary, 0)};
    transform: translateY(1px) translateX(1px);
  }
  &:active {
    transform: translateY(2px) translateX(2px);
  }

  &[disabled] {
    color: ${colors.brand.grey};
    background-color: ${colors.background.dark};
    border-color: transparent;
    cursor: not-allowed;
    transform: translateY(0) translateX(0);
  }
  &:focus {
    box-shadow: 0 0 2px ${colors.brand.primary};
  }
`;

export const ButtonStyles = p =>
  css`
  ${buttonStyle}
  ${p.appearance ? appearances[p.appearance] : null}
  ${p.lighter ? appearances['lighter'] : null}
  ${p.size ? sizes[p.size] : null};
  ${p.outline ? outlineStyle : null}
  ${p.borderShape ? borderShapes[p.borderShape](p.size) : null}
  ${p.width ? width[p.width] : null}
  ${p.textAlign ? textAlign[p.textAlign] : null}
`;

export const StyledButton = styled('button')`
  ${p => ButtonStyles(p)}
`;

// Reverse the array to find the last element first
const modifierToApperance = modifiers =>
  Object.keys(modifiers)
    .reverse()
    .find(key => modifiers[key]);

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
}) => {
  const clippedButtonLarge = clippedButton && large;
  const clippedButtonOutlineLarge = clippedButtonOutline && large;
  const clippedButtonAttachmentLarge = clippedButtonAttachment && large;
  const clippedButtonAttachmentOutlineLarge =
    clippedButtonAttachmentOutline && large;
  const modifiers = {
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
    <StyledButton
      type={type}
      appearance={styledAppearance}
      disabled={isDisabled}
      {...buttonProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  large: PropTypes.bool,
  stripped: PropTypes.bool,
  lighter: PropTypes.bool,
  ghostPill: PropTypes.bool,
  ghostPillInverted: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  safelink: PropTypes.string,
  appearance: PropTypes.oneOf([
    'outline',
    'link',
    'stripped',
    'lighter',
    'inverted',
    'invertedOutline',
    'ghostPill',
    'ghostPillInverted',
    'ghostPillOutline',
    'large',
  ]),
  size: PropTypes.oneOf(['normal', 'medium', 'large']),
  borderShape: PropTypes.oneOf(['normal', 'rounded', 'sharpened']),
  width: PropTypes.oneOf(['auto', 'full']),
  textAlign: PropTypes.oneOf(['center', 'left', 'right']),
  /**
   * Applies the submit attribute to the button for use in forms. This overrides the type
   */
  submit: PropTypes.bool,
  /**
   * Defines HTML button type Attribute
   * @type {("button"|"reset"|"submit")}
   * @defaultValue 'button'
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};
