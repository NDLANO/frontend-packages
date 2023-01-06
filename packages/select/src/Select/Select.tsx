/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useCallback, useMemo } from 'react';
import ReactSelect, { PropsValue } from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import { Option, Color, MultiValue, SingleValue } from './types';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import ValueContainer from './ValueContainer';
import BaseSingleValue from './BaseSingleValue';
import BasePlaceholder from './BasePlaceholder';
import BaseContainer from './BaseContainer';
import BaseGroupHeading from './BaseGroupHeading';

interface Props<T extends boolean> {
  options: Option[];
  label?: string;
  onChange?: (value: T extends true ? MultiValue : SingleValue) => void;
  value?: PropsValue<Option>;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top' | 'auto';
  isMulti?: T;
  hideArrow?: boolean;
  isLoading?: boolean;
  small?: boolean;
  bold?: boolean;
  prefix?: string;
  postfix?: string;
  outline?: boolean;
  colorTheme?: Color;
  isSearchable?: boolean;
  noOptionsMessage?: (obj: { inputValue: string }) => ReactNode;
  groupTitle?: string;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
  matchFrom?: 'any' | 'start';
  required?: boolean;
}

const Select = <T extends boolean>({
  options,
  hideArrow,
  label,
  menuPlacement = 'bottom',
  colorTheme = 'blue',
  isSearchable = false,
  groupTitle,
  matchFrom = 'start',
  ...rest
}: Props<T>) => {
  const portalTarget = useMemo(() => (typeof document !== 'undefined' ? document?.querySelector('body') : null), []);
  const customOption = groupTitle ? [{ label: groupTitle, options: options }] : options;

  const customSearchFilter = useCallback((option: Option, input: string) => {
    if (input) {
      return option.label.split(' ').some((c) => c.toLowerCase().startsWith(input.toLowerCase()));
    }
    return true;
  }, []);

  return (
    <ReactSelect<Option, T>
      {...rest}
      options={customOption}
      colorTheme={colorTheme}
      aria-label={label}
      isSearchable={isSearchable}
      menuPlacement={menuPlacement}
      hideSelectedOptions={false}
      unstyled
      menuPortalTarget={portalTarget}
      {...(matchFrom === 'start' ? { filterOption: customSearchFilter } : {})}
      styles={{ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }}
      components={{
        SelectContainer: BaseContainer,
        IndicatorSeparator: null,
        Option: BaseOption,
        Control: BaseControl,
        SingleValue: BaseSingleValue,
        DropdownIndicator: hideArrow ? null : BaseDropdownIndicator,
        Menu: BaseMenu,
        MultiValue: BaseMultiValue,
        Placeholder: BasePlaceholder,
        ValueContainer: ValueContainer,
        GroupHeading: BaseGroupHeading,
      }}
    />
  );
};

export default Select;
