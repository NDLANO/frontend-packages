/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ComponentType } from 'react';
import Select, { SingleValue, ActionMeta, SingleValueProps, OptionProps, ControlProps, GroupBase } from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseMenuList from './BaseMenuList';
import BaseSingleValue from './BaseSingleValue';
import { Option } from './types';
import BaseValueContainer from './BaseValueContainer';

interface Props<T> {
  selectElements: Option[];
  label?: string;
  defaultValue?: Option;
  value?: SingleValue<unknown>;
  onValueChange?: (value: unknown, actionMeta: ActionMeta<unknown>) => void;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top';
  isMultiSelect?: boolean;
  OptionComponent?: ComponentType<OptionProps<unknown, boolean, GroupBase<Option>>>;
  ControlComponent?: ComponentType<ControlProps<unknown, boolean, GroupBase<Option>>>;
  SingleValueComponent?: ComponentType<SingleValueProps<unknown, boolean, GroupBase<Option>>>;
}

const SelectComponent = <T extends boolean>({
  selectElements,
  label,
  defaultValue,
  value,
  onValueChange,
  placeholder,
  menuPlacement = 'bottom',
  isMultiSelect,
  OptionComponent,
  ControlComponent,
  SingleValueComponent,
}: Props<T>) => {
  return (
    <Select
      unstyled
      aria-label={label}
      options={selectElements}
      value={value}
      onChange={onValueChange}
      defaultValue={defaultValue}
      menuPortalTarget={document.querySelector('body')}
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isMulti={isMultiSelect}
      controlShouldRenderValue={!isMultiSelect}
      isClearable={false}
      hideSelectedOptions={false}
      components={{
        IndicatorSeparator: () => null,
        Option: OptionComponent || BaseOption,
        Control: ControlComponent || BaseControl,
        SingleValue: SingleValueComponent || BaseSingleValue,
        MenuList: BaseMenuList,
        ValueContainer: BaseValueContainer,
      }}
    />
  );
};

export default SelectComponent;
