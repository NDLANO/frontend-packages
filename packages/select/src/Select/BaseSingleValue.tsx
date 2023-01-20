/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts } from '@ndla/core';
import { GroupBase, SingleValueProps } from 'react-select';
import { Option } from './types';

const StyledSingleValue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledPostfix = styled.span<StyledProps>`
  font-weight: ${fonts.weight.semibold};
  font-weight: ${({ small, bold }) => !small && bold && fonts.weight.bold};
`;

interface StyledProps {
  small?: boolean;
  bold?: boolean;
}

const BaseSingleValue = <T extends boolean>({
  innerProps,
  selectProps: { small, prefix, postfix, bold },
  children,
}: StyledProps & SingleValueProps<Option, T, GroupBase<Option>>) => {
  return (
    <StyledSingleValue {...innerProps}>
      <StyledPostfix small={small} bold={bold}>
        {prefix}
      </StyledPostfix>
      {children}
      <span>{postfix}</span>
    </StyledSingleValue>
  );
};

export default BaseSingleValue;
