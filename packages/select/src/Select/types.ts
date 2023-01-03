/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { GroupBase } from 'react-select';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    small?: boolean;
    colorTheme: Color;
    outline?: boolean;
    prefix?: string;
    postfix?: string;
  }
}

export type Option = {
  value: string;
  label: string;
};

export type Color = 'blue' | 'white';
