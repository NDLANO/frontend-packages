/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, Node, Path, Transforms } from "slate";
import { createPlugin } from "../../core/createPlugin";
import { PARAGRAPH_ELEMENT_TYPE, type ParagraphElementType, type ParagraphPluginConfiguration } from "./paragraphTypes";
import { isParagraphElement } from "./queries/paragraphElementQueries";
import { LIST_ITEM_ELEMENT_TYPE } from "../list/listTypes";

export const paragraphPlugin = createPlugin<ParagraphElementType, ParagraphPluginConfiguration>({
  type: PARAGRAPH_ELEMENT_TYPE,
  name: PARAGRAPH_ELEMENT_TYPE,
  configuration: {
    options: {
      nonSerializableParents: [LIST_ITEM_ELEMENT_TYPE],
    },
  },
  normalize: (editor, node, path, logger, opts) => {
    if (!isParagraphElement(node)) return false;
    const [parentNode] = editor.node(Path.parent(path));

    // If paragraph is not in a list or table, make sure it will be rendered with <p>-tag
    if (
      Element.isElement(parentNode) &&
      !opts.nonSerializableParents?.includes(parentNode.type) &&
      node.serializeAsText
    ) {
      Transforms.unsetNodes(editor, "serializeAsText", { at: path });
      return true;
    }

    // If two paragraphs are direct siblings, make sure both will be rendered with <p>-tag
    if (Path.hasPrevious(path)) {
      const [previousNode] = editor.node(Path.previous(path));
      if (isParagraphElement(previousNode) && (previousNode.serializeAsText || node.serializeAsText)) {
        Transforms.unsetNodes(editor, "serializeAsText", {
          at: Path.parent(path),
          mode: "all",
          match: isParagraphElement,
        });
        return true;
      }
    }
    if (editor.hasPath(Path.next(path))) {
      const [nextNode] = editor.node(Path.next(path));
      if (isParagraphElement(nextNode) && (nextNode.serializeAsText || node.serializeAsText)) {
        Transforms.unsetNodes(editor, "serializeAsText", {
          at: Path.parent(path),
          mode: "all",
          match: isParagraphElement,
        });
        return true;
      }
    }

    // Unwrap block element children. Only text allowed.
    for (const [child, childPath] of Node.children(editor, path)) {
      if (Element.isElement(child) && !editor.isInline(child)) {
        logger.log("Paragraph contains block element, unwrapping.");
        Transforms.unwrapNodes(editor, { at: childPath });
        return true;
      }
    }

    return false;
  },
});
