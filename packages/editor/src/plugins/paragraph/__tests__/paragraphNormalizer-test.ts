/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { createSlate } from "../../../editor/createSlate";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "../../list/listTypes";
import { sectionPlugin } from "../../section/sectionPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { spanPlugin } from "../../span/spanPlugin";
import { SPAN_ELEMENT_TYPE } from "../../span/spanTypes";
import { paragraphPlugin } from "../paragraphPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../paragraphTypes";

const editor = createSlate({ plugins: [sectionPlugin, paragraphPlugin, spanPlugin] });

describe("paragraph normalizer tests", () => {
  test("Remove serializeAsText from paragraph that is not placed in list-item", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            serializeAsText: true,
            children: [{ text: "" }],
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
  test("Remove leading whitespace from paragraph", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            serializeAsText: true,
            children: [{ text: " This is a paragraph" }],
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
            children: [{ text: "This is a paragraph" }],
          },
        ],
      },
    ];
    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });
  test("Remove trailing whitespace from paragraph", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            serializeAsText: true,
            children: [{ text: "This is a paragraph " }],
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
            children: [{ text: "This is a paragraph" }],
          },
        ],
      },
    ];
    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });
  test("Remove leading whitespace from nested element in paragraph", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              { text: "" },
              { type: SPAN_ELEMENT_TYPE, data: {}, children: [{ text: " This is a paragraph" }] },
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
              { type: SPAN_ELEMENT_TYPE, data: {}, children: [{ text: "This is a paragraph" }] },
              { text: "" },
            ],
          },
        ],
      },
    ];
    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });
  test("Remove trailing whitespace from nested element in paragraph", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              { type: SPAN_ELEMENT_TYPE, data: {}, children: [{ text: "This is a paragraph " }] },
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
              { type: SPAN_ELEMENT_TYPE, data: {}, children: [{ text: "This is a paragraph" }] },
              { text: "" },
            ],
          },
        ],
      },
    ];
    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("Removing trailing whitespace doesn't interfere with other elements", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "Fosterutviklingen starter når en eggcelle og en sædcelle smelter sammen ved befruktning, og omfatter utviklingen fram til klekking eller fødsel. Den befruktede eggcellen ",
              },
              { text: "zygoten", italic: true },
              {
                text: " gjennomgår flere utviklingsstadier før organismen får sine karakteristiske form og funksjon. ",
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
                children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "Hello" }] }],
              },
            ],
          },
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
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
              {
                text: "Fosterutviklingen starter når en eggcelle og en sædcelle smelter sammen ved befruktning, og omfatter utviklingen fram til klekking eller fødsel. Den befruktede eggcellen ",
              },
              { text: "zygoten", italic: true },
              {
                text: " gjennomgår flere utviklingsstadier før organismen får sine karakteristiske form og funksjon.",
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
                children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "Hello" }] }],
              },
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [{ text: "" }],
          },
        ],
      },
    ];
    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("Removing leading whitespace doesn't interfere with other elements", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
          {
            type: LIST_ELEMENT_TYPE,
            listType: "bulleted-list",
            data: {},
            children: [
              {
                type: LIST_ITEM_ELEMENT_TYPE,
                children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "Hello" }] }],
              },
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: " Fosterutviklingen starter når en eggcelle og en sædcelle smelter sammen ved befruktning, og omfatter utviklingen fram til klekking eller fødsel. Den befruktede eggcellen ",
              },
              { text: "zygoten", italic: true },
              {
                text: " gjennomgår flere utviklingsstadier før organismen får sine karakteristiske form og funksjon.",
              },
            ],
          },
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        ],
      },
    ];
    const expectedValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
          {
            type: LIST_ELEMENT_TYPE,
            listType: "bulleted-list",
            data: {},
            children: [
              {
                type: LIST_ITEM_ELEMENT_TYPE,
                children: [{ type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "Hello" }] }],
              },
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "Fosterutviklingen starter når en eggcelle og en sædcelle smelter sammen ved befruktning, og omfatter utviklingen fram til klekking eller fødsel. Den befruktede eggcellen ",
              },
              { text: "zygoten", italic: true },
              {
                text: " gjennomgår flere utviklingsstadier før organismen får sine karakteristiske form og funksjon.",
              },
            ],
          },
          { type: PARAGRAPH_ELEMENT_TYPE, children: [{ text: "" }] },
        ],
      },
    ];
    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });
});
