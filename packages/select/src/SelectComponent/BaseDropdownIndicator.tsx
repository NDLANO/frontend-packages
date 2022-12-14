/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import { DropdownIndicatorProps, GroupBase } from 'react-select';
import { ChevronDown } from '@ndla/icons/common';
import { Option } from './types';

const BaseDropdownIndicator = <T extends boolean>({
  innerProps,
}: DropdownIndicatorProps<Option, T, GroupBase<Option>>) => {
  return (
    <div {...innerProps}>
      <ChevronDown />
    </div>
  );
};

export default BaseDropdownIndicator;
