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
  SlateRenderer,
  ElementRenderer,
  LeafRenderer,
  CreateSlateElementRenderer,
  CreateSlateLeafRenderer,
  PluginReturnType,
} from "./core";
export { mergeOptions } from "./core/mergeOptions";

export { createSlate, withPlugins, withRenderers } from "./editor/createSlate";
export { withLogger } from "./editor/logger/withLogger";
export { LoggerManager, type LoggerOptions, loggerManager } from "./editor/logger/Logger";

export { breakPlugin } from "./plugins/break/breakPlugin";
export { breakSerializer } from "./plugins/break/breakSerializer";
export { BREAK_ELEMENT_TYPE, BREAK_PLUGIN, SOFT_BREAK_PLUGIN } from "./plugins/break/breakTypes";
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
export { HEADING_ELEMENT_TYPE, HEADING_PLUGIN } from "./plugins/heading/headingTypes";
export { isHeadingElement } from "./plugins/heading/queries/headingQueries";
export { toggleHeading } from "./plugins/heading/transforms/toggleHeading";

export { inlineNavigationPlugin } from "./plugins/inlineNavigation/inlineNavigationPlugin";
export { INLINE_NAVIGATION_PLUGIN } from "./plugins/inlineNavigation/inlineNavigationTypes";

export { linkPlugin } from "./plugins/link/linkPlugin";
export { linkSerializer } from "./plugins/link/linkSerializer";
export type { LinkElement, LinkElementType, LinkEmbedData } from "./plugins/link/linkTypes";
export { LINK_ELEMENT_TYPE, LINK_PLUGIN } from "./plugins/link/linkTypes";
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
export { LIST_ELEMENT_TYPE, LIST_ITEM_ELEMENT_TYPE, LIST_TYPES, LIST_PLUGIN } from "./plugins/list/listTypes";
export { isListElement, isListItemElement } from "./plugins/list/queries/listElementQueries";
export { toggleList } from "./plugins/list/transforms/toggleList";
export { listOnBackspace } from "./plugins/list/handlers/listOnBackspace";
export { listOnEnter } from "./plugins/list/handlers/listOnEnter";
export { listOnTab } from "./plugins/list/handlers/listOnTab";

export { markPlugin } from "./plugins/mark/markPlugin";
export { markSerializer } from "./plugins/mark/markSerializer";
export type { CustomText, MarkType } from "./plugins/mark/markTypes";
export { marks, MARK_PLUGIN } from "./plugins/mark/markTypes";
export { toggleMark } from "./plugins/mark/toggleMark";

export { isNoopElement } from "./plugins/noop/queries/noopQueries";
export { noopPlugin } from "./plugins/noop/noopPlugin";
export { noopSerializer } from "./plugins/noop/noopSerializer";
export { NOOP_ELEMENT_TYPE, NOOP_PLUGIN } from "./plugins/noop/noopTypes";
export type { NoopElement, NoopPluginOptions, NoopElementType } from "./plugins/noop/noopTypes";

export { paragraphPlugin } from "./plugins/paragraph/paragraphPlugin";
export { paragraphSerializer } from "./plugins/paragraph/paragraphSerializer";
export { PARAGRAPH_ELEMENT_TYPE, PARAGRAPH_PLUGIN } from "./plugins/paragraph/paragraphTypes";
export type {
  ParagraphElement,
  ParagraphElementType,
  ParagraphPluginOptions,
} from "./plugins/paragraph/paragraphTypes";
export { isParagraphElement } from "./plugins/paragraph/queries/paragraphElementQueries";

export { sectionPlugin } from "./plugins/section/sectionPlugin";
export { sectionSerializer } from "./plugins/section/sectionSerializer";
export { SECTION_ELEMENT_TYPE, SECTION_PLUGIN } from "./plugins/section/sectionTypes";
export type { SectionElement, SectionElementType, SectionPluginOptions } from "./plugins/section/sectionTypes";
export { isSectionElement } from "./plugins/section/queries/sectionQueries";

export { getCurrentBlock } from "./queries/getCurrentBlock";
export { hasNodeOfType } from "./queries/hasNodeOfType";

export {
  parseElementAttributes,
  createDataAttributes,
  stringifyAttributes,
  createHtmlTag,
} from "./serialization/html/htmlSerializationHelpers";
export { serializeToHtml } from "./serialization/html/serializeToHtml";
export { deserializeFromHtml } from "./serialization/html/deserializeFromHtml";

export { toggleBlock } from "./transforms/toggleBlock";

export type { SlateEditor, CustomEditor, ElementType } from "./types";

export { isElementOfType } from "./utils/isElementType";
export { isEmptyTextNode } from "./utils/isEmptyTextNode";
