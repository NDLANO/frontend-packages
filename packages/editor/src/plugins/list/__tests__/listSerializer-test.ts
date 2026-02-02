/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { testBlockContentToEditorValue, testBlockContentToHTML } from "../../../__tests__/testUtils";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "../listTypes";

const editor: Descendant[] = [
  {
    type: SECTION_ELEMENT_TYPE,
    children: [
      {
        type: LIST_ELEMENT_TYPE,
        listType: "letter-list",
        data: {},
        children: [
          {
            type: LIST_ITEM_ELEMENT_TYPE,
            children: [
              {
                type: PARAGRAPH_ELEMENT_TYPE,
                children: [
                  {
                    text: "abc",
                  },
                ],
              },
              {
                type: LIST_ELEMENT_TYPE,
                listType: "numbered-list",
                data: {},
                children: [
                  {
                    type: LIST_ITEM_ELEMENT_TYPE,
                    children: [
                      {
                        type: PARAGRAPH_ELEMENT_TYPE,
                        children: [
                          {
                            text: "123",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                type: LIST_ELEMENT_TYPE,
                listType: "bulleted-list",
                data: {},
                children: [
                  {
                    type: LIST_ITEM_ELEMENT_TYPE,
                    children: [
                      {
                        type: PARAGRAPH_ELEMENT_TYPE,
                        children: [
                          {
                            text: "def",
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: LIST_ITEM_ELEMENT_TYPE,
            children: [
              {
                type: PARAGRAPH_ELEMENT_TYPE,
                children: [
                  {
                    text: "ghi",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const html =
  '<section><ol data-type="letters"><li><p>abc</p><ol><li><p>123</p></li></ol><ul><li><p>def</p></li></ul></li><li><p>ghi</p></li></ol></section>';

describe("paragraph serializing tests", () => {
  test("serializing", () => {
    const res = testBlockContentToHTML(editor);
    expect(res).toMatch(html);
  });

  test("deserializing", () => {
    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(editor);
  });

  test("deserializing <li> with plaintext as children", () => {
    const html =
      '<section><ol data-type="letters"><li>abc<strong>123</strong>def<p>paragraph</p>456</li></ol></section>';
    const expected: Descendant[] = [
      {
        type: "section",
        children: [
          {
            type: "list",
            listType: "letter-list",
            data: {},
            children: [
              {
                type: "list-item",
                children: [
                  {
                    type: "paragraph",
                    serializeAsText: true,
                    children: [
                      {
                        text: "abc",
                      },
                      {
                        bold: true,
                        text: "123",
                      },
                      {
                        text: "def",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    children: [
                      {
                        text: "paragraph",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    serializeAsText: true,
                    children: [
                      {
                        text: "456",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ];

    const res = testBlockContentToEditorValue(html);
    expect(res).toEqual(expected);
  });
});
