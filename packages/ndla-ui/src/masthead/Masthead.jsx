/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';

export const MastheadItem = ({ children, className, left, right }) => {
  const classes = classNames(
    className,
    { masthead_left: left },
    { masthead_right: right },
  );
  return (
    <div className={classes}>
      { children }
    </div>
  );
};

MastheadItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.bool,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

MastheadItem.defaultProps = {
  right: false,
  left: false,
};

export const Masthead = ({ children }) =>
  <div className="masthead">
    {children}
  </div>;

Masthead.propTypes = {
  children: PropTypes.node,
};
