/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import ReactStickyHeader from 'react-sticky-header';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const MastheadItem = ({ children, className, left, right }) => {
  const classes = classNames(
    className,
    { masthead__left: left },
    { masthead__right: right },
  );
  return (
    <div className={classes}>
      {children}
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
  <ReactStickyHeader
    header={
      <div className="masthead">
        <div className="u-1/1">
          {children}
        </div>
      </div>
    }
  />;

Masthead.propTypes = {
  children: PropTypes.node,
};

export default Masthead;
