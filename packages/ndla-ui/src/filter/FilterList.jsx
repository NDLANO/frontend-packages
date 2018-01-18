/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

const filterClasses = new BEMHelper({
  name: 'filter',
  prefix: 'c-',
});

const FilterList = ({ modifiers, label, options, values, onChange }) => (
  <div {...filterClasses('list', modifiers)}>
    <span {...filterClasses('label')}>{label}</span>
    {options.map(option => (
      <div {...filterClasses('item')} key={option.value}>
        <input
          {...filterClasses('input')}
          type="checkbox"
          id={option.value}
          value={option.value}
          checked={values.some(value => value === option.value)}
          onChange={event => {
            let newValues = null;
            if (event.currentTarget.checked) {
              newValues = [...values, option.value];
            } else {
              newValues = values.filter(value => value !== option.value);
            }
            onChange(newValues);
          }}
        />
        <label htmlFor={option.value}>
          <span {...filterClasses('item-checkbox')} />
          {option.title}
          {option.icon
            ? createElement(option.icon, {
                className: 'c-icon--20 u-margin-left-tiny',
              })
            : null}
        </label>
      </div>
    ))}
  </div>
);

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

FilterList.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  modifiers: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: valueShape.isRequired,
      icon: PropTypes.node,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
};

FilterList.defaultProps = {
  label: 'FILTER:',
  modifiers: '',
  values: [],
};

export default FilterList;
