/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, type EditorMarks } from "slate";

export const toggleMark = (editor: Editor, format: keyof EditorMarks) => {
  if (!editor.selection) return;
  editor.withoutNormalizing(() => {
    if (Editor.marks(editor)?.[format]) {
      editor.removeMark(format);
      return;
    }
    editor.addMark(format, true);
  });
};
