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

const SearchToggleFilter = ({
  checked,
  onClick,
  label,
  narrow,
  wide,
  preid,
}) => (
  <div
    {...filterClasses('list', {
      narrow,
      wide,
      'filter-single-checkbox': true,
    })}>
    <ToggleItem
      id={`${preid}search-toggle-filter`}
      component="div"
      checked={checked}
      onChange={onClick}
      label={label}
    />
  </div>
);

SearchToggleFilter.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  preid: PropTypes.string,
  narrow: PropTypes.bool,
  wide: PropTypes.bool,
};

SearchToggleFilter.defaultProps = {
  checked: false,
  preid: '',
};

export default SearchToggleFilter;
