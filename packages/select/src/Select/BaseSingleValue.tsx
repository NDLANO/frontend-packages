/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { fonts } from '@ndla/core/src';
import { components, GroupBase, SingleValueProps } from 'react-select';
import { Option } from './types';

const StyledSingleValue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledPostfix = styled.span`
  font-weight: ${fonts.weight.semibold};
`;

interface Props {
  prefix?: string;
  postfix?: string;
}

const BaseSingleValue = <T extends boolean>({
  innerProps,
  prefix,
  postfix,
  children,
}: Props & SingleValueProps<Option, T, GroupBase<Option>>) => {
  return (
    <StyledSingleValue {...innerProps}>
      <StyledPostfix>{prefix}</StyledPostfix>
      {children}
      <span>{postfix}</span>
    </StyledSingleValue>
  );
};

export default BaseSingleValue;
