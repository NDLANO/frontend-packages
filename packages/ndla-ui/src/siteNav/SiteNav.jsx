/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import classNames from 'classnames';
import SafeLink from '../SafeLink';

export const SiteNavItem = ({ to, children, cssModifier }) =>
  <li className={classNames('site-nav_item', `site-nav_item--${cssModifier}`)}>
    <SafeLink to={to} className="site-nav_link">
      {children}
    </SafeLink>
  </li>;

SiteNavItem.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export const SiteNav = ({ children, cssModifier }) => {
  const classes = classNames('site-nav', `site-nav--${cssModifier}`);

  return (
    <div className={classes}>
      <ul className="site-nav_list">
        {children}
      </ul>
    </div>
  );
};

SiteNav.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
};
