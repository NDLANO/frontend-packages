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

export const Hero = ({ children, red, green }) => {
  let modifiers = red ? 'red' : null;
  modifiers = green ? 'green' : modifiers;
  // { red ? modifiers = 'red' : null; }

  return (
    <div {...classes('', modifiers)}>
      {children || null}
    </div>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  red: PropTypes.bool,
  green: PropTypes.bool,
};
