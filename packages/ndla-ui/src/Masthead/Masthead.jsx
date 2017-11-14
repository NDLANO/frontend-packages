/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'masthead',
  prefix: 'c-',
});

export const MastheadItem = ({ children, className, left, right }) => {
  const itemClassNames = classNames(
    { [classes('left').className]: left },
    { [classes('right').className]: right },
    className,
  );
  return <div className={itemClassNames}>{children}</div>;
};

MastheadItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  right: PropTypes.bool,
  left: PropTypes.bool,
};

MastheadItem.defaultProps = {
  right: false,
  left: false,
};

export const Masthead = ({ children, fixed }) => (
  <div {...classes(null, { fixed })}>
    <div className="u-1/1">{children}</div>
  </div>
);

Masthead.propTypes = {
  children: PropTypes.node,
  fixed: PropTypes.bool,
};

export default Masthead;
