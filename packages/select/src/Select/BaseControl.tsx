import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ControlProps } from 'react-select';
import { Option, StyledProps } from './types';

const StyledBaseControl = styled.div<StyledProps>`
  border-radius: 4px;
  padding: 0px ${spacing.xsmall};
  min-height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  &:focus-within {
    outline: 2px solid ${colors.brand.primary};
  }
  ${fonts.sizes('24px', '16px')};

  ${({ small }) => small && `${fonts.sizes('16px', '16px')};`}

  border-style: solid;
  border-width: ${({ outline }) => (outline ? '1px' : '0px')};
  border-color: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.primary : colors.brand.lighter)};

  background: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.lighter : colors.white)};
`;

const BaseControl = <T extends boolean>({ children, innerRef, ...rest }: ControlProps<Option, T> & StyledProps) => (
  <StyledBaseControl ref={innerRef} {...rest}>
    {children}
  </StyledBaseControl>
);

export default BaseControl;
