/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { ControlProps } from 'react-select';
import { Color, Option } from './types';
import { StyledDropdown } from './BaseDropdownIndicator';

const StyledBaseControl = styled.div<StyledProps>`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  justify-content: space-between;
  border-radius: 8px;
  padding: ${spacing.small} ${spacing.normal};
  min-height: 40px;
  font-weight: ${({ bold }) => (bold ? fonts.weight.bold : fonts.weight.semibold)};
  outline: ${({ required, hasValue }) => (required && !hasValue ? `2px solid ${colors.support.redLight}` : 'none')};
  ${fonts.sizes('18px', '24px')};

  ${({ small, bold }) =>
    small &&
    css`
      border-radius: 4px;
      padding: ${spacing.xxsmall} ${spacing.xsmall};
      min-height: unset;
      font-weight: ${bold ? fonts.weight.semibold : fonts.weight.normal};
      ${fonts.sizes('16px', '18px')};
    `}

  &:focus-within {
    outline: 2px solid ${colors.brand.dark};
  }

  color: ${({ disabled }) => (disabled ? colors.brand.greyLight : colors.brand.dark)};
  border-style: solid;
  border-width: ${({ outline }) => (outline ? '1px' : '0px')};
  border-color: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.dark : colors.brand.light)};
  background: ${({ colorTheme, disabled }) =>
    disabled ? colors.brand.greyMedium : colorTheme === 'blue' ? colors.brand.lighter : colors.white};

  & ${StyledDropdown} svg {
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

interface StyledProps {
  menuIsOpen: boolean;
  small?: boolean;
  colorTheme: Color;
  outline?: boolean;
  bold?: boolean;
  required?: boolean;
  hasValue?: boolean;
  disabled?: boolean;
}

const BaseControl = <T extends boolean>({
  selectProps: { small, outline, colorTheme, bold, required },
  innerRef,
  innerProps,
  children,
  ...rest
}: ControlProps<Option, T>) => (
  <StyledBaseControl
    small={small}
    bold={bold}
    colorTheme={colorTheme}
    outline={outline}
    required={required}
    disabled={rest.isDisabled}
    ref={innerRef}
    {...innerProps}
    {...rest}
  >
    {children}
  </StyledBaseControl>
);

export default BaseControl;
