/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { describe, test, expect } from "vitest";
import { testBlockContentToEditorValue, testBlockContentToHTML } from "../../../__tests__/testUtils";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      {
        type: "paragraph",
        children: [
          {
            bold: true,
            text: "bold",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            italic: true,
            text: "italic",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            sup: true,
            text: "sup",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            sub: true,
            text: "sub",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            code: true,
            text: "code",
          },
        ],
      },
      {
        type: "paragraph",
        children: [
          {
            bold: true,
            code: true,
            italic: true,
            sub: true,
            sup: true,
            text: "all",
          },
        ],
      },
    ],
  },
];

const html =
  "<section><p><strong>bold</strong></p><p><em>italic</em></p><p><sup>sup</sup></p><p><sub>sub</sub></p><p><code>code</code></p><p><code><sub><sup><em><strong>all</strong></em></sup></sub></code></p></section>";

describe("mark serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(editor);
  });
});
