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

interface StylingProperties {
  containerStyles?: CSSObjectWithLabel;
  controlStyles?: CSSObjectWithLabel;
  optionStyles?: CSSObjectWithLabel;
  menuStyles?: CSSObjectWithLabel;
  dropdownIndicatorStyles?: CSSObjectWithLabel;
  placeholderStyles?: CSSObjectWithLabel;
  valueContainerStyles?: CSSObjectWithLabel;
}

const customStyles = ({
  containerStyles,
  controlStyles,
  optionStyles,
  menuStyles,
  dropdownIndicatorStyles,
  placeholderStyles,
  valueContainerStyles,
}: StylingProperties): StylesConfig => {
  return {
    container: (baseStyles) => ({ ...baseStyles, width: 'max-content', ...containerStyles }),
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
        ...controlStyles,
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
      ...optionStyles,
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: colors.white,
      borderRadius: 4,
      marginTop: 2,
      width: '100%',
      ...menuStyles,
    }),
    dropdownIndicator: (baseStyles) => ({ ...baseStyles, color: colors.black, padding: 0, ...dropdownIndicatorStyles }),
    placeholder: (baseStyles) => ({ ...baseStyles, fontSize: 14, ...placeholderStyles }),
    valueContainer: (baseStyles) => ({ ...baseStyles, padding: 0, ...valueContainerStyles }),
  };
};

const StyledIcon = styled.div<{ isSelected: boolean }>`
  visibility: ${(isSelected) => (isSelected ? 'visible' : 'hidden')};
`;

type Option = {
  value: string;
  label: string;
};

interface Props extends StylingProperties {
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
  containerStyles,
  controlStyles,
  optionStyles,
  menuStyles,
  dropdownIndicatorStyles,
  placeholderStyles,
  valueContainerStyles,
  isMulti,
}: Props) => {
  return (
    <Select
      aria-label={label}
      options={selectElements}
      styles={customStyles({
        containerStyles,
        controlStyles,
        optionStyles,
        menuStyles,
        dropdownIndicatorStyles,
        placeholderStyles,
        valueContainerStyles,
      })}
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
