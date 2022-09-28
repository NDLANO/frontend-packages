/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { InputProps, components } from 'react-select';
import { TagType } from './types';

const Input = ({ selectProps, ...props }: InputProps<TagType, true>) => {
  return (
    <div>
      <components.Input {...{ ...props, selectProps }} />
    </div>
  );
};

export default Input;
