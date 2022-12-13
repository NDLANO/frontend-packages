/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React, { ReactNode, FunctionComponent, ComponentType } from 'react';
import styled, { StyledComponent } from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import Select, {
  components,
  SingleValue,
  ActionMeta,
  StylesConfig,
  SingleValueProps,
  OptionProps,
  ControlProps,
  GroupBase,
} from 'react-select';
import BaseControl from './BaseControl';
import BaseOption from './BaseOption';
import { Option } from './types';

const BoldFont = styled.span`
  font-weight: ${fonts.weight.bold};
`;

const customStyles: StylesConfig = {
  container: (baseStyles) => ({ ...baseStyles, width: 'max-content' }),
  /* control: (baseStyles) => {
    return {
      ...baseStyles,
      border: 'none',
      backgroundColor: colors.brand.lighter,
      padding: `0px ${spacing.xsmall}`,
      fontSize: 14,
      height: 25,
      minHeight: 20,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
    };
  },*/
  /* option: (baseStyles) => ({
    ...baseStyles,
    height: 25,
    fontSize: 14,
    padding: spacing.xsmall,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&: hover': {
      backgroundColor: colors.brand.lighter,
    },
  }),*/
  menu: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: colors.white,
    borderRadius: 4,
    marginTop: 2,
    width: '100%',
  }),
  dropdownIndicator: (baseStyles) => ({ ...baseStyles, color: colors.black, padding: 0 }),
  placeholder: (baseStyles) => ({ ...baseStyles, fontSize: 14 }),
  valueContainer: (baseStyles) => ({ ...baseStyles, padding: 0 }),
};

interface Props {
  selectElements: Option[];
  label?: string;
  defaultValue?: Option;
  value?: SingleValue<unknown>;
  onValueChange?: (value: unknown, actionMeta: ActionMeta<unknown>) => void;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top';
  prefix?: string;
  icon?: ReactNode;
  isMultiSelect?: boolean;
  OptionComponent?: FunctionComponent;
  ControlComponent?: React.ComponentType<ControlProps<Option, boolean, GroupBase<Option>>> | undefined;
}

interface CustomSingleValueProps extends SingleValueProps {
  prefix?: string;
}

const CustomSingleValue = ({ prefix, children, ...props }: CustomSingleValueProps) => {
  return (
    <components.SingleValue {...props}>
      {prefix ? <BoldFont>{`${prefix}: `}</BoldFont> : null}
      {children}
    </components.SingleValue>
  );
};

const SelectComponent = ({
  selectElements,
  label,
  defaultValue,
  value,
  onValueChange,
  placeholder,
  menuPlacement = 'bottom',
  prefix,
  icon,
  isMultiSelect,
  OptionComponent,
  ControlComponent,
}: Props) => {
  return (
    <Select
      styles={customStyles}
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
        SingleValue: CustomSingleValue,
        Option: OptionComponent || BaseOption,
        Control: ControlComponent || BaseControl,
      }}
    />
  );
};

export default SelectComponent;
