/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import Select, { components, SingleValue, ActionMeta, StylesConfig, CSSObjectWithLabel } from 'react-select';
import { Done } from '@ndla/icons/editor';

const BoldFont = styled.span`
  font-weight: ${fonts.weight.bold};
`;

const customStyles: StylesConfig = {
  container: (baseStyles) => ({ ...baseStyles, width: 'max-content' }),
  control: (baseStyles) => {
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
  },
  option: () => ({
    height: 25,
    fontSize: 14,
    padding: spacing.xsmall,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&: hover': {
      backgroundColor: colors.brand.lighter,
    },
  }),
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

const StyledIcon = styled.div<{ isSelected: boolean }>`
  visibility: ${(isSelected) => (isSelected ? 'visible' : 'hidden')};
`;

type Option = {
  value: string;
  label: string;
};

interface Props {
  selectElements: Option[];
  label?: string;
  defaultValue?: Option;
  value?: SingleValue<Option>;
  onValueChange?: (value: unknown, actionMeta: ActionMeta<unknown>) => void;
  placeholder?: string;
  menuPlacement?: 'bottom' | 'top';
  prefix?: string;
  icon?: ReactNode;
  isMulti?: boolean;
}

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
  isMulti,
}: Props) => {
  return (
    <Select
      aria-label={label}
      options={selectElements}
      styles={customStyles}
      value={value}
      onChange={onValueChange}
      defaultValue={defaultValue}
      menuPortalTarget={document.querySelector('body')}
      isSearchable={false}
      placeholder={placeholder}
      menuPlacement={menuPlacement}
      isMulti={isMulti}
      controlShouldRenderValue={!isMulti}
      isClearable={false}
      hideSelectedOptions={false}
      components={{
        IndicatorSeparator: () => null,
        SingleValue: ({ children, ...props }) => {
          return (
            <components.SingleValue {...props}>
              {prefix ? <BoldFont>{`${prefix}: `}</BoldFont> : null}
              {children}
            </components.SingleValue>
          );
        },
        Option: ({ children, ...props }) => {
          return (
            <components.Option {...props}>
              {icon ? (
                <StyledIcon isSelected={props.isSelected}>{icon}</StyledIcon>
              ) : isMulti ? (
                <StyledIcon isSelected={props.isSelected}>
                  <Done />
                </StyledIcon>
              ) : null}
              {children}
            </components.Option>
          );
        },
      }}
    />
  );
};

export default SelectComponent;
