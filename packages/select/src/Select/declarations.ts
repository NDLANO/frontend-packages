/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { GroupBase } from 'react-select';
import { Color } from './types';

declare module 'react-select/dist/declarations/src/Select' {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    small?: boolean;
    colorTheme: Color;
    outline?: boolean;
    prefix?: string;
    postfix?: string;
    bold?: boolean;
  }
}
