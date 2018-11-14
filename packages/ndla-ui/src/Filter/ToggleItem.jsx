/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { createElement } from 'react';
import PropTypes from 'prop-types';
import { classes } from './filterClasses';

const ToggleItem = ({
  id,
  checked,
  modifiers,
  label,
  component: Component,
  icon,
  onChange,
  tabIndex,
  value,
  disabled,
  hits,
}) => (
  <Component {...classes('item', modifiers)}>
    <input
      {...classes('input')}
      type="checkbox"
      id={id}
      value={value}
      disabled={disabled}
      tabIndex={tabIndex}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={id}>
      <span {...classes('item-checkbox')} />
      <span {...classes('text')}>
        {label}
        {hits !== undefined && ` (${hits})`}
      </span>
      {icon
        ? createElement(icon, {
            className: `c-icon--22 ${classes('icon').className}`,
          })
        : null}
    </label>
  </Component>
);

ToggleItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  tabIndex: PropTypes.number,
  modifiers: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
  hits: PropTypes.number,
  icon: PropTypes.func,
};

ToggleItem.defaultProps = {
  component: 'li',
  checked: false,
};

export default ToggleItem;
