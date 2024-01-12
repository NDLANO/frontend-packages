/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useMemo } from 'react';
import ReactSelect, { createFilter, StylesConfig, Props } from 'react-select';
import BaseContainer from './BaseContainer';
import BaseControl from './BaseControl';
import BaseDropdownIndicator from './BaseDropdownIndicator';
import BaseGroupHeading from './BaseGroupHeading';
import BaseMenu from './BaseMenu';
import BaseMultiValue from './BaseMultiValue';
import BaseOption from './BaseOption';
import BasePlaceholder from './BasePlaceholder';
import BaseSingleValue from './BaseSingleValue';
import { Option, Color, MultiValue, SingleValue, GroupBase } from './types';
import ValueContainer from './ValueContainer';

interface SelectProps<T extends boolean> extends Props<Option, T, GroupBase<Option>> {
  isMulti?: T;
  hideArrow?: boolean;
  small?: boolean;
  bold?: boolean;
  /** Only has effect when isMulti is false. */
  prefix?: string;
  postfix?: string;
  outline?: boolean;
  colorTheme?: Color;
  /** Indicate if search hits should be matched from start of word or at any position. Only has effect when isSearchable is true. */
  matchFrom?: 'any' | 'start';
  inModal?: boolean;
}

const Select = <T extends boolean>({
  options,
  hideArrow,
  menuPlacement = 'bottom',
  colorTheme = 'blue',
  isSearchable = false,
  matchFrom = 'start',
  inModal,
  isMulti,
  ...rest
}: SelectProps<T>) => {
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
