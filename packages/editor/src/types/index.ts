/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { BaseEditor, Element } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";
import type { LinkElement } from "../plugins/link/linkTypes";
import type { ParagraphElement } from "../plugins/paragraph/paragraphTypes";
import type { CustomText } from "../plugins/mark/markTypes";
import type { KeyboardEventHandler } from "react";
import type { BreakElement } from "../plugins/break/breakTypes";
import type { ListElement, ListItemElement } from "../plugins/list/listTypes";
import type { SectionElement } from "../plugins/section/sectionTypes";
import type { LoggerManager } from "../editor/logger/Logger";
import type { HeadingElement } from "../plugins/heading/headingTypes";

export interface CustomEditor {
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  logger: LoggerManager;
  debug?: boolean;
  pluginOptions: Map<string, unknown>;
  getPluginOptions: <T>(pluginName: string) => T | undefined;
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
    | HeadingElement;
  Text: CustomText;
}

declare module "slate" {
  export type BlockElement = ParagraphElement | HeadingElement;
  export type BlockElementType = BlockElement["type"];
  interface CustomTypes extends SlateEditor {}
}
