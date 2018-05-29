/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'button',
  prefix: 'c-',
});

const Button = ({
  outline,
  square,
  stripped,
  link,
  lighter,
  submit,
  loading,
  className,
  type,
  children,
  disabled,
  ...rest
}) => {
  const modifiers = {
    link,
    outline,
    square,
    lighter,
    stripped,
  };

  // Unless the disabled state is explicitly set, the button is disabled when loading.
  const isDisabled = (disabled !== undefined ? disabled : loading) || false;

  return (
    <button
      {...classes('', modifiers, className)}
      type={type}
      disabled={isDisabled}
      {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  link: PropTypes.bool,
  square: PropTypes.bool,
  stripped: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
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
