/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { GroupBase, ValueContainerProps } from 'react-select';
import { Option } from './types';

const StyledBaseValueContainer = styled.div`
  display: flex;
`;

const BaseValueContainer = <T extends boolean>({
  children,
  innerProps,
}: ValueContainerProps<unknown, T, GroupBase<Option>>) => {
  return <StyledBaseValueContainer {...innerProps}>{children}</StyledBaseValueContainer>;
};

export default BaseValueContainer;
