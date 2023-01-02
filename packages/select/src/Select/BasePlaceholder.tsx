/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { PlaceholderProps } from 'react-select';
import styled from '@emotion/styled';
import { Option } from './types';

export const TextEllipsis = styled.span`
  grid-area: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

interface Props {
  small?: boolean;
}

const BasePlaceholder = <T extends boolean>({ children, innerProps }: Props & PlaceholderProps<Option, T>) => (
  <TextEllipsis {...innerProps}>{children}</TextEllipsis>
);
export default BasePlaceholder;
