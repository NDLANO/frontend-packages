/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { type Descendant, type EditorMarks } from "slate";
import { Editable, Slate, useSlate } from "slate-react";
import type { Meta, StoryFn } from "@storybook/react";
import {
  Bold,
  CodeView,
  Italic,
  ListAlphabetical,
  ListOrdered,
  ListUnordered,
  Subscript,
  Superscript,
} from "@ndla/icons";
import { Heading, IconButton, OrderedList, UnOrderedList, type IconButtonProps } from "@ndla/primitives";
import { LoggerManager } from "./editor/logger/Logger";
import { headingPlugin } from "./plugins/heading/headingPlugin";
import { useListToolbarButton, useListToolbarButtonState } from "./plugins/list/hooks/useListToolbarButton";
import { listPlugin } from "./plugins/list/listPlugin";
import type { ListType } from "./plugins/list/listTypes";
import { useMarkToolbarButton, useMarkToolbarButtonState } from "./plugins/mark/hooks/useMarkToolbarButton";
import { markPlugin } from "./plugins/mark/markPlugin";
import { sectionPlugin } from "./plugins/section/sectionPlugin";
import { softBreakPlugin } from "./plugins/softBreak/softBreakPlugin";
import { toggleBlock } from "./transforms/toggleBlock";
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
        type: "heading",
        level: 1,
        children: [{ text: "Heading 1" }],
      },
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
      {
        type: "paragraph",
        children: [{ text: "A line of text in a paragraph." }],
      },
    ],
  },
];

interface ListToolbarButtonProps extends IconButtonProps {
  listType: ListType;
}

const ListToolbarButton = ({ listType, ...rest }: ListToolbarButtonProps) => {
  const state = useListToolbarButtonState({ type: listType });
  const toolbarButton = useListToolbarButton(state);
  return <IconButton size="small" variant="secondary" {...toolbarButton.props} {...rest} />;
};

interface MarkToolbarButtonProps extends IconButtonProps {
  mark: keyof EditorMarks;
}

const MarkToolbarButton = ({ mark, ...rest }: MarkToolbarButtonProps) => {
  const state = useMarkToolbarButtonState({ type: mark });
  const toolbarButton = useMarkToolbarButton(state);
  return <IconButton size="small" variant="secondary" {...toolbarButton.props} {...rest} />;
};

export const ToolbarButtons = () => {
  const editor = useSlate();
  return (
    <>
      <IconButton size="small" variant="secondary" onClick={() => toggleBlock(editor, "heading", { level: 2 })}>
        H2
      </IconButton>
      <MarkToolbarButton mark="bold">
        <Bold />
      </MarkToolbarButton>
      <MarkToolbarButton mark="italic">
        <Italic />
      </MarkToolbarButton>
      <MarkToolbarButton mark="code">
        <CodeView />
      </MarkToolbarButton>
      <MarkToolbarButton mark="sup">
        <Superscript />
      </MarkToolbarButton>
      <MarkToolbarButton mark="sub">
        <Subscript />
      </MarkToolbarButton>
      <ListToolbarButton listType="bulleted-list">
        <ListUnordered />
      </ListToolbarButton>
      <ListToolbarButton listType="numbered-list">
        <ListOrdered />
      </ListToolbarButton>
      <ListToolbarButton listType="letter-list">
        <ListAlphabetical />
      </ListToolbarButton>
    </>
  );
};

export const EditorPlayground: StoryFn = () => {
  const [editor] = useState(() =>
    createSlate({
      plugins: [markPlugin, listPlugin, softBreakPlugin, sectionPlugin, headingPlugin],
      logger: new LoggerManager({ debug: false }),
    }),
  );
  return (
    <Slate editor={editor} initialValue={initialValue} onValueChange={console.log}>
      <ToolbarButtons></ToolbarButtons>
      <Editable
        onKeyDown={editor.onKeyDown}
        renderElement={({ element, children, attributes }) => {
          if (element.type === "heading") {
            const El = `h${element.level}` as const;
            return (
              <Heading {...attributes} asChild consumeCss>
                <El>{children}</El>
              </Heading>
            );
          }
          if (element.type === "list" && element.listType === "numbered-list") {
            return <OrderedList {...attributes}>{children}</OrderedList>;
          } else if (element.type === "list" && element.listType === "letter-list") {
            return (
              <OrderedList variant="letters" {...attributes}>
                {children}
              </OrderedList>
            );
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
