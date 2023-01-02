import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { css } from '@emotion/react';
import { ControlProps } from 'react-select';
import { Option, StyledProps } from './types';

const StyledBaseControl = styled.div<StyledProps>`
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  border-radius: 4px;
  padding: ${spacing.small} ${spacing.normal};
  min-height: 40px;
  font-weight: ${fonts.weight.semibold};

  ${({ small }) =>
    small &&
    css`
      padding: ${spacing.xxsmall} ${spacing.xsmall};
      min-height: unset;
      font-weight: ${fonts.weight.normal};
    `}

  &:focus-within {
    outline: 2px solid ${colors.brand.dark};
  }

  ${({ small }) => `${fonts.sizes(small ? '16px' : '18px', small ? '16px' : '24px')}`};

  color: ${colors.brand.dark};
  ::placeholder {
    color: ${colors.brand.dark};
  }

  border-style: solid;
  border-width: ${({ outline }) => (outline ? '1px' : '0px')};
  border-color: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.dark : colors.brand.lighter)};

  background: ${({ colorTheme }) => (colorTheme === 'blue' ? colors.brand.lighter : colors.white)};
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
