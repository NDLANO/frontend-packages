import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { ControlProps } from 'react-select';

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

type Option = {
  value: string;
  label: string;
};

interface BaseControlProps<T> extends ControlProps<Option, T> {
  ControlComponent?: React.FunctionComponent;
}

const BaseControl = <T extends boolean>({ children, innerRef, innerProps, ...props }: BaseControlProps<T>) => {
  return (
    <StyledBaseControl ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseControl>
  );
};

export default BaseControl;
