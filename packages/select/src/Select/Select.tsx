/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useMemo } from 'react';
import ReactSelect, { PropsValue, createFilter, OptionsOrGroups, StylesConfig } from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import { Option, Color, MultiValue, SingleValue, GroupBase } from './types';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import ValueContainer from './ValueContainer';
import BaseSingleValue from './BaseSingleValue';
import BasePlaceholder from './BasePlaceholder';
import BaseContainer from './BaseContainer';
import BaseGroupHeading from './BaseGroupHeading';

interface Props<T extends boolean> {
  /** Options to populate the select menu. Grouped view if options are of type GroupBase. */
  options: OptionsOrGroups<Option, GroupBase<Option>>;
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
  /** Only has effect when isMulti is false. */
  prefix?: string;
  postfix?: string;
  outline?: boolean;
  colorTheme?: Color;
  isSearchable?: boolean;
  noOptionsMessage?: (obj: { inputValue: string }) => ReactNode;
  isClearable?: boolean;
  closeMenuOnSelect?: boolean;
  /** Indicate if search hits should be matched from start of word or at any position. Only has effect when isSearchable is true. */
  matchFrom?: 'any' | 'start';
  required?: boolean;
  isDisabled?: boolean;
  id?: string;
  defaultValue?: PropsValue<Option>;
  inModal?: boolean;
}

const Select = <T extends boolean>({
  options,
  hideArrow,
  label,
  menuPlacement = 'bottom',
  colorTheme = 'blue',
  isSearchable = false,
  matchFrom = 'start',
  inModal,
  isMulti,
  ...rest
}: Props<T>) => {
  const portalTarget = useMemo(() => (typeof document !== 'undefined' ? document.body : null), []);

  const components = useMemo(
    () => ({
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
    }),
    [hideArrow],
  );

  const styles: StylesConfig<Option, T> = useMemo(() => ({ menuPortal: (base) => ({ ...base, zIndex: 99999 }) }), []);
  const filterOption = useMemo(
    () => (matchFrom === 'start' ? createFilter({ matchFrom: 'start' }) : undefined),
    [matchFrom],
  );

  return (
    <ReactSelect<Option, T>
      {...rest}
      isMulti={isMulti}
      options={options}
      colorTheme={colorTheme}
      aria-label={label}
      isSearchable={isSearchable}
      menuPlacement={menuPlacement}
      hideSelectedOptions={false}
      unstyled
      // wait for https://github.com/radix-ui/primitives/issues/1159 to be closed to remove this.
      menuPortalTarget={inModal ? null : portalTarget}
      filterOption={filterOption}
      styles={styles}
      components={components}
    />
  );
};

export default Select;
