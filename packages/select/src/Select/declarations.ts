/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { GroupBase } from "react-select";
import type {} from "react-select/base";

declare module "react-select/base" {
  export interface Props<Option, IsMulti extends boolean, Group extends GroupBase<Option>> {
    [key: string]: any;
  }
}
