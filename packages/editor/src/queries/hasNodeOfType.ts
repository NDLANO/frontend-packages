/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, Path, type ElementType, Location } from "slate";
import { isElementOfType } from "../utils/isElementType";

export const hasNodeOfType = (editor: Editor, type: ElementType, path?: Path): boolean => {
  const at =
    path ?? (editor.selection && Location.isRange(editor.selection) ? editor.unhangRange(editor.selection) : undefined);
  const [match] = editor.nodes({ match: (n) => isElementOfType(n, type), at });
  return !!match;
};
