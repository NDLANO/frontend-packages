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

const StyledMultiValue = styled.div`
  overflow: hidden;
  display: flex;
`;

const ValueContainer = <T extends boolean>({ ...props }: ValueContainerProps<Option, T, GroupBase<Option>>) => {
  return <StyledMultiValue {...props.innerProps}>{props.children}</StyledMultiValue>;
};

export default ValueContainer;
