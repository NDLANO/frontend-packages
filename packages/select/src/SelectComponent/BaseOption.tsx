/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { OptionProps } from 'react-select';
import { Done } from '@ndla/icons/editor';
import { Option } from './types';

const StyledBaseOption = styled.div<{ isFocused: boolean }>`
  ${fonts.sizes('16')};
  padding: ${spacing.xsmall};
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${({ isFocused }) => (isFocused ? colors.brand.lighter : colors.white)};
  padding-right: 20px;
`;

const StyledCheck = styled.div<{ isVisible: boolean }>`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
`;

const BaseOption = <T extends boolean>({ ...props }: OptionProps<Option, T>) => {
  return (
    <StyledBaseOption ref={props.innerRef} {...props.innerProps} isFocused={props.isFocused}>
      <StyledCheck isVisible={props.isSelected}>
        <Done />
      </StyledCheck>
      {props.children}
    </StyledBaseOption>
  );
};

export default BaseOption;
