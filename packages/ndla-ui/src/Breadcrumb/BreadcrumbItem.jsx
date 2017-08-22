/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import SafeLink from '../common/SafeLink';

const TopicBreadcrumbItem = ({ to, children, classes }) =>
  <li {...classes('item')}>
    <SafeLink to={to}>
      {children}
    </SafeLink>
  </li>;

TopicBreadcrumbItem.propTypes = {
  classes: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

export default TopicBreadcrumbItem;
