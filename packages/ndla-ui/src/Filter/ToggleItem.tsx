/*
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, ElementType } from 'react';
import { classes } from './filterClasses';

interface Props {
  id: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  disabled?: boolean;
  tabIndex?: number;
  modifiers?: string[] | string;
  value?: string;
  component?: ElementType;
  hits?: number;
}

const ToggleItem = ({
  id,
  checked = false,
  modifiers,
  label,
  component: Component = 'li',
  onChange,
  tabIndex,
  value,
  disabled,
  hits,
}: Props) => (
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
    </label>
  </Component>
);

export default ToggleItem;
