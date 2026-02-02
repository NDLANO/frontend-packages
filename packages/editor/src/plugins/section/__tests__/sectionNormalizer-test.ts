/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { createSlate } from "../../../editor/createSlate";
import { headingPlugin } from "../../heading/headingPlugin";
import { HEADING_ELEMENT_TYPE } from "../../heading/headingTypes";
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { sectionPlugin } from "../sectionPlugin";
import { SECTION_ELEMENT_TYPE } from "../sectionTypes";

const editor = createSlate({
  plugins: [sectionPlugin, paragraphPlugin, headingPlugin],
});

describe("section normalizer tests", () => {
  test("adds paragraph to empty section", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [],
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

  test("wraps child text in paragraph", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [{ text: "abc" }],
      },
    ];

    const expectedValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "abc" }],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("adds paragraph to the end of the section", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: HEADING_ELEMENT_TYPE,
            level: 1,
            children: [{ text: "heading" }],
          },
        ],
      },
    ];

    const expectedValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: HEADING_ELEMENT_TYPE,
            level: 1,
            children: [{ text: "heading" }],
          },
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
