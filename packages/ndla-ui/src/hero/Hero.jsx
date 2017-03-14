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
  name: 'hero',
  prefix: 'c-',
});

function bgStyle(url) {
  return { backgroundImage: `url("${url}")` };
}

export const Hero = ({ children, url, alt, small, white }) => {
  const fallbackUrl = small ? '' : "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ceddea' fill-opacity='0.15'%3E%3Cpath opacity='.9' d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";
  const classModifier = small ? 'small' : 'alt';
  const classModifier2 = white ? 'white' : 'alt';
  const classResult = classModifier === 'small' ? classModifier : classModifier2;
  const imageUrl = url || fallbackUrl;
  return (<div {...classes(!url || alt || small || white ? { modifiers: classResult } : null)} style={bgStyle(imageUrl)}>
    { children }
  </div>);
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.string,
  alt: PropTypes.bool,
  small: PropTypes.bool,
  white: PropTypes.bool,
};
