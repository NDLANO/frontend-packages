/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createPlugin } from "../../core/createPlugin";
import { SECTION_ELEMENT_TYPE } from "./sectionTypes";

export const sectionPlugin = createPlugin({
  type: SECTION_ELEMENT_TYPE,
});
