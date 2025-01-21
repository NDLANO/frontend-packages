/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { SECTION_ELEMENT_TYPE } from "../sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { blockContentToHTML } from "../../../serialization/html/serializeToHtml";
import { blockContentToEditorValue } from "../../../serialization/html/deserializeFromHtml";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "123" }] }],
  },
  {
    type: SECTION_ELEMENT_TYPE,
    children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "abc" }] }],
  },
];

const html = "<section><p>123</p></section><section><p>abc</p></section>";

describe("section serializing tests", () => {
  test("serializing", () => {
    const res = blockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const res = blockContentToEditorValue(html);
    expect(res).toEqual(editor);
  });

  test("create empty <section> if html is undefined or empty string", () => {
    const expected = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] }],
      },
    ];

    const res1 = blockContentToEditorValue("");
    expect(res1).toEqual(expected);
  });
});
