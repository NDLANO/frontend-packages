/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type UsePopoverProps } from "@ark-ui/react";
import { useEffect } from "react";
import { Range } from "slate";
import { useFocused, useSelected, useSlate } from "slate-react";
import { usePopover } from "@ndla/primitives";

interface UseEditorPopover extends UsePopoverProps {
  openOnEnter?: boolean;
}

export const useEditorPopover = (opts: UseEditorPopover = {}) => {
  const editor = useSlate();
  const isActive = useSelected();
  const isFocused = useFocused();

  const popover = usePopover({ ...opts });

  useEffect(() => {
    if (!(opts.openOnEnter ?? true)) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const { selection } = editor;
      if (event.key !== "Enter" || !isActive || !isFocused || !selection) return;
      if (Range.isCollapsed(selection) && !editor.isEdge(selection.anchor, selection.anchor.path)) {
        event.preventDefault();
        popover.setOpen(!popover.open);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [editor, isActive, isFocused]);

  return popover;
};
