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
import { SubjectBadge } from '../ContentTypeBadge';

const ResourceTitle = ({ children }) => (
  <header {...classes('title-wrapper')}>
    <SubjectBadge size="large" background />
    <h1 {...classes('title')}>{children}</h1>
  </header>
);

ResourceTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResourceTitle;
