/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ControlProps } from 'react-select';
import { Option } from './types';
import { StyledDropdown } from './BaseDropdownIndicator';

const StyledBaseControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 8px;
  padding: ${spacing.small} ${spacing.normal};
  min-height: 40px;
  font-weight: ${fonts.weight.semibold};
  outline: none;
  color: ${colors.brand.dark};
  border-width: 0px;
  border-style: solid;
  border-color: ${colors.brand.light};
  background: ${colors.white};
  ${fonts.sizes('18px', '24px')};

  &:focus-within {
    outline: 2px solid ${colors.brand.dark};
  }

  &[data-bold='true'] {
    font-weight: ${fonts.weight.bold};
  }

  &[data-required='true'][data-has-value='false'] {
    outline: 2px solid ${colors.support.redLight};
  }

  &[data-small='true'] {
    border-radius: 4px;
    padding: ${spacing.xxsmall} ${spacing.xsmall};
    min-height: unset;
    ${fonts.sizes('16px', '18px')};
    font-weight: ${fonts.weight.normal};
    &[data-bold='true'] {
      font-weight: ${fonts.weight.semibold};
    }
  }

  &[data-color-theme='blue'] {
    border-color: ${colors.brand.dark};
    background: ${colors.brand.lighter};
  }

  &[data-outline='true'] {
    border-width: 1px;
  }

  &[data-disabled='true'] {
    cursor: auto;
    color: ${colors.brand.greyLight};
    background: ${colors.brand.greyMedium};
  }

  &[data-menu-open='true'] {
    & ${StyledDropdown} svg {
      transform: rotate(180deg);
    }
  }
`;

const BaseControl = <T extends boolean>({
  selectProps: { small, outline, colorTheme, bold, required },
  menuIsOpen,
  hasValue,
  innerRef,
  innerProps,
  children,
  ...rest
}: ControlProps<Option, T>) => (
  <StyledBaseControl
    data-small={small}
    data-bold={bold}
    data-color-theme={colorTheme}
    data-outline={outline}
    data-required={required}
    data-disabled={rest.isDisabled}
    data-menu-open={menuIsOpen}
    data-has-value={hasValue}
    ref={innerRef}
    {...innerProps}
    {...rest}
  >
    {children}
  </StyledBaseControl>
);

export default BaseControl;
