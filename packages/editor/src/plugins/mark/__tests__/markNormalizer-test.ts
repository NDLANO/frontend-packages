/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { createSlate } from "../../../utils/createSlate";
import { sectionPlugin } from "../../section/sectionPlugin";
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { markPlugin } from "../markPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";

const editor = createSlate({ plugins: [sectionPlugin, paragraphPlugin, markPlugin] });

describe("mark normalizer tests", () => {
  test("Remove marks from empty text nodes", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ bold: true, italic: true, text: "" }],
          },
        ],
      },
    ];

    const expectedValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "" }],
          },
        ],
      },
    ];

    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });
});
