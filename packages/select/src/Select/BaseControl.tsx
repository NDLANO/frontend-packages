import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { ControlProps } from 'react-select';
import { Option, StyledProps } from './types';
import { StyledChevron } from './BaseDropdownIndicator';

interface MenuProps {
  menuIsOpen: boolean;
}

const StyledBaseControl = styled.div<StyledProps & MenuProps>`
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
      ${fonts.sizes('16px', '16px')};
    `}

  &:focus-within {
    outline: 2px solid ${colors.brand.dark};
  }

  color: ${colors.brand.dark};
  border-style: solid;
  border-width: ${({ outline }) => (outline ? '1px' : '0px')};
  border-color: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.dark : colors.brand.lighter)};
  background: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.lighter : colors.white)};

  & ${StyledChevron} {
    ${({ menuIsOpen }) =>
      menuIsOpen &&
      css`
        transform: rotate(180deg);
      `}
  }
`;

const BaseControl = <T extends boolean>({
  children,
  innerRef,
  innerProps,
  ...rest
}: ControlProps<Option, T> & StyledProps) => (
  <StyledBaseControl ref={innerRef} {...innerProps} {...rest}>
    {children}
  </StyledBaseControl>
);

export default BaseControl;
