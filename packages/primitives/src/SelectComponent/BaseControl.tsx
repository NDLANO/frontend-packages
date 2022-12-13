import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { ControlProps, GroupBase } from 'react-select';
import { Option } from './types';

const StyledBaseControl = styled.div<{ isFocused: boolean }>`
  border: none;
  border-radius: 4px;
  background-color: ${colors.brand.lighter};
  padding: 0px ${spacing.xsmall};
  font-size: 14px;
  height: 25px;
  min-height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;
  outline: ${({ isFocused }) => (isFocused ? `1px solid ${colors.brand.primary}` : 'none')};
`;

const BaseControl = <T extends boolean>({
  children,
  innerRef,
  innerProps,
  isFocused,
}: ControlProps<unknown, T & boolean, GroupBase<Option>>) => {
  return (
    <StyledBaseControl isFocused={isFocused} ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseControl>
  );
};

export default BaseControl;
