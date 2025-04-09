/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Descendant } from "slate";
import { SPAN_ELEMENT_TYPE } from "../spanTypes";
import { spanPlugin } from "../spanPlugin";
import { sectionPlugin } from "../../section/sectionPlugin";
import { paragraphPlugin } from "../../paragraph/paragraphPlugin";
import { createSlate } from "../../../editor/createSlate";
import { SECTION_ELEMENT_TYPE } from "../../section/sectionTypes";
import { PARAGRAPH_ELEMENT_TYPE } from "../../paragraph/paragraphTypes";

const editor = createSlate({ plugins: [sectionPlugin, paragraphPlugin, spanPlugin] });

describe("span normalizer tests", () => {
  test("Span with language remains after normalization", () => {
    const editorValue: Descendant[] = [
      {
        type: SECTION_ELEMENT_TYPE,
        children: [
          {
            type: PARAGRAPH_ELEMENT_TYPE,
            children: [
              { text: "" },
              {
                type: SPAN_ELEMENT_TYPE,
                data: { lang: "en" },
                children: [{ text: "test" }],
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
                type: SPAN_ELEMENT_TYPE,
                data: { lang: "en" },
                children: [{ text: "test" }],
              },
              { text: "" },
            ],
          },
        ],
      },
    ];

    editor.reinitialize({ value: editorValue, shouldNormalize: true });
    expect(editor.children).toEqual(expectedValue);
  });
});
