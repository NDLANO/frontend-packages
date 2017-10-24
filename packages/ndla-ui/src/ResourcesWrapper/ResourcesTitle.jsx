/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { classes } from './ResourcesWrapper';

const ResourceTitle = ({ children }) => (
  <h1 {...classes('title')}>{children}</h1>
);

ResourceTitle.propTypes = {
  children: PropTypes.node,
};

export default ResourceTitle;
