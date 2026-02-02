/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { testBlockContentToEditorValue, testBlockContentToHTML } from "../../../__tests__/testUtils";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { SPAN_ELEMENT_TYPE } from "../spanTypes";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      {
        type: PARAGRAPH_ELEMENT_TYPE,
        children: [
          { text: "" },
          { type: SPAN_ELEMENT_TYPE, data: { lang: "en" }, children: [{ text: "test" }] },
          { text: "" },
        ],
      },
    ],
  },
];

const html = '<section><p><span lang="en">test</span></p></section>';
const htmlWithoutAttributes = "<section><p><span>test</span></p></section>";
const hmtlWithoutSpan = "<section><p>test</p></section>";

describe("span serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("serializing unwraps span without attributes", () => {
    const editorWithoutAttributes: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              { text: "" },
              {
                type: SPAN_ELEMENT_TYPE,
                data: {},
                children: [{ text: "test" }, { text: "" }],
              },
            ],
          },
        ],
      },
    ];

    const res = testBlockContentToHTML(editorWithoutAttributes);
    expect(res).toMatch(hmtlWithoutSpan);
  });

  test("deserializing", () => {
    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(editor);
  });

  test("deserializing handles span without attributes", () => {
    const editorWithoutSpan: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "test" }],
          },
        ],
      },
    ];

    const res = testBlockContentToEditorValue(htmlWithoutAttributes);
    expect(res).toEqual(editorWithoutSpan);
  });
});
