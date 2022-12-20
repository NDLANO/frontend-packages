import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ControlPropsType } from './types';

const StyledBaseControl = styled.div`
  border-radius: 4px;
  background-color: ${colors.brand.lighter};
  padding: 0px ${spacing.xsmall};
  ${fonts.sizes('16')};
  min-height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: space-between;

  &:focus-within {
    outline: 2px solid ${colors.brand.primary};
  }
`;

const BaseControl = <T extends boolean>({ children, innerRef, innerProps }: ControlPropsType<T>) => {
  return (
    <StyledBaseControl ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseControl>
  );
};

export default BaseControl;
