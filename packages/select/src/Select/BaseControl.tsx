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

const StyledBaseControl = styled.div<Props>`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 8px;
  padding: ${spacing.small} ${spacing.normal};
  min-height: 40px;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('18px', '24px')};

  ${({ small }) =>
    small &&
    css`
      border-radius: 4px;
      padding: ${spacing.xxsmall} ${spacing.xsmall};
      min-height: unset;
      font-weight: ${fonts.weight.normal};
      ${fonts.sizes('16px', '18px')};
    `}

  &:focus-within {
    outline: 2px solid ${colors.brand.dark};
  }

  color: ${colors.brand.dark};
  border-style: solid;
  border-width: ${({ outline }) => (outline ? '1px' : '0px')};
  border-color: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.dark : colors.brand.light)};
  background: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.lighter : colors.white)};

  & ${StyledDropdown} {
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

interface Props {
  menuIsOpen: boolean;
  small?: boolean;
  colorTheme: Color;
  outline?: boolean;
}

const BaseControl = <T extends boolean>({
  innerRef,
  innerProps,
  children,
  ...rest
}: Props & ControlProps<Option, T>) => (
  <StyledBaseControl ref={innerRef} {...innerProps} {...rest}>
    {children}
  </StyledBaseControl>
);

export default BaseControl;
