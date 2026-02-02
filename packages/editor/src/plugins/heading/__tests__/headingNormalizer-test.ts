/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Transforms, type Descendant } from "slate";
import { createSlate } from "../../../editor/createSlate";
import { softBreakPlugin } from "../../break/softBreakPlugin";
import { markPlugin } from "../../mark/markPlugin";
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { sectionPlugin } from "../../section/sectionPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { headingPlugin } from "../headingPlugin";
import { HEADING_ELEMENT_TYPE } from "../headingTypes";

const editor = createSlate({ plugins: [sectionPlugin, paragraphPlugin, headingPlugin, markPlugin, softBreakPlugin] });

describe("heading normalizer tests", () => {
  test("unwrap empty header if not selected", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "" }],
          },
          {
            type: HEADING_ELEMENT_TYPE,
            level: 2,
            children: [{ text: "" }],
          },
          {
            type: HEADING_ELEMENT_TYPE,
            level: 3,
            children: [{ text: "not empty" }],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
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
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "" }],
          },
          {
            type: HEADING_ELEMENT_TYPE,
            level: 3,
            children: [{ text: "not empty" }],
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

  test("dont remove empty header if selected", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "" }],
          },
          {
            type: HEADING_ELEMENT_TYPE,
            level: 2,
            children: [{ text: "" }],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
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
          {
            type: HEADING_ELEMENT_TYPE,
            level: 2,
            children: [{ text: "" }],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "" }],
          },
        ],
      },
    ];
    editor.children = editorValue;
    Transforms.select(editor, [0, 1, 0]);
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });
});

test("remove bold marker on header", () => {
  const editorValue: Descendant[] = [
    {
      type: SECTION_ELEMENT_TYPE,
      children: [
        {
          type: PARAGRAPH_ELEMENT_TYPE,
          children: [{ text: "" }],
        },
        {
          type: HEADING_ELEMENT_TYPE,
          level: 2,
          children: [{ text: "Test", bold: true }],
        },
        {
          type: PARAGRAPH_ELEMENT_TYPE,
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
        {
          type: HEADING_ELEMENT_TYPE,
          level: 2,
          children: [{ text: "Test" }],
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
