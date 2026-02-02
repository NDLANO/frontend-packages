/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { Meta, StoryFn } from "@storybook/react";
import { Portal } from "@ark-ui/react";
import {
  useEditorPopover,
  useListToolbarButton,
  useListToolbarButtonState,
  useMarkToolbarButton,
  useMarkToolbarButtonState,
} from "@ndla/editor-components";
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
import {
  Button,
  Heading,
  IconButton,
  OrderedList,
  PopoverContent,
  PopoverRootProvider,
  PopoverTitle,
  PopoverTrigger,
  UnOrderedList,
  type IconButtonProps,
} from "@ndla/primitives";
import { isKeyHotkey } from "is-hotkey";
import { useRef } from "react";
import { type Descendant, type EditorMarks } from "slate";
import { DOMEditor } from "slate-dom";
import { Editable, Slate, useSlate, type RenderElementProps } from "slate-react";
import type { ListType } from "./plugins/list/listTypes";
import { useCreateSlate } from "./editor/createSlate";
import { LoggerManager } from "./editor/logger/Logger";
import { breakPlugin } from "./plugins/break/breakPlugin";
import { softBreakPlugin } from "./plugins/break/softBreakPlugin";
import { headingPlugin } from "./plugins/heading/headingPlugin";
import { toggleHeading } from "./plugins/heading/transforms/toggleHeading";
import { inlineNavigationPlugin } from "./plugins/inlineNavigation/inlineNavigationPlugin";
import { linkPlugin } from "./plugins/link/linkPlugin";
import { type LinkElement } from "./plugins/link/linkTypes";
import { listPlugin } from "./plugins/list/listPlugin";
import { toggleList } from "./plugins/list/transforms/toggleList";
import { markPlugin } from "./plugins/mark/markPlugin";
import { marks } from "./plugins/mark/markTypes";
import { toggleMark } from "./plugins/mark/toggleMark";
import { paragraphPlugin } from "./plugins/paragraph/paragraphPlugin";
import { sectionPlugin } from "./plugins/section/sectionPlugin";

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
      { type: "heading", level: 2, children: [{ text: "A line of text in a paragraph." }] },
      { type: "heading", level: 3, children: [{ text: "A line of text in a paragraph." }] },
      {
        type: "paragraph",
        children: [
          {
            type: "link",
            children: [{ text: "A link" }],
            data: {
              href: "https://nrk.no",
              target: "_blank",
            },
          },
        ],
      },
      { type: "paragraph", children: [{ text: "A line of text in a paragraph." }] },
      { type: "paragraph", children: [{ text: "A line of text in a paragraph." }] },
      { type: "paragraph", children: [{ text: "A line of text in a paragraph." }] },
      { type: "paragraph", children: [{ text: "A line of text in a paragraph." }] },
    ],
  },
];

const configuredMarkPlugin = markPlugin.configure({
  shortcuts: {
    toggleBold: {
      keyCondition: isKeyHotkey("mod+b"),
      handler: (editor, event) => {
        event.preventDefault();
        toggleMark(editor, marks.strong);
        return false;
      },
    },
    toggleItalic: {
      keyCondition: isKeyHotkey("mod+i"),
      handler: (editor, event) => {
        event.preventDefault();
        toggleMark(editor, marks.em);
        return false;
      },
    },
  },
});

const configuredListPlugin = listPlugin.configure({
  shortcuts: {
    toggleNumberedList: {
      keyCondition: isKeyHotkey("mod+o"),
      handler: (editor, event, _, opts) => {
        event.preventDefault();
        toggleList(editor, "numbered-list", opts);
        return true;
      },
    },
    toggleBulletedList: {
      keyCondition: isKeyHotkey("mod+l"),
      handler: (editor, event, _, opts) => {
        event.preventDefault();
        toggleList(editor, "bulleted-list", opts);
        return true;
      },
    },
  },
});

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

interface LinkProps extends RenderElementProps {
  element: LinkElement;
}

const NewLink = ({ element, attributes, children }: LinkProps) => {
  const editor = useSlate();
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popover = useEditorPopover({
    initialFocusEl: () => ref.current,
    triggerRef,
  });

  return (
    <PopoverRootProvider value={popover} onExitComplete={() => DOMEditor.focus(editor)}>
      <PopoverTrigger asChild consumeCss ref={triggerRef}>
        <a {...attributes} href={element.data.href} target={element.data.target} tabIndex={0}>
          {children}
        </a>
      </PopoverTrigger>
      <Portal>
        <PopoverContent ref={ref}>
          <PopoverTitle>Hello</PopoverTitle>
          <div>
            <Button>Edit</Button>
            <Button>Delete</Button>
          </div>
        </PopoverContent>
      </Portal>
    </PopoverRootProvider>
  );
};

const ToolbarButtons = () => {
  const editor = useSlate();
  return (
    <>
      <IconButton
        size="small"
        variant="secondary"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => toggleHeading(editor, 2)}
      >
        H2
      </IconButton>
      <IconButton
        size="small"
        variant="secondary"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => toggleHeading(editor, 3)}
      >
        H3
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
  const editor = useCreateSlate({
    plugins: [
      inlineNavigationPlugin,
      sectionPlugin,
      headingPlugin,
      configuredMarkPlugin,
      configuredListPlugin,
      paragraphPlugin,
      linkPlugin,
      softBreakPlugin,
      breakPlugin,
    ],
    logger: new LoggerManager({ debug: true }),
  });
  return (
    <div className="ndla-article">
      <Slate editor={editor} initialValue={initialValue}>
        <ToolbarButtons></ToolbarButtons>
        <Editable
          onKeyDown={editor.onKeyDown}
          renderElement={({ element, children, attributes }) => {
            if (element.type === "section") {
              return <section {...attributes}>{children}</section>;
            } else if (element.type === "heading") {
              const El = `h${element.level}` as const;
              return (
                <Heading {...attributes} asChild consumeCss>
                  <El>{children}</El>
                </Heading>
              );
            } else if (element.type === "list" && element.listType === "numbered-list") {
              return <OrderedList {...attributes}>{children}</OrderedList>;
            } else if (element.type === "list" && element.listType === "letter-list") {
              return (
                <OrderedList variant="letters" {...attributes}>
                  {children}
                </OrderedList>
              );
            } else if (element.type === "br") {
              return (
                <div {...attributes} contentEditable={false}>
                  <br />
                  {children}
                </div>
              );
            } else if (element.type === "list") {
              return <UnOrderedList {...attributes}>{children}</UnOrderedList>;
            } else if (element.type === "list-item") {
              return <li {...attributes}>{children}</li>;
            } else if (element.type === "link") {
              return (
                <NewLink element={element} attributes={attributes}>
                  {children}
                </NewLink>
              );
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
    </div>
  );
};
