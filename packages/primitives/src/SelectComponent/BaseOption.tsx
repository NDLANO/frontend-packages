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

const BaseOption = <T extends boolean>({
  children,
  innerRef,
  innerProps,
}: OptionProps<unknown, T & boolean, GroupBase<Option>>) => {
  return (
    <StyledBaseOption ref={innerRef} {...innerProps}>
      {children}
    </StyledBaseOption>
  );
};

export default BaseOption;
