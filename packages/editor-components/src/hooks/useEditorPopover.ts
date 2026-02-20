/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type UsePopoverProps } from "@ark-ui/react";
import { usePopover } from "@ndla/primitives";
import { useEffect, type RefObject } from "react";
import { Range } from "slate";
import { useFocused, useSelected, useSlate } from "slate-react";

interface UseEditorPopover extends UsePopoverProps {
  openOnEnter?: boolean;
  triggerRef: RefObject<HTMLElement | null>;
}

export const useEditorPopover = ({ triggerRef, ...opts }: UseEditorPopover) => {
  const editor = useSlate();
  const isActive = useSelected();
  const isFocused = useFocused();

  const popover = usePopover({ ...opts });

  useEffect(() => {
    if (!(opts.openOnEnter ?? true)) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      const { selection } = editor;
      if (event.key !== "Enter" || !isActive || !isFocused || !selection) return;
      if (Range.isCollapsed(selection) && document.activeElement?.contains(triggerRef.current)) {
        event.preventDefault();
        popover.setOpen(!popover.open);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [editor, isActive, isFocused, opts.openOnEnter, popover, triggerRef]);
  return popover;
};
