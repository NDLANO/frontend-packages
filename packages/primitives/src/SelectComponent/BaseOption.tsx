/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
import { GroupBase, OptionProps } from 'react-select';
import { Option } from './types';

const StyledBaseOption = styled.div<{ isFocused: boolean }>`
  height: 25px;
  font-size: 14px;
  padding: ${spacing.xsmall};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isFocused }) => (isFocused ? colors.brand.lighter : colors.white)};
`;

const BaseOption = <T extends boolean>({ isFocused, ...props }: OptionProps<unknown, T, GroupBase<Option>>) => {
  return (
    <StyledBaseOption ref={props.innerRef} {...props.innerProps} isFocused={isFocused}>
      {props.children}
    </StyledBaseOption>
  );
};

export default BaseOption;
