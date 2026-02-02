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
import { HEADING_ELEMENT_TYPE } from "../headingTypes";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      { type: HEADING_ELEMENT_TYPE, level: 1, children: [{ text: "title1" }] },
      { type: HEADING_ELEMENT_TYPE, level: 2, children: [{ text: "title2" }] },
      { type: HEADING_ELEMENT_TYPE, level: 3, children: [{ text: "title3" }] },
      { type: HEADING_ELEMENT_TYPE, level: 4, children: [{ text: "title4" }] },
      { type: HEADING_ELEMENT_TYPE, level: 5, children: [{ text: "title5" }] },
      { type: HEADING_ELEMENT_TYPE, level: 6, children: [{ text: "title6" }] },
    ],
  },
];

const html =
  "<section><h1>title1</h1><h2>title2</h2><h3>title3</h3><h4>title4</h4><h5>title5</h5><h6>title6</h6></section>";

describe("heading serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const expected: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          { type: HEADING_ELEMENT_TYPE, level: 2, children: [{ text: "title1" }] },
          { type: HEADING_ELEMENT_TYPE, level: 2, children: [{ text: "title2" }] },
          { type: HEADING_ELEMENT_TYPE, level: 3, children: [{ text: "title3" }] },
          { type: HEADING_ELEMENT_TYPE, level: 4, children: [{ text: "title4" }] },
          { type: HEADING_ELEMENT_TYPE, level: 4, children: [{ text: "title5" }] },
          { type: HEADING_ELEMENT_TYPE, level: 4, children: [{ text: "title6" }] },
        ],
      },
    ];
    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(expected);
  });
});
