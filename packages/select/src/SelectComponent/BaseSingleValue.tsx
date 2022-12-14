/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { GroupBase, SingleValueProps } from 'react-select';
import { Option } from './types';

const BaseSingleValue = <T extends boolean>({
  children,
  innerProps,
}: SingleValueProps<Option, T, GroupBase<Option>>) => {
  return <div {...innerProps}>{children}</div>;
};

export default BaseSingleValue;
