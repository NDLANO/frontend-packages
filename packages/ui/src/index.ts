/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export { Concept } from "./Concept/Concept";

export { ImageEmbed, getCrop, getFocalPoint } from "./Embed/ImageEmbed";
export { InlineTriggerButton } from "./Embed/InlineTriggerButton";
export { AudioEmbed } from "./Embed/AudioEmbed";
export { H5pEmbed } from "./Embed/H5pEmbed";
export { ExternalEmbed } from "./Embed/ExternalEmbed";
export { IframeEmbed } from "./Embed/IframeEmbed";
export { FootnoteEmbed } from "./Embed/FootnoteEmbed";
export { BrightcoveEmbed } from "./Embed/BrightcoveEmbed";
export { ContentLinkEmbed } from "./Embed/ContentLinkEmbed";
export { RelatedContentEmbed } from "./Embed/RelatedContentEmbed";
export { ConceptEmbed, InlineConcept, BlockConcept } from "./Embed/ConceptEmbed";
export { UnknownEmbed } from "./Embed/UnknownEmbed";
export { UuDisclaimerEmbed } from "./Embed/UuDisclaimerEmbed";
export { CopyrightEmbed } from "./Embed/CopyrightEmbed";
export { CodeEmbed } from "./Embed/CodeEmbed";
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
export { BadgesContainer } from "./Article/BadgesContainer";

export { ArticleByline, ArticleBylineAccordionItem } from "./Article/ArticleByline";
export { ArticleFootNotes } from "./Article/ArticleFootNotes";

export { getPossiblyRelativeUrl } from "./utils/relativeUrl";

export { RelatedArticleList, RelatedArticle } from "./RelatedArticleList/RelatedArticleList";

export { FileListEmbed, FileListItem, FileListWrapper } from "./FileList/FileList";
export { File, FileListElement } from "./FileList/File";
export { PdfFile } from "./FileList/PdfFile";

export { FactBox } from "./FactBox/FactBox";

export { ResourceBox } from "./ResourceBox/ResourceBox";

export { AudioPlayer } from "./AudioPlayer/AudioPlayer";

export { constants } from "./model";
export { contentTypes, contentTypeMapping, resourceEmbedTypeMapping } from "./model/ContentType";
export { subjectTypes } from "./model/SubjectTypes";
export { wordClass } from "./model/WordClass";
export { subjectCategories } from "./model/SubjectCategories";

export { default as messagesNB } from "./locale/messages-nb";
export { default as messagesNN } from "./locale/messages-nn";
export { default as messagesEN } from "./locale/messages-en";
export { default as messagesSE } from "./locale/messages-se";

export { Breadcrumb } from "./Breadcrumb/Breadcrumb";
export { HomeBreadcrumb } from "./Breadcrumb/HomeBreadcrumb";
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

export { AnchorHeading } from "./AnchorHeading/AnchorHeading";

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
export { KeyFigure } from "./KeyFigure/KeyFigure";
export { ContactBlock, contactBlockBackgrounds } from "./ContactBlock/ContactBlock";
export type { ContactBlockBackground } from "./ContactBlock/ContactBlock";
export { CampaignBlock } from "./CampaignBlock/CampaignBlock";
export { Grid, GridItem } from "./Grid/Grid";
export type { GridProps as GridType, GridItemProps } from "./Grid/Grid";

export { Gloss } from "./Gloss/Gloss";
export { GlossExample } from "./Gloss/GlossExample";

export { LinkBlock } from "./LinkBlock/LinkBlock";
export { LinkBlockSection } from "./LinkBlock/LinkBlockSection";

export type { Article as ArticleType, HeadingLevel } from "./types";

export { CodeBlock } from "./CodeBlock/CodeBlock";
export { codeLanguageOptions } from "./CodeBlock/codeLanguageOptions";

export { ZendeskButton } from "./ZendeskButton/ZendeskButton";

export type { ZendeskButtonProps } from "./ZendeskButton/ZendeskButton";

export { licenseAttributes } from "./utils/licenseAttributes";
