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
import { softBreakPlugin } from "../../break/softBreakPlugin";
import { headingPlugin } from "../../heading/headingPlugin";
import { listPlugin } from "../../list/listPlugin";
import { markPlugin } from "../../mark/markPlugin";
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { sectionPlugin } from "../../section/sectionPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { linkPlugin } from "../linkPlugin";
import { LINK_ELEMENT_TYPE } from "../linkTypes";

const editor = createSlate({
  plugins: [sectionPlugin, paragraphPlugin, linkPlugin, headingPlugin, softBreakPlugin, markPlugin, listPlugin],
});

describe("link normalizer tests", () => {
  test("Remove any elements in links", () => {
    const editorValue: Descendant[] = [
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
                  href: "test-url",
                },
                children: [
                  {
                    type: PARAGRAPH_ELEMENT_TYPE,
                    children: [{ text: "illegal block" }],
                  },
                ],
              },
              { text: "" },
            ],
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
            children: [
              { text: "" },
              {
                type: LINK_ELEMENT_TYPE,
                data: {
                  href: "test-url",
                },
                children: [{ text: "illegal block" }],
              },
              { text: "" },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  // TODO: this used to be a content link test, but we don't have content links here yet
  test("link text keeps styling", () => {
    const editorValue: Descendant[] = [
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
                  href: "test-url",
                },
                children: [{ bold: true, italic: true, text: "content" }],
              },
              { text: "" },
            ],
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
            children: [
              { text: "" },
              {
                type: LINK_ELEMENT_TYPE,
                data: {
                  href: "test-url",
                },
                children: [{ bold: true, italic: true, text: "content" }],
              },
              { text: "" },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("Remove empty links", () => {
    const editorValue: Descendant[] = [
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
                  href: "test-url",
                },
                children: [
                  {
                    text: "",
                  },
                ],
              },
              { text: "" },
              { text: "" },
            ],
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
});
