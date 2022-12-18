/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import styled from '@emotion/styled';
import { ValueContainerProps } from 'react-select';
import { Option } from './types';

const StyledMultiValue = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const ValueContainer = <T extends boolean>({ ...props }: ValueContainerProps<Option, T>) => {
  return <StyledMultiValue {...props.innerProps}>{props.children}</StyledMultiValue>;
};

export default ValueContainer;
