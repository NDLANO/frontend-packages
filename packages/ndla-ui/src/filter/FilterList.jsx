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

const FilterList = ({ filterContent, label }) => (
  <div {...filterClasses('list')}>
    <span {...filterClasses('label')}>{ label }</span>
    { filterContent ? filterContent.map(filterItem =>
      <div {...filterClasses('item')}>
        <input
          type="checkbox"
          name="gruppe"
          id={filterItem.title ? filterItem.title : null}
          value={filterItem.title ? filterItem.title : null}
          defaultChecked={filterItem.active ? 'true' : null}
        />
        <label
          htmlFor={filterItem.title ? filterItem.title : null}
        >
          <span {...filterClasses('item-checkbox')} />
          { filterItem.title ? filterItem.title : null }
        </label>
      </div>) : null}
  </div>
);

FilterList.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  filterContent: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  })),
};

FilterList.defaultProps = {
  label: 'FILTER:',
};

export default FilterList;
