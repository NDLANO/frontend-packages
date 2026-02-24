/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { describe, test, expect } from "vitest";
import { createSlate } from "../../../editor/createSlate";
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { sectionPlugin } from "../../section/sectionPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { markPlugin } from "../markPlugin";

describe("mark normalizer tests", () => {
  test("Remove marks from empty text nodes", () => {
    const editor = createSlate({ plugins: [sectionPlugin, paragraphPlugin, markPlugin] });
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
  test("Remove unsupported marks from editor", () => {
    const value: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ sub: true, bold: true, sup: true, italic: true, code: true, text: "Hello" }],
          },
        ],
      },
    ];
    const editor = createSlate({
      plugins: [
        sectionPlugin,
        paragraphPlugin,
        markPlugin.configure({
          options: {
            supportedMarks: { value: ["bold", "italic", "underlined"], override: true },
          },
        }),
      ],
      shouldNormalize: true,
      value,
    });

    const expected: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ bold: true, italic: true, text: "Hello" }],
          },
        ],
      },
    ];
    expect(editor.children).toEqual(expected);
  });
});
