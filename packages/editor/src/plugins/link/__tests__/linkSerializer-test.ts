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
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { LINK_ELEMENT_TYPE } from "../linkTypes";

// TODO: This used to include content-link tests. We need to port those over

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      {
        type: PARAGRAPH_ELEMENT_TYPE,
        children: [
          { text: "" },
          {
            type: LINK_ELEMENT_TYPE,
            data: {
              href: "http://test.url/",
              rel: undefined,
              target: undefined,
              title: undefined,
            },
            children: [
              {
                text: "link",
              },
            ],
          },
          { text: "" },
        ],
      },
    ],
  },
];

const html = '<section><p><a href="http://test.url/">link</a></p></section>';
describe("link serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const res = testBlockContentToEditorValue(html);
    expect(res).toMatchObject(editor);
  });
});
