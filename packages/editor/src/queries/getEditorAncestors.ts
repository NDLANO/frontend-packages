/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type Editor, Element, Node } from "slate";

// TODO: I don't like that we're using the section type in here. Should be agnostic
export const getEditorAncestors = (editor: Editor, reverse?: boolean): Element[] => {
  // Finds the current lowest node in the editor and creates an array of its ancestors.
  const [lowest] = editor.nodes({ mode: "lowest" });
  const ancestorGen = Node.ancestors(editor, lowest[1], { reverse });
  const elementAncestors: Element[] = [];
  // ancestorGen is a generator, so we need to iterate over it to get the values.
  for (const ancestor of ancestorGen) {
    if (Element.isElement(ancestor[0]) && ancestor[0].type !== "section") {
      elementAncestors.push(ancestor[0]);
    }
  }
  return elementAncestors;
};
