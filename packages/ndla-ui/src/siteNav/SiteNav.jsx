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
import SafeLink from '../common/SafeLink';
import Button from '../button/Button';

const classes = new BEMHelper({
  name: 'site-navigation',
  prefix: 'c-',
});

export const SiteNavItem = ({ to, cssModifier, ...rest }) => {
  const link = to ? (
    <SafeLink to={to} {...classes('link')} {...rest} />
  ) : (
    <Button {...classes('link')} stripped {...rest} />
  );

  return <li {...classes('item', cssModifier)}>{link}</li>;
};

SiteNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  cssModifier: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

export const SiteNav = ({ children, cssModifier }) => (
  <div {...classes('container', cssModifier)}>
    <ul {...classes('list')}>{children}</ul>
  </div>
);

SiteNav.propTypes = {
  children: PropTypes.node,
  cssModifier: PropTypes.string,
};
