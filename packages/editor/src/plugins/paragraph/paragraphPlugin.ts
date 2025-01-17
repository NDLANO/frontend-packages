/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createPlugin } from "../../core/createPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "./paragraphTypes";

export const paragraphPlugin = createPlugin({
  type: PARAGRAPH_ELEMENT_TYPE,
  name: PARAGRAPH_ELEMENT_TYPE,
  // override: {
  //   normalizeNode: (entry) => (editor) => {},
  // },
});
