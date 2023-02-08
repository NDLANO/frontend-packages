/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { PlaceholderProps } from 'react-select';
import { Option } from './types';
import { TextEllipsis } from './BaseSingleValue';

const BasePlaceholder = <T extends boolean>({ children, innerProps }: PlaceholderProps<Option, T>) => (
  <TextEllipsis {...innerProps}>{children}</TextEllipsis>
);
export default BasePlaceholder;
