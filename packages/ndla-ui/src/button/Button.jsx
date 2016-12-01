/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'button',
  prefix: 'c-',
});

const Button = ({ outline, square, submit, loading, ...rest }) => {
  const modifiers = {
    outline,
    square,
  };


  const type = submit ? 'submit' : rest.type || 'button';

    // Unless the disabled state is explicitly set, the button is disabled when loading.
  const disabled = (rest.disabled !== undefined ? rest.disabled : loading) || false;

  return (
    <button {...classes('', modifiers)} {...rest} type={type} disabled={disabled}>
      {rest.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,

  outline: PropTypes.bool,
  square: PropTypes.bool,
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
