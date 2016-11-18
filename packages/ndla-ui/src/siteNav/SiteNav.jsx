/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import SafeLink from '../SafeLink';

const classes = new BEMHelper({
  name: 'site-navigation',
  prefix: 'c-',
});

export const SiteNavItem = ({ to, children, cssModifier }) =>
  <li {...classes('item', cssModifier)}>
    <SafeLink to={to} {...classes('link')}>
      {children}
    </SafeLink>
  </li>;

SiteNavItem.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
  to: PropTypes.string.isRequired,
};

export const SiteNav = ({ children, cssModifier }) => {
  return (
    <div {...classes('container', cssModifier)}>
      <ul {...classes('list')}>
        {children}
      </ul>
    </div>
  );
};

SiteNav.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
};
