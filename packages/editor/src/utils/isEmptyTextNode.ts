/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Text, type Node } from "slate";

export const isEmptyTextNode = (node: Node): node is Text => {
  return Text.isText(node) && node.text === "";
};
