/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

export { Concept } from "./Concept/Concept";

export {
  ImageEmbed,
  getCrop,
  getFocalPoint,
  AudioEmbed,
  H5pEmbed,
  ExternalEmbed,
  IframeEmbed,
  FootnoteEmbed,
  BrightcoveEmbed,
  ContentLinkEmbed,
  RelatedContentEmbed,
  ConceptEmbed,
  UnknownEmbed,
  InlineConcept,
  BlockConcept,
  UuDisclaimerEmbed,
  CopyrightEmbed,
  CodeEmbed,
  InlineTriggerButton,
  ConceptInlineTriggerButton,
  EmbedWrapper,
} from "./Embed";

export type { EmbedWrapperProps, EmbedWrapperVariantProps } from "./Embed";

export { LicenseLink, EmbedByline } from "./LicenseByline";

export {
  ArticleByline,
  ArticleBylineAccordionItem,
  ArticleFootNotes,
  ArticleWrapper,
  Article,
  ArticleFooter,
  ArticleHeader,
  ArticleContent,
  ArticleHGroup,
  ArticleTitle,
} from "./Article";

export { getPossiblyRelativeUrl } from "./utils/relativeUrl";

export { default as RelatedArticleList, RelatedArticle } from "./RelatedArticleList";

export { FileListEmbed, File, PdfFile, FileListItem, FileListElement, FileListWrapper } from "./FileList";

export { default as FactBox } from "./FactBox";

export type { ContentTypeHeroProps } from "./ContentTypeHero";
export { ContentTypeHero } from "./ContentTypeHero";

export { ResourceBox } from "./ResourceBox";

export { default as AudioPlayer } from "./AudioPlayer";

export { default as constants } from "./model";

export { default as messagesNB } from "./locale/messages-nb";
export { default as messagesNN } from "./locale/messages-nn";
export { default as messagesEN } from "./locale/messages-en";
export { default as messagesSE } from "./locale/messages-se";

export { default as Breadcrumb, HomeBreadcrumb } from "./Breadcrumb";
export type { SimpleBreadcrumbItem, IndexedBreadcrumbItem } from "./Breadcrumb";

export {
  formatNestedMessages,
  useTagsInputTranslations,
  useTagSelectorTranslations,
  useComboboxTranslations,
  usePaginationTranslations,
  useAudioSearchTranslations,
  useImageSearchTranslations,
  useVideoSearchTranslations,
  useDatePickerTranslations,
} from "./i18n";

export type { ContentTypeBadgeProps, StrictContentType, ContentType } from "./ContentTypeBadge/ContentTypeBadge";
export { ContentTypeBadge, contentTypeToBadgeVariantMap } from "./ContentTypeBadge/ContentTypeBadge";

export { ContentTypeBlockQuote } from "./ContentTypeBlockQuote/ContentTypeBlockQuote";
export { type ContentTypeBlockQuoteVariant } from "./ContentTypeBlockQuote/ContentTypeBlockQuote";

export { ContentTypeFramedContent } from "./ContentTypeFramedContent/ContentTypeFramedContent";
export { type ContentTypeFramedContentVariant } from "./ContentTypeFramedContent/ContentTypeFramedContent";

export { default as CopyParagraphButton } from "./CopyParagraphButton";

export type { TagSelectorControlProps, TagSelectorInputProps, TagSelectorRootProps } from "./TagSelector/TagSelector";

export {
  TagSelectorRoot,
  TagSelectorLabel,
  TagSelectorItemInput,
  TagSelectorTrigger,
  TagSelectorControl,
  TagSelectorClearTrigger,
  TagSelectorInputBase,
  TagSelectorInput,
} from "./TagSelector/TagSelector";

export { Pitch } from "./Pitch";
export { KeyFigure } from "./KeyFigure";
export { ContactBlock, contactBlockBackgrounds } from "./ContactBlock";
export type { ContactBlockBackground } from "./ContactBlock";
export type { HeartButtonType, CanonicalUrlFuncs, RenderContext } from "./Embed";
export { CampaignBlock } from "./CampaignBlock";
export { Grid, GridParallaxItem } from "./Grid";
export type { GridType } from "./Grid";

export { Gloss, GlossExample } from "./Gloss";

export { LinkBlock, LinkBlockSection } from "./LinkBlock";

export type { Article as ArticleType, HeadingLevel } from "./types";

export { CodeBlock, codeLanguageOptions } from "./CodeBlock";

export { ZendeskButton } from "./ZendeskButton/ZendeskButton";

export type { ZendeskButtonProps } from "./ZendeskButton/ZendeskButton";

export { licenseAttributes } from "./utils/licenseAttributes";
