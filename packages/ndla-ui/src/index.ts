/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

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
  ConceptListEmbed,
  UnknownEmbed,
  InlineConcept,
  BlockConcept,
  UuDisclaimerEmbed,
  CopyrightEmbed,
  CodeEmbed,
} from "./Embed";

export { LicenseLink, EmbedByline } from "./LicenseByline";

export {
  ArticleByline,
  ArticleFootNotes,
  ArticleWrapper,
  Article,
  ArticleParagraph,
  ArticleFooter,
  ArticleHeader,
  ArticleContent,
} from "./Article";

export { getPossiblyRelativeUrl } from "./utils/relativeUrl";

export { default as ContentLoader } from "./ContentLoader";

export { default as RelatedArticleList, RelatedArticle } from "./RelatedArticleList";

export { ErrorResourceAccessDenied, default as ErrorMessage } from "./ErrorMessage";

export { FileListEmbed, File, PdfFile, FileListItem, FileListElement } from "./FileList";

export { default as FactBox } from "./FactBox";

export type { ContentTypeHeroProps } from "./ContentTypeHero";
export { ContentTypeHero } from "./ContentTypeHero";

export { default as resourceTypeColor } from "./utils/resourceTypeColor";

export { ResourceBox } from "./ResourceBox";

export { default as AudioPlayer } from "./AudioPlayer";

export { default as constants } from "./model";

export { default as messagesNB } from "./locale/messages-nb";
export { default as messagesNN } from "./locale/messages-nn";
export { default as messagesEN } from "./locale/messages-en";
export { default as messagesSE } from "./locale/messages-se";
export { default as messagesSMA } from "./locale/messages-sma";

export { default as Breadcrumb, HomeBreadcrumb } from "./Breadcrumb";
export type { SimpleBreadcrumbItem, IndexedBreadcrumbItem } from "./Breadcrumb";

export {
  i18nInstance,
  formatNestedMessages,
  useTagsInputTranslations,
  useTagSelectorTranslations,
  useComboboxTranslations,
  usePaginationTranslations,
} from "./i18n";

export { default as LayoutItem, OneColumn, PageContainer } from "./Layout";

export {
  default as ContentTypeBadge,
  SubjectMaterialBadge,
  TasksAndActivitiesBadge,
  AssessmentResourcesBadge,
  LearningPathBadge,
  SubjectBadge,
  SourceMaterialBadge,
  ConceptBadge,
} from "./ContentTypeBadge";

export type { ContentTypeBadgeProps, ContentType } from "./ContentTypeBadge/ContentTypeBadgeNew";
export {
  ContentTypeBadge as ContentTypeBadgeNew,
  contentTypeToBadgeVariantMap,
} from "./ContentTypeBadge/ContentTypeBadgeNew";

export { default as CopyParagraphButton } from "./CopyParagraphButton";

export { default as ContentPlaceholder } from "./ContentPlaceholder";

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

export { TreeStructure } from "./TreeStructure";
export type { TreeStructureProps } from "./TreeStructure";

export { BlogPostV2 } from "./BlogPost";
export { ProgrammeCard } from "./ProgrammeCard";
export { KeyFigure } from "./KeyFigure";
export { ContactBlock, contactBlockBackgrounds } from "./ContactBlock";
export type { ContactBlockBackground } from "./ContactBlock";
export type { HeartButtonType, CanonicalUrlFuncs, RenderContext } from "./Embed";
export { CampaignBlock } from "./CampaignBlock";
export { Grid, GridParallaxItem } from "./Grid";
export type { GridType } from "./Grid";

export {
  default as FrontpageArticle,
  FRONTPAGE_ARTICLE_MAX_WIDTH,
  WIDE_FRONTPAGE_ARTICLE_MAX_WIDTH,
} from "./FrontpageArticle";
export type { ProgrammeV2 } from "./ProgrammeCard";

export { Gloss, GlossExample } from "./Gloss";

export { LinkBlock, LinkBlockSection } from "./LinkBlock";

export type { Article as ArticleType } from "./types";

export { CodeBlock, codeLanguageOptions } from "./CodeBlock";

export { ZendeskButton } from "./ZendeskButton/ZendeskButton";

export type { ZendeskButtonProps } from "./ZendeskButton/ZendeskButton";
