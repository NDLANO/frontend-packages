/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { BaseEditor, Descendant } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";
import type { LinkElement } from "../plugins/link/linkTypes";
import type { ParagraphElement } from "../plugins/paragraph/paragraphTypes";
import type { CustomText } from "../plugins/mark/markTypes";
import type { KeyboardEventHandler } from "react";
import type { SoftBreakElement } from "../plugins/softBreak/softBreakTypes";
import type { ListElement, ListItemElement } from "../plugins/list/listTypes";
import type { SectionElement } from "../plugins/section/sectionTypes";

interface CustomEditor {
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
}

declare module "slate" {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor & CustomEditor;
    Element: ParagraphElement | LinkElement | SoftBreakElement | ListItemElement | ListElement | SectionElement;
    Text: CustomText;
  }
}

export interface SlateSerializer {
  deserialize: (el: HTMLElement, children: Descendant[]) => Descendant | Descendant[] | undefined;
  serialize: (node: Descendant, children: string | undefined) => string | undefined;
}
