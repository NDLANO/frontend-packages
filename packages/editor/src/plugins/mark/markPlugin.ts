/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { isEmptyTextNode } from "../../utils/isEmptyTextNode";
import { MARK_PLUGIN } from "./markTypes";

export const markPlugin = createPlugin({
  name: MARK_PLUGIN,
  normalize: (editor, node, path) => {
    if (!isEmptyTextNode(node)) return false;
    if (node.bold || node.code || node.italic || node.sub || node.sup || node.underlined) {
      Transforms.unsetNodes(editor, ["bold", "code", "italic", "sub", "sup", "underlined"], {
        at: path,
      });
      return true;
    }
    return false;
  },
});
