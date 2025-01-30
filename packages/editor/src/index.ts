/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export { createPlugin } from "./core/createPlugin";
export { createSerializer } from "./core/createSerializer";
export type {
  ShortcutHandler,
  Logger,
  Shortcut,
  PluginConfiguration,
  ConfigurationOption,
  MappedConfigurationOption,
  SlatePlugin,
  SlateSerializer,
} from "./core";
export { mergeOptions } from "./core/mergeOptions";

export { createSlate, withPlugins } from "./editor/createSlate";
export { withLogger } from "./editor/logger/withLogger";
export { LoggerManager, type LoggerOptions, loggerManager } from "./editor/logger/Logger";

export { useEditorPopover } from "./hooks/useEditorPopover";

export { breakPlugin } from "./plugins/break/breakPlugin";
export { breakSerializer } from "./plugins/break/breakSerializer";
export { BREAK_ELEMENT_TYPE } from "./plugins/break/breakTypes";
export type {
  BreakElementType,
  BreakElement,
  BreakPluginOptions,
  BreakSerializerOptions,
} from "./plugins/break/breakTypes";
export { isBreakElement } from "./plugins/break/queries/breakQueries";
export { softBreakPlugin } from "./plugins/break/softBreakPlugin";

export { headingPlugin } from "./plugins/heading/headingPlugin";
export { headingSerializer } from "./plugins/heading/headingSerializer";
export type { HeadingElement, HeadingElementType } from "./plugins/heading/headingTypes";
export { HEADING_ELEMENT_TYPE } from "./plugins/heading/headingTypes";
export { isHeadingElement } from "./plugins/heading/queries/headingQueries";
export { toggleHeading } from "./plugins/heading/transforms/toggleHeading";

export { linkPlugin } from "./plugins/link/linkPlugin";
export { linkSerializer } from "./plugins/link/linkSerializer";
export type { LinkElement, LinkElementType, LinkEmbedData } from "./plugins/link/linkTypes";
export { LINK_ELEMENT_TYPE } from "./plugins/link/linkTypes";
export { isLinkElement } from "./plugins/link/queries/linkQueries";

export { listPlugin } from "./plugins/list/listPlugin";
export { defaultListBlock, defaultListItemBlock } from "./plugins/list/listBlocks";
export { listSerializer } from "./plugins/list/listSerializer";
export type {
  ListElementType,
  ListItemElementType,
  ListType,
  ListElement,
  ListItemElement,
  ListPluginOptions,
  ListSerializerOptions,
} from "./plugins/list/listTypes";
export { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE, LIST_TYPES } from "./plugins/list/listTypes";
export { isListElement, isListItemElement } from "./plugins/list/queries/listElementQueries";
export { toggleList } from "./plugins/list/transforms/toggleList";
export { useListToolbarButton } from "./plugins/list/hooks/useListToolbarButton";
export { listOnBackspace } from "./plugins/list/handlers/listOnBackspace";
export { listOnEnter } from "./plugins/list/handlers/listOnEnter";
export { listOnTab } from "./plugins/list/handlers/listOnTab";

export { markPlugin } from "./plugins/mark/markPlugin";
export { markSerializer } from "./plugins/mark/markSerializer";
export type { CustomText, MarkType } from "./plugins/mark/markTypes";
export { marks } from "./plugins/mark/markTypes";
export { toggleMark } from "./plugins/mark/toggleMark";
export { useMarkToolbarButton } from "./plugins/mark/hooks/useMarkToolbarButton";

export { paragraphPlugin } from "./plugins/paragraph/paragraphPlugin";
export { paragraphSerializer } from "./plugins/paragraph/paragraphSerializer";
export { PARAGRAPH_ELEMENT_TYPE } from "./plugins/paragraph/paragraphTypes";
export type {
  ParagraphElement,
  ParagraphElementType,
  ParagraphPluginOptions,
} from "./plugins/paragraph/paragraphTypes";

export { sectionPlugin } from "./plugins/section/sectionPlugin";
export { sectionSerializer } from "./plugins/section/sectionSerializer";
export { SECTION_ELEMENT_TYPE } from "./plugins/section/sectionTypes";
export type { SectionElement, SectionElementType, SectionPluginOptions } from "./plugins/section/sectionTypes";
export { isSectionElement } from "./plugins/section/queries/sectionQueries";

export { getCurrentBlock } from "./queries/getCurrentBlock";
export { getEditorAncestors } from "./queries/getEditorAncestors";
export { hasNodeOfType } from "./queries/hasNodeOfType";

export {
  parseElementAttributes,
  createDataAttributes,
  stringifyAttributes,
  createHtmlTag,
} from "./serialization/html/htmlSerializationHelpers";
export { serializeToHtml } from "./serialization/html/serializeToHtml";

export { toggleBlock } from "./transforms/toggleBlock";

export type { SlateEditor, CustomEditor, ElementType, BlockElementType, BlockElement } from "./types";

export { isElementOfType } from "./utils/isElementType";
export { isEmptyTextNode } from "./utils/isEmptyTextNode";
