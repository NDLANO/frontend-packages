/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { ContainerProps, GroupBase } from 'react-select';
import styled from '@emotion/styled';
import { Option } from './types';

export const StyledContainer = styled.div`
  max-width: 100%;
`;

const BaseContainer = <T extends boolean>({ children, innerProps }: ContainerProps<Option, T, GroupBase<Option>>) => (
  <StyledContainer {...innerProps}>{children}</StyledContainer>
);
export default BaseContainer;
