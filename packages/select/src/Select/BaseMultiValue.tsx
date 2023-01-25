/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { MultiValueProps } from 'react-select';
import { Option } from './types';
import { TextEllipsis } from './BaseSingleValue';

const BaseMultiValue = <T extends boolean>({ children }: MultiValueProps<Option, T>) => {
  return <TextEllipsis>{children}</TextEllipsis>;
};

export default BaseMultiValue;
