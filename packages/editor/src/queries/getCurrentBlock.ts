/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Editor, Element } from "slate";
import { isElementOfType } from "../utils/isElementType";

export const getCurrentBlock = <T extends Element["type"]>(editor: Editor, type: T) => {
  const [match] = editor.nodes({ match: (n) => isElementOfType(n, type), mode: "lowest" });
  return match;
};
