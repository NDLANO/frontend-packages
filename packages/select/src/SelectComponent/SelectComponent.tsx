/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ComponentType } from 'react';
import Select, {
  SingleValue,
  SingleValueProps,
  OptionProps,
  ControlProps,
  GroupBase,
  MultiValue,
  DropdownIndicatorProps,
} from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseMenuList from './BaseMenuList';
import BaseSingleValue from './BaseSingleValue';
import BaseValueContainer from './BaseValueContainer';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import { Option } from './types';

interface Props<T extends boolean> {
  selectElements: Option[];
  label?: string;
  defaultValue?: Option;
  onChange: (value: SingleValue<Option> | MultiValue<Option>) => void;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top';
  isMultiSelect?: T;
  OptionComponent?: ComponentType<OptionProps<Option, T, GroupBase<Option>>>;
  ControlComponent?: ComponentType<ControlProps<Option, T, GroupBase<Option>>>;
  SingleValueComponent?: ComponentType<SingleValueProps<Option, T, GroupBase<Option>>>;
  DropdownIndicatorComponent?: ComponentType<DropdownIndicatorProps<Option, T, GroupBase<Option>>>;
}

const SelectComponent = <T extends boolean>({
  selectElements,
  label,
  defaultValue,
  onChange,
  placeholder,
  menuPlacement = 'bottom',
  isMultiSelect,
  OptionComponent,
  ControlComponent,
  SingleValueComponent,
  DropdownIndicatorComponent,
}: Props<T>) => {
  const handleChange = (option: SingleValue<Option> | MultiValue<Option>) => {
    onChange(option);
  };

  return (
    <Select<Option, T>
      unstyled
      aria-label={label}
      options={selectElements}
      onChange={handleChange}
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
        DropdownIndicator: DropdownIndicatorComponent || BaseDropdownIndicator,
      }}
    />
  );
};

export default SelectComponent;
