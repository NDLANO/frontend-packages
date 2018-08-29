/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const classes = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

const SearchToggleFilter = ({ checked, onClick, label }) => (
  <div {...classes('list', '')}>
    <div {...classes('item')}>
      <input
        {...classes('input')}
        type="checkbox"
        name="resource-filter"
        id="resource-filter"
        checked={checked}
        onChange={onClick}
      />
      <label htmlFor="resource-filter">
        <span {...classes('item-checkbox')} />
        <span {...classes('text')}>{label}</span>
      </label>
    </div>
  </div>
);

SearchToggleFilter.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

SearchToggleFilter.defaultProps = {
  checked: false,
};

export default SearchToggleFilter;
