/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ToggleItem, filterClasses } from '../Filter';

const ResourceToggleFilter = ({ checked, onClick, label }) => (
  <div {...filterClasses('list', 'filter-single-checkbox')}>
    <ToggleItem
      id="resource-toggle-filter"
      component="div"
      checked={checked}
      onChange={onClick}
      label={label}
    />
  </div>
);

ResourceToggleFilter.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

ResourceToggleFilter.defaultProps = {
  checked: false,
};

export default ResourceToggleFilter;
