import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { ControlProps } from 'react-select';
import { Option } from './types';

const StyledBaseControl = styled.div`
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
`;

const BaseControl = <T extends boolean>({ children, innerRef, innerProps }: ControlProps<Option, T & boolean>) => {
  return (
    <StyledBaseControl ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseControl>
  );
};

export default BaseControl;
