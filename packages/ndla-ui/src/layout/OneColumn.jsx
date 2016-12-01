/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const OneColumn = ({ children, className, cssModifier }) => {
  const modifierClass = cssModifier ? `o-wrapper--${cssModifier}` : '';
  const classes = classNames('o-wrapper', modifierClass, ['u-1/1', className]);
  return <div className={classes}>{children}</div>;
};

OneColumn.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
  className: PropTypes.string,
};
