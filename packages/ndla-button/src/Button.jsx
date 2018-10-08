/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import { colors, spacing, misc, fonts } from 'ndla-core';
import rgba from 'polished/lib/color/rgba';

const strippedStyle = css`
  transition: background-color none;
  padding: 0;
  border-radius: 0;
  color: inherit;
  font-size: inherit;
  background-color: transparent;
  box-shadow: none;
  border: none;
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

const appearances = {
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

    &:hover {
      box-shadow: ${colors.linkHover};
    }

    &:focus {
      box-shadow: ${colors.linkHover};
    }
  `,
};
const StyledButton = styled('button')`
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
  transition: ${misc.transition.default};
  &:hover,
  &:focus {
    color: white;
    background-color: ${rgba(colors.brand.primary, 0.8)};
    border: 2px solid ${rgba(colors.brand.primary, 0)};
    transform: translateY(1px) translateX(1px);
  }
  &:active {
    transform: translateY(2px) translateX(2px);
  }

  &[disabled] {
    color: ${colors.brand.grey};
    background-color: ${colors.background.dark};
    border: 0;
    cursor: not-allowed;
    transform: translateY(0) translateX(0);
  }
  &:focus {
    box-shadow: 0 0 2px ${colors.brand.primary};
  }
  ${p => appearances[p.appearance]};
`;

function modifierToApperance(modifiers) {
  return Object.keys(modifiers).find(key => modifiers[key]);
}

const Button = ({
  outline,
  stripped,
  link,
  lighter,
  submit,
  loading,
  className,
  appearance,
  children,
  disabled,
  ...rest
}) => {
  const modifiers = {
    link,
    outline,
    lighter,
    stripped,
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
  stripped: PropTypes.bool,
  lighter: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  appearance: PropTypes.oneOf(['outline', 'link', 'stripped', 'lighter']),
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

export default Button;
