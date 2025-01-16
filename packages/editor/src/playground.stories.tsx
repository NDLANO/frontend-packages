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
import { markPlugin } from "./plugins/mark/markPlugin";
import { softBreakPlugin } from "./plugins/softBreak/softBreakPlugin";
import { createSlate } from "./utils/createSlate";

export default {
  title: "Welcome",
  parameters: {
    layout: "fullscreen",
  },
} as Meta;

const initialValue: Descendant[] = [
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
  {
    type: "paragraph",
    children: [{ text: "A line of text in a paragraph." }],
  },
];

export const EditorPlayground: StoryFn = () => {
  const [editor] = useState(() => createSlate({ plugins: [markPlugin, softBreakPlugin] }));
  return (
    <Slate editor={editor} initialValue={initialValue}>
      <Editable
        onKeyDown={editor.onKeyDown}
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
