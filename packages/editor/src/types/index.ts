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
import type { ReinitializeOptions } from "../editor/createSlate";
import type { LoggerManager } from "../editor/logger/Logger";
import type { BreakElement } from "../plugins/break/breakTypes";
import type { HeadingElement } from "../plugins/heading/headingTypes";
import type { LinkElement } from "../plugins/link/linkTypes";
import type { ListElement, ListItemElement } from "../plugins/list/listTypes";
import type { CustomText, MarkType } from "../plugins/mark/markTypes";
import type { NoopElement } from "../plugins/noop/noopTypes";
import type { ParagraphElement } from "../plugins/paragraph/paragraphTypes";
import type { SectionElement } from "../plugins/section/sectionTypes";
import type { SpanElement } from "../plugins/span/spanTypes";

export interface CustomEditor {
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  logger: LoggerManager;
  debug?: boolean;
  pluginOptions: Map<string, unknown>;
  getPluginOptions: <T>(pluginName: string) => T | undefined;
  hasVoids: (element: Element) => boolean;
  renderElement?: (props: RenderElementProps) => JSX.Element | undefined;
  renderLeaf?: (props: RenderLeafProps) => JSX.Element | undefined;
  reinitialize: (options: ReinitializeOptions) => void;
  supportsElement: (element: Element) => boolean;
  supportsMark: (mark: MarkType | MarkType[]) => boolean;
}

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
    | NoopElement
    | SpanElement;
  Text: CustomText;
}

declare module "slate" {
  export type BlockElement = ParagraphElement | HeadingElement;
  export type BlockElementType = BlockElement["type"];
  export type ElementType = Element["type"];
  interface CustomTypes extends SlateEditor {}
}
