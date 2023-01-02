/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import ReactSelect from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import {
  Option,
  SingleValue,
  MultiValue,
  OptionComponentType,
  ControlComponentType,
  MenuComponentType,
  DropdownComponentType,
} from './types';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import ValueContainer from './ValueContainer';
import BaseSingleValue from './BaseSingleValue';

interface Props<T extends boolean> {
  options: Option[];
  label?: string;
  defaultValue?: T extends true ? MultiValue : SingleValue;
  onChange?: (value: T extends true ? MultiValue : SingleValue) => void;
  value?: Option | null;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top' | 'auto';
  isMultiSelect?: T;
  isLoading?: boolean;
  hideSelectedOptions?: boolean;
  OptionComponent?: OptionComponentType<T>;
  ControlComponent?: ControlComponentType<T>;
  MenuComponent?: MenuComponentType<T>;
  DropdownIndicatorComponent?: DropdownComponentType<T>;
}

const Select = <T extends boolean>({
  options,
  label,
  defaultValue,
  onChange,
  value,
  placeholder,
  menuPlacement = 'bottom',
  isMultiSelect,
  isLoading,
  hideSelectedOptions = false,
  OptionComponent = BaseOption,
  ControlComponent = BaseControl,
  MenuComponent = BaseMenu,
  DropdownIndicatorComponent = BaseDropdownIndicator,
}: Props<T>) => {
  const portalTarget = typeof document !== 'undefined' ? document?.querySelector('body') : null;

  return (
    <ReactSelect<Option, T>
      aria-label={label}
      options={options}
      onChange={onChange}
      value={value}
      defaultValue={defaultValue}
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isMulti={isMultiSelect}
      isClearable={false}
      hideSelectedOptions={hideSelectedOptions}
      isLoading={isLoading}
      menuPortalTarget={portalTarget}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 999999 }) }}
      components={{
        IndicatorSeparator: () => null,
        Option: OptionComponent,
        Control: ControlComponent,
        SingleValue: BaseSingleValue,
        DropdownIndicator: DropdownIndicatorComponent,
        Menu: MenuComponent,
        MultiValue: BaseMultiValue,
        ValueContainer: ValueContainer,
      }}
    />
  );
};

export default Select;
