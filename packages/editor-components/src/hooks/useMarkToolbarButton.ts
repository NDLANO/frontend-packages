/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { toggleMark } from "@ndla/editor";
import type { MouseEvent } from "react";
import type { EditorMarks } from "slate";
import { useSlate } from "slate-react";

interface MarkToolbarButtonStateOptions {
  type: keyof EditorMarks;
}

export const useMarkToolbarButtonState = ({ type }: MarkToolbarButtonStateOptions) => {
  const editor = useSlate();
  const pressed = !!(editor.selection && editor.hasPath(editor.selection.anchor.path)
    ? editor.getMarks()?.[type]
    : undefined);

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
      onClick: () => toggleMark(editor, state.type),
      onMouseDown: (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
      },
    },
  };
};
