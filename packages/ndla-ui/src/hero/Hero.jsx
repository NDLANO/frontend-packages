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
  name: 'hero',
  prefix: 'c-',
});

export const Hero = ({ children, url, alt, small, red }) => {
  // const classModifier = small ? 'small' : 'alt';
  const classModifier = red ? 'red' : 'alt';
  // const classResult = classModifier === 'small' ? classModifier : classModifier2;
  return (<div {...classes(!url || alt || small || red ? { modifiers: classModifier } : null)}>
    { children || null }
  </div>);
};

Hero.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string,
  alt: PropTypes.bool,
  small: PropTypes.bool,
  red: PropTypes.bool,
};
