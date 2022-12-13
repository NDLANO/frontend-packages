import React, { FunctionComponent, ReactNode, forwardRef } from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { ControlProps, OptionProps } from 'react-select';
import { css } from '@emotion/react';
import { Done } from '@ndla/icons/lib/editor';
import { Option } from './types';

const StyledBaseOption = styled.div`
  height: 25px;
  font-size: 14px;
  padding: ${spacing.xsmall};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${colors.brand.lighter};
  }
`;

const StyledIcon = styled.div<{ isSelected: boolean }>`
  visibility: ${(isSelected) => (isSelected ? 'visible' : 'hidden')};
`;

interface BaseOptionProps<Option, T> extends OptionProps<Option, T & boolean> {
  // icon?: ReactNode;
  //isMultiSelect?: boolean;
}

/*

  {icon ? (
        <StyledIcon isSelected={props.isSelected}>{icon}</StyledIcon>
      ) : isMultiSelect ? (
        <div css={{ visibility: props.isSelected ? 'visible' : 'hidden' }}>
          <Done />
        </div>
      ) : null}
*/
const BaseOption = forwardRef<HTMLDivElement, BaseOptionProps<Option, T & boolean>>(
  (
    {
      //icon,
      //isMultiSelect,
      children,
      innerRef,
      innerProps,
      ...props
    },
    ref,
  ) => {
    return (
      <StyledBaseOption ref={innerRef} {...innerProps}>
        {children}
      </StyledBaseOption>
    );
  },
);

export default BaseOption;
