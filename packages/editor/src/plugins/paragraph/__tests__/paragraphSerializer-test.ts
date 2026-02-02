/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { testBlockContentToEditorValue, testBlockContentToHTML } from "../../../__tests__/testUtils";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraphTypes";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "123" }] },
      { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "abc" }] },
    ],
  },
];

const html = "<section><p>123</p><p>abc</p></section>";

describe("paragraph serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("serializing handles empty paragraphs", () => {
    const editorWithEmptyParagraph: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "123" }] },
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "abc" }] },
        ],
      },
    ];

    const res = testBlockContentToHTML(editorWithEmptyParagraph);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(editor);
  });

  test("deserializing handles unwrapped text", () => {
    const htmlWithUnwrappedText = "<section>123<p>abc</p></section>";

    const res = testBlockContentToEditorValue(htmlWithUnwrappedText);
    expect(res).toEqual(editor);
  });
});
