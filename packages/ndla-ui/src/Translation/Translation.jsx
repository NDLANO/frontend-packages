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
  name: 'translation',
  prefix: 'c-',
});

const Translation = ({ children, index }) => (
  <div {...classes('')}>
    { index &&
      <div {...classes('index')}>{index}</div>
    }
    {
      children &&
      <div {...classes('wrapper')}>{children}</div>
    }
  </div>
);

Translation.propTypes = {
  index: PropTypes.string,
  children: PropTypes.node,
};

export default Translation;
