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

const classes = BEMHelper({
  prefix: 'o-',
  name: 'wrapper',
  outputIsString: true,
});

export const OneColumn = ({
  children,
  className,
  cssModifier,
  wide,
  noPadding,
  extraPadding,
}) => {
  const modifiers = [];

  if (cssModifier) {
    modifiers.push(cssModifier);
  }

  if (wide) {
    modifiers.push('wide');
  }

  if (noPadding) {
    modifiers.push('no-padding');
  }

  if (extraPadding) {
    modifiers.push('extra-padding');
  }

  return (
    <div className={`${classes('', modifiers)} ${className}`}>{children}</div>
  );
};

OneColumn.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
  wide: PropTypes.bool,
  noPadding: PropTypes.bool,
  extraPadding: PropTypes.bool,
  className: PropTypes.string,
};

export default OneColumn;
