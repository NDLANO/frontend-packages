/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { isKeyHotkey } from "is-hotkey";
import { Element, Range, Transforms, type Editor, type Location } from "slate";
import { createPlugin } from "../../core/createPlugin";

const moveAroundInline = (editor: Editor, event: { preventDefault(): void }, reverse: boolean): boolean => {
  if (!editor.selection || !Range.isCollapsed(editor.selection)) return false;

  const { anchor } = editor.selection;
  const atBoundary = (at: Location) => (reverse ? editor.isStart(anchor, at) : editor.isEnd(anchor, at));

  const [inlineMatch] = editor.nodes({ match: (n) => Element.isElement(n) && editor.isInline(n), reverse: true });
  if (inlineMatch) {
    const [, inlinePath] = inlineMatch;
    if (!atBoundary(inlinePath)) return false;
    event.preventDefault();
    Transforms.move(editor, { unit: "offset", reverse });
    return true;
  }

  if (!atBoundary(anchor.path)) return false;
  const [parentNode] = editor.parent(anchor.path);
  const childIndex = anchor.path.at(-1)!;
  const sibling = parentNode.children[childIndex + (reverse ? -1 : 1)];
  if (Element.isElement(sibling) && editor.isInline(sibling)) {
    event.preventDefault();
    Transforms.move(editor, { unit: "offset", reverse });
    return true;
  }

  return false;
};

/**
 * By default, Slate does not allow the user to navigate into or out of inline elements using the arrow keys.
 * This plugin fixes that by intercepting arrow keys at inline boundaries (both entering and exiting).
 */
export const inlineNavigationPlugin = createPlugin({
  name: "inline-plugin",
  shortcuts: {
    "inline-left": {
      keyCondition: isKeyHotkey("left"),
      handler: (editor, event) => moveAroundInline(editor, event, true),
      ignoreSkipLogging: true,
    },
    "inline-right": {
      keyCondition: isKeyHotkey("right"),
      handler: (editor, event) => moveAroundInline(editor, event, false),
      ignoreSkipLogging: true,
    },
  },
});
