/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createPlugin } from "../../core/createPlugin";
import { BREAK_ELEMENT_TYPE } from "./breakTypes";

export const breakPlugin = createPlugin({
  type: BREAK_ELEMENT_TYPE,
  name: BREAK_ELEMENT_TYPE,
  isVoid: true,
  // normalize: (editor, node, path) => {
  //
  // }
});
