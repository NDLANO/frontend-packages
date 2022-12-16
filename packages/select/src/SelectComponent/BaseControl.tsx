import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ControlProps } from 'react-select';
import { Option } from './types';

const StyledBaseControl = styled.div<{ isFocused: boolean }>`
  border-radius: 4px;
  background-color: ${colors.brand.lighter};
  padding: 0px ${spacing.xsmall};
  ${fonts.sizes('16')};
  min-height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  outline: ${({ isFocused }) => (isFocused ? `1px solid ${colors.brand.primary}` : 'none')};
`;

const BaseControl = <T extends boolean>({ children, innerRef, innerProps, isFocused }: ControlProps<Option, T>) => {
  return (
    <StyledBaseControl isFocused={isFocused} ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseControl>
  );
};

export default BaseControl;
