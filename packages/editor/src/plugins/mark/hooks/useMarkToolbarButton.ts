/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { EditorMarks } from "slate";
import { useSlate } from "slate-react";
import { toggleMark } from "../toggleMark";
import { DOMEditor } from "slate-dom";

interface MarkToolbarButtonStateOptions {
  type: keyof EditorMarks;
}

export const useMarkToolbarButtonState = ({ type }: MarkToolbarButtonStateOptions) => {
  const editor = useSlate();
  const pressed = editor.marks?.[type];

  return {
    type,
    pressed,
  };
};

export const useMarkToolbarButton = (state: ReturnType<typeof useMarkToolbarButtonState>) => {
  const editor = useSlate();

  return {
    props: {
      "data-state": state.pressed ? "on" : "off",
      onClick: () => {
        toggleMark(editor, state.type);
        DOMEditor.focus(editor);
      },
      onMouseDown: (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      },
    },
  };
};
