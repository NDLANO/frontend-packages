/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useMemo } from 'react';
import ReactSelect, { OnChangeValue, PropsValue } from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import { Option, Color } from './types';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import ValueContainer from './ValueContainer';
import BaseSingleValue from './BaseSingleValue';
import BasePlaceholder from './BasePlaceholder';
import BaseContainer from './BaseContainer';

interface Props<T extends boolean> {
  options: Option[];
  label?: string;
  onChange?: (value: OnChangeValue<Option, T>) => void;
  value?: PropsValue<Option>;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top' | 'auto';
  isMultiSelect?: T;
  hideArrow?: boolean;
  isLoading?: boolean;
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
  hideArrow,
  isLoading,
  small,
  outline,
  colorTheme = 'blue',
  prefix,
  postfix,
}: Props<T>) => {
  const portalTarget = useMemo(() => (typeof document !== 'undefined' ? document?.querySelector('body') : null), []);

  return (
    <ReactSelect<Option, T>
      small={small}
      outline={outline}
      colorTheme={colorTheme}
      postfix={postfix}
      prefix={prefix}
      aria-label={label}
      options={options}
      onChange={onChange}
      value={value}
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isMulti={isMultiSelect}
      closeMenuOnSelect={false}
      isClearable={false}
      hideSelectedOptions={false}
      isLoading={isLoading}
      unstyled
      menuPortalTarget={portalTarget}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
      components={{
        SelectContainer: BaseContainer,
        IndicatorSeparator: () => null,
        Option: BaseOption,
        Control: BaseControl,
        SingleValue: BaseSingleValue,
        DropdownIndicator: hideArrow ? BaseDropdownIndicator : null,
        Menu: BaseMenu,
        MultiValue: BaseMultiValue,
        Placeholder: BasePlaceholder,
        ValueContainer: ValueContainer,
      }}
    />
  );
};

export default Select;
