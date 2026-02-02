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
import { BREAK_ELEMENT_TYPE } from "../breakTypes";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      {
        type: BREAK_ELEMENT_TYPE,
        children: [{ text: "" }],
      },
    ],
  },
];

const html = "<section><br/></section>";

describe("break serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(editor);
  });
});
