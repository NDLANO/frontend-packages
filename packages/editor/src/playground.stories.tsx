/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { type Descendant } from "slate";
import { Editable, Slate } from "slate-react";
import type { Meta, StoryFn } from "@storybook/react";
import { OrderedList, UnOrderedList } from "@ndla/primitives";
import { listPlugin } from "./plugins/list/listPlugin";
import { markPlugin } from "./plugins/mark/markPlugin";
import { softBreakPlugin } from "./plugins/softBreak/softBreakPlugin";
import { createSlate } from "./utils/createSlate";

export default {
  title: "Editor/Playground",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const initialValue: Descendant[] = [
  {
    type: "section",
    children: [
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
      // {
      //   type: "list",
      //   listType: "numbered-list",
      //   data: {},
      //   children: [
      //     { type: "list-item", children: [{ type: "paragraph", children: [{ text: "Item 1" }] }] },
      //     {
      //       type: "list-item",
      //       children: [
      //         {
      //           type: "paragraph",
      //           children: [{ text: "Item 2" }],
      //         },
      //         {
      //           type: "list",
      //           data: {},
      //           listType: "numbered-list",
      //           children: [{ type: "list-item", children: [{ type: "paragraph", children: [{ text: "nested item" }] }] }],
      //         },
      //       ],
      //     },
      //     // { type: "list-item", children: [{ type: "paragraph", children: [{ text: "Item 3" }] }] },
      //   ],
      // },
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
    ],
  },
];

export const EditorPlayground: StoryFn = () => {
  const [editor] = useState(() => createSlate({ plugins: [markPlugin, listPlugin, softBreakPlugin] }));
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        onKeyDown={editor.onKeyDown}
        renderElement={({ element, children, attributes }) => {
          if (element.type === "list" && element.listType === "numbered-list") {
            return <OrderedList {...attributes}>{children}</OrderedList>;
          } else if (element.type === "list") {
            return <UnOrderedList {...attributes}>{children}</UnOrderedList>;
          } else if (element.type === "list-item") {
            return <li {...attributes}>{children}</li>;
          } else if (element.type === "section") {
            return <section {...attributes}>{children}</section>;
          }
          return <p {...attributes}>{children}</p>;
        }}
        renderLeaf={({ leaf, children, attributes }) => {
          let ret;
          if (leaf.bold) {
            ret = <strong {...attributes}>{ret || children}</strong>;
          }
          if (leaf.italic) {
            ret = <em {...attributes}>{ret || children}</em>;
          }
          if (leaf.sup) {
            ret = <sup {...attributes}>{ret || children}</sup>;
          }
          if (leaf.sub) {
            ret = <sub {...attributes}>{ret || children}</sub>;
          }
          if (leaf.underlined) {
            ret = <u {...attributes}>{ret || children}</u>;
          }
          if (leaf.code) {
            ret = <code {...attributes}>{ret || children}</code>;
          }
          if (ret) {
            return ret;
          }
          return <span {...attributes}>{children}</span>;
        }}
      />
    </Slate>
  );
};
