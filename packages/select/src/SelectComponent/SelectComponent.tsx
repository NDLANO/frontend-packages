/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ComponentType } from 'react';
import Select from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import { Option, SingleValue, MultiValue, OptionPropsType, ControlPropsType } from './types';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import ValueContainer from './ValueContainer';

interface Props<T extends boolean> {
  options: Option[];
  label?: string;
  defaultValue?: Option;
  onChange?: (value: SingleValue | MultiValue) => void;
  value?: Option | null;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top' | 'auto';
  isMultiSelect?: T;
  OptionComponent?: OptionPropsType<T>;
  ControlComponent?: ControlPropsType<T>;
}

const SelectComponent = <T extends boolean>({
  options,
  label,
  defaultValue,
  onChange,
  value,
  placeholder,
  menuPlacement = 'bottom',
  isMultiSelect,
  OptionComponent,
  ControlComponent,
}: Props<T>) => {
  return (
    <Select<Option, T>
      aria-label={label}
      options={options}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      menuPortalTarget={document.querySelector('body')}
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isMulti={isMultiSelect}
      isClearable={false}
      hideSelectedOptions={false}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 101 }) }}
      components={{
        IndicatorSeparator: () => null,
        Option: OptionComponent || BaseOption,
        Control: ControlComponent || BaseControl,
        Menu: BaseMenu,
        DropdownIndicator: ControlComponent ? () => null : BaseDropdownIndicator,
        MultiValue: BaseMultiValue,
        ValueContainer: ValueContainer,
      }}
    />
  );
};

export default SelectComponent;
