/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { KeyboardEventHandler, JSX } from "react";
import type { BaseEditor, Element } from "slate";
import type { HistoryEditor } from "slate-history";
import type { ReactEditor, RenderElementProps, RenderLeafProps } from "slate-react";
import type { LinkElement } from "../plugins/link/linkTypes";
import type { ParagraphElement } from "../plugins/paragraph/paragraphTypes";
import type { CustomText } from "../plugins/mark/markTypes";
import type { BreakElement } from "../plugins/break/breakTypes";
import type { ListElement, ListItemElement } from "../plugins/list/listTypes";
import type { SectionElement } from "../plugins/section/sectionTypes";
import type { LoggerManager } from "../editor/logger/Logger";
import type { HeadingElement } from "../plugins/heading/headingTypes";
import type { NoopElement } from "../plugins/noop/noopTypes";

export interface CustomEditor {
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  logger: LoggerManager;
  debug?: boolean;
  pluginOptions: Map<string, unknown>;
  getPluginOptions: <T>(pluginName: string) => T | undefined;
  hasVoids: (element: Element) => boolean;
  renderElement?: (props: RenderElementProps) => JSX.Element | undefined;
  renderLeaf?: (props: RenderLeafProps) => JSX.Element | undefined;
}

export type ElementType = Element["type"];

export interface SlateEditor {
  Editor: BaseEditor & ReactEditor & HistoryEditor & CustomEditor;
  Element:
    | ParagraphElement
    | LinkElement
    | BreakElement
    | ListItemElement
    | ListElement
    | SectionElement
    | HeadingElement
    | NoopElement;
  Text: CustomText;
}

declare module "slate" {
  export type BlockElement = ParagraphElement | HeadingElement;
  export type BlockElementType = BlockElement["type"];
  export type ElementType = Element["type"];
  interface CustomTypes extends SlateEditor {}
}
