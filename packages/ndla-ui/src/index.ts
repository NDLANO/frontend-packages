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

export { default as ImageEmbed, getCrop, getFocalPoint } from "./Embed/ImageEmbed";
export { InlineTriggerButton } from "./Embed/InlineTriggerButton";
export { default as AudioEmbed } from "./Embed/AudioEmbed";
export { default as H5pEmbed } from "./Embed/H5pEmbed";
export { default as ExternalEmbed } from "./Embed/ExternalEmbed";
export { default as IframeEmbed } from "./Embed/IframeEmbed";
export { default as FootnoteEmbed } from "./Embed/FootnoteEmbed";
export { default as BrightcoveEmbed } from "./Embed/BrightcoveEmbed";
export { default as ContentLinkEmbed } from "./Embed/ContentLinkEmbed";
export { default as RelatedContentEmbed } from "./Embed/RelatedContentEmbed";
export { ConceptEmbed, InlineConcept, BlockConcept } from "./Embed/ConceptEmbed";
export { default as UnknownEmbed } from "./Embed/UnknownEmbed";
export { default as UuDisclaimerEmbed } from "./Embed/UuDisclaimerEmbed";
export { default as CopyrightEmbed } from "./Embed/CopyrightEmbed";
export { default as CodeEmbed } from "./Embed/CodeEmbed";
export { ConceptInlineTriggerButton } from "./Embed/ConceptInlineTriggerButton";
export { EmbedWrapper } from "./Embed/EmbedWrapper";
export type { EmbedWrapperVariantProps, EmbedWrapperProps } from "./Embed/EmbedWrapper";
export type { HeartButtonType, CanonicalUrlFuncs, RenderContext } from "./Embed/types";

export { LicenseLink } from "./LicenseByline/LicenseLink";
export { EmbedByline } from "./LicenseByline/EmbedByline";

export {
  ArticleWrapper,
  Article,
  ArticleFooter,
  ArticleHeader,
  ArticleContent,
  ArticleHGroup,
  ArticleTitle,
} from "./Article/Article";

export { ArticleByline, ArticleBylineAccordionItem } from "./Article/ArticleByline";
export { ArticleFootNotes } from "./Article/ArticleFootNotes";

export { getPossiblyRelativeUrl } from "./utils/relativeUrl";

export { RelatedArticleList, RelatedArticle } from "./RelatedArticleList/RelatedArticleList";

export { FileListEmbed, FileListItem, FileListWrapper } from "./FileList/FileList";
export { File, FileListElement } from "./FileList/File";
export { PdfFile } from "./FileList/PdfFile";

export { default as FactBox } from "./FactBox/FactBox";

export { ResourceBox } from "./ResourceBox/ResourceBox";

export { default as AudioPlayer } from "./AudioPlayer/AudioPlayer";

export { default as constants } from "./model";

export { default as messagesNB } from "./locale/messages-nb";
export { default as messagesNN } from "./locale/messages-nn";
export { default as messagesEN } from "./locale/messages-en";
export { default as messagesSE } from "./locale/messages-se";

export { default as Breadcrumb } from "./Breadcrumb/Breadcrumb";
export { default as HomeBreadcrumb } from "./Breadcrumb/HomeBreadcrumb";
export type { SimpleBreadcrumbItem, IndexedBreadcrumbItem } from "./Breadcrumb/BreadcrumbItem";

export { formatNestedMessages } from "./i18n/formatNestedMessages";
export {
  useTagsInputTranslations,
  useTagSelectorTranslations,
  useComboboxTranslations,
  usePaginationTranslations,
  useAudioSearchTranslations,
  useImageSearchTranslations,
  useVideoSearchTranslations,
  useDatePickerTranslations,
} from "./i18n/useComponentTranslations";

export type { ContentTypeBadgeProps, StrictContentType, ContentType } from "./ContentTypeBadge/ContentTypeBadge";
export { ContentTypeBadge, contentTypeToBadgeVariantMap } from "./ContentTypeBadge/ContentTypeBadge";

export { default as CopyParagraphButton } from "./CopyParagraphButton/CopyParagraphButton";

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

export { Pitch } from "./Pitch/Pitch";
export { default as KeyFigure } from "./KeyFigure/KeyFigure";
export { ContactBlock, contactBlockBackgrounds } from "./ContactBlock/ContactBlock";
export type { ContactBlockBackground } from "./ContactBlock/ContactBlock";
export { default as CampaignBlock } from "./CampaignBlock/CampaignBlock";
export { Grid } from "./Grid/Grid";
export { GridParallaxItem } from "./Grid/GridParallaxItem";
export type { GridProps as GridType } from "./Grid/Grid";

export { default as Gloss } from "./Gloss/Gloss";
export { default as GlossExample } from "./Gloss/GlossExample";

export { default as LinkBlock } from "./LinkBlock/LinkBlock";
export { default as LinkBlockSection } from "./LinkBlock/LinkBlockSection";

export type { Article as ArticleType, HeadingLevel } from "./types";

export { default as CodeBlock } from "./CodeBlock/CodeBlock";
export { codeLanguageOptions } from "./CodeBlock/codeLanguageOptions";

export { ZendeskButton } from "./ZendeskButton/ZendeskButton";

export type { ZendeskButtonProps } from "./ZendeskButton/ZendeskButton";

export { licenseAttributes } from "./utils/licenseAttributes";
