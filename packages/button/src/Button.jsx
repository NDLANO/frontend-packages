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
    border: none;
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};

    &:hover,
    &:focus,
    &:active {
      border: none;
      background: ${colors.brand.primary};
    }
  `,
  outline: css`
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
      border: 2px solid transparent;
      cursor: not-allowed;
      transform: translateY(0) translateX(0);
    }
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
  smallLink: css`
    ${strippedStyle};
    ${fonts.sizes(16, 1.25)};
    height: ${spacing.large};
    color: ${colors.brand.primary};
    font-weight: ${fonts.weight.semibold};
    box-shadow: none;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  `,
  boldLink: css`
    ${strippedStyle};
    color: ${colors.brand.primary};
    text-decoration: underline;
    font-weight: ${fonts.weight.bold};
    font-size: inherit;
    line-height: inherit;
    &:focus,
    &:hover {
      text-decoration: none;
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
    height: ${spacing.large};
    padding: 0 ${spacing.normal};
    ${fonts.sizes(18, 1.25)};
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

export const StyledButton = styled('button')`
  ${buttonStyle}
  ${p => appearances[p.appearance]};
`;

const modifierToApperance = modifiers =>
  Object.keys(modifiers).find(key => modifiers[key]);

export const Button = ({
  outline,
  stripped,
  link,
  boldLink,
  smallLink,
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
  ...rest
}) => {
  const modifiers = {
    link,
    boldLink,
    smallLink,
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
  };

  const styledAppearance = appearance || modifierToApperance(modifiers);

  /* eslint-disable react/button-has-type */
  const type = submit ? 'submit' : rest.type || 'button';
  // Unless the disabled state is explicitly set, the button is disabled when loading.
  const isDisabled = (disabled !== undefined ? disabled : loading) || false;

  return (
    <StyledButton
      type={type}
      appearance={styledAppearance}
      disabled={isDisabled}
      {...rest}>
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
  boldLink: PropTypes.bool,
  smallLink: PropTypes.bool,
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
    'boldLink',
    'smallLink',
    'stripped',
    'lighter',
    'inverted',
    'invertedOutline',
    'ghostPill',
    'ghostPillInverted',
    'ghostPillOutline',
    'large',
  ]),
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
