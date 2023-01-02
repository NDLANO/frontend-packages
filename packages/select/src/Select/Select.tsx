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
import { Option, SingleValue, MultiValue, Color } from './types';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import ValueContainer from './ValueContainer';
import BaseSingleValue from './BaseSingleValue';

interface Props<T extends boolean> {
  options: Option[];
  label?: string;
  onChange?: (value: T extends true ? MultiValue : SingleValue) => void;
  value?: Option | null;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top' | 'auto';
  isMultiSelect?: T;
  isLoading?: boolean;
  // New
  small?: boolean;
  prefix?: string;
  postfix?: string;
  outline?: boolean;
  colorTheme?: Color;
}

const Select = <T extends boolean>({
  options,
  label,
  onChange,
  value,
  placeholder,
  menuPlacement = 'bottom',
  isMultiSelect,
  isLoading,
  small,
  outline,
  colorTheme = 'blue',
  prefix,
  postfix,
}: Props<T>) => {
  const portalTarget = typeof document !== 'undefined' ? document?.querySelector('body') : null;

  const styleProps = { small, outline, colorTheme };

  return (
    <ReactSelect<Option, T>
      aria-label={label}
      options={options}
      onChange={onChange}
      value={value}
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isMulti={isMultiSelect}
      closeMenuOnSelect={!isMultiSelect}
      isClearable={false}
      hideSelectedOptions={false}
      isLoading={isLoading}
      unstyled
      menuPortalTarget={portalTarget}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
      components={{
        IndicatorSeparator: () => null,
        Option: BaseOption,
        Control: (props) => <BaseControl {...props} {...styleProps} />,
        SingleValue: (props) => <BaseSingleValue {...props} postfix={postfix} prefix={prefix} />,
        DropdownIndicator: (props) => <BaseDropdownIndicator {...props} small={small} />,
        Menu: BaseMenu,
        MultiValue: (props) => <BaseMultiValue {...props} postfix={postfix} />,
        ValueContainer: ValueContainer,
      }}
    />
  );
};

export default Select;
