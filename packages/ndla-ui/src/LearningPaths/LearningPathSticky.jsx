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
  name: 'learningpath',
  prefix: 'c-',
});

export const LearningPathSticky = ({ children }) => (
  <div {...classes('wrapper')}>{children}</div>
);

LearningPathSticky.propTypes = {
  children: PropTypes.node,
};

export const LearningPathStickySibling = ({ children }) => (
  <div {...classes('wrapper')}>{children}</div>
);