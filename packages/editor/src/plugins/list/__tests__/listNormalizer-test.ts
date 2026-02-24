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
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";
import { sectionPlugin } from "../../section/sectionPlugin";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { listPlugin } from "../listPlugin";
import { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE } from "../listTypes";

const editor = createSlate({ plugins: [sectionPlugin, listPlugin, paragraphPlugin] });

describe("list normalizer tests", () => {
  test("Unwrap list item not placed inside list", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
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
            children: [{ text: "abc" }],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("If listItem contains text, wrap it in paragraph.", () => {
    const editorValue: Descendant[] = [
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
                    text: "abc",
                  },
                ],
              },
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
              {
                text: "",
              },
            ],
          },
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
                ],
              },
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("If first child of list item is not a paragraph or heading, insert an empty paragraph.", () => {
    const editorValue: Descendant[] = [
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
                                text: "",
                              },
                            ],
                          },
                        ],
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

    const expectedValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
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
                        text: "",
                      },
                    ],
                  },
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
                                text: "",
                              },
                            ],
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
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("Handle changing list-items marked for listType change.", () => {
    const editorValue: Descendant[] = [
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
                    type: LIST_ELEMENT_TYPE,
                    listType: "letter-list",
                    data: {},
                    children: [
                      {
                        type: LIST_ITEM_ELEMENT_TYPE,
                        changeTo: "numbered-list",
                        children: [
                          {
                            type: PARAGRAPH_ELEMENT_TYPE,
                            children: [
                              {
                                text: "abc",
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
              {
                text: "",
              },
            ],
          },
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
                        text: "",
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
                                text: "abc",
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
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
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("If list is empty, remove it", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: LIST_ELEMENT_TYPE,
            listType: "numbered-list",
            data: {},
            children: [],
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

  test("Force all elements in list to be list-item", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: LIST_ELEMENT_TYPE,
            listType: "numbered-list",
            data: {},
            children: [{ text: "abc" }],
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
              {
                text: "",
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
                        text: "abc",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });

  test("Merge sibling lists if identical type", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
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
                ],
              },
            ],
          },
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
                        text: "def",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
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
              {
                text: "",
              },
            ],
          },
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
                ],
              },
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
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              {
                text: "",
              },
            ],
          },
        ],
      },
    ];
    editor.children = editorValue;
    editor.normalize({ force: true });
    expect(editor.children).toEqual(expectedValue);
  });
});
