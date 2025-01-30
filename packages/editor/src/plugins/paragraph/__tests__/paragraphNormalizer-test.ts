/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { createSlate } from "../../../editor/createSlate";
import { sectionPlugin } from "../../section/sectionPlugin";
import { paragraphPlugin } from "../paragraphPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraphTypes";

const editor = createSlate({ plugins: [sectionPlugin, paragraphPlugin] });

describe("paragraph normalizer tests", () => {
  test("Remove serializeAsText from paragraph that is not placed in list-item", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            serializeAsText: true,
            children: [{ text: "" }],
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
