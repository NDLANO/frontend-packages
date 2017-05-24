/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const filterClasses = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

const FilterList = ({ filterContent }) => (
  <ul {...filterClasses('list')}>
    <li {...filterClasses('label')}>FILTER:</li>
    { filterContent ? filterContent.map(filterItem => <li {...filterClasses('item', filterItem.active ? 'active' : null)}><span {...filterClasses('item-checkbox')} /> { filterItem.title ? filterItem.title : null }</li>) : null}
  </ul>
);

FilterList.propTypes = {
  children: PropTypes.node,
  filterContent: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  })),
};

export default FilterList;
