/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Editor, Node, Path, Point, Range, Text, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { HEADING_ELEMENT_TYPE, HEADING_PLUGIN } from "./headingTypes";
import { isHeadingElement } from "./queries/headingQueries";
import { getCurrentBlock } from "../../queries/getCurrentBlock";
import type { Logger } from "../../core";

const onDelete = (editor: Editor, logger: Logger) => {
  if (!editor.selection || !Range.isCollapsed(editor.selection) || editor.selection.anchor.offset) return;
  const [match] = editor.nodes({ match: isHeadingElement });
  if (match?.[0] && Node.string(match[0]) === "") {
    logger.log("Backspace in empty heading, unwrapping");
    Transforms.unwrapNodes(editor);
  }
};

export const headingPlugin = createPlugin({
  type: HEADING_ELEMENT_TYPE,
  name: HEADING_PLUGIN,
  normalize: (editor, node, path, logger) => {
    if (!isHeadingElement(node)) return false;

    if (
      Node.string(node) === "" &&
      (!editor.selection || (Range.isCollapsed(editor.selection) && !Path.isCommon(path, editor.selection.anchor.path)))
    ) {
      logger.log("Removing empty heading that is not selected");
      Transforms.unwrapNodes(editor, { at: path });
      return true;
    }

    for (const [index, child] of node.children.entries()) {
      if (Text.isText(child)) {
        if (child.bold) {
          logger.log("Removing bold from text within heading");
          Transforms.setNodes(editor, { bold: undefined }, { at: path.concat(index) });
          return true;
        }
        continue;
      }

      if (!editor.isInline(child)) {
        logger.log("Heading contains block element, unwrapping.");
        Transforms.unwrapNodes(editor, { at: path.concat(index) });
        return true;
      }
    }

    return false;
  },
  transform: (editor, logger) => {
    const { deleteBackward, deleteFragment, insertBreak } = editor;
    // Modify delete behavior when deleting the last character in a heading.
    editor.deleteBackward = (unit) => {
      editor.withoutNormalizing(() => {
        deleteBackward(unit);
        onDelete(editor, logger);
      });
    };

    // Modify delete behavior when deleting remaining text in a heading.
    editor.deleteFragment = (options) => {
      editor.withoutNormalizing(() => {
        deleteFragment(options);
        onDelete(editor, logger);
      });
    };

    editor.insertBreak = () => {
      if (!editor.selection || !Range.isRange(editor.selection)) return insertBreak();

      const entry = getCurrentBlock(editor, HEADING_ELEMENT_TYPE);
      if (!entry) return insertBreak();

      const [, path] = entry;

      if (Point.equals(editor.end(path), editor.selection.anchor)) {
        logger.log("Enter at end of heading, inserting paragraph after");
        return Transforms.insertNodes(editor, { type: "paragraph", children: [{ text: "" }] });
      } else if (Point.equals(editor.start(path), editor.selection.anchor)) {
        logger.log("Enter at start of heading, inserting paragraph");
        return Transforms.insertNodes(editor, { type: "paragraph", children: [{ text: "" }] }, { at: path });
      }
      return insertBreak();
    };

    return editor;
  },
});
