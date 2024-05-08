/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

export { ExpandableBox, ExpandableBoxSummary } from "./ExpandableBox";
export { default as FramedContent } from "./FramedContent";
export {
  ConceptNotionV2,
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

export { LicenseLink } from "./LicenseByline";

export {
  ArticleByline,
  ArticleFootNotes,
  ArticleIntroduction,
  ArticleTitle,
  ArticleWrapper,
  ArticleHeaderWrapper,
  default as Article,
  ArticleParagraph,
} from "./Article";

export { getPossiblyRelativeUrl } from "./utils/relativeUrl";

export { default as Table, TableStyling } from "./Table";

export { default as NoContentBox } from "./NoContentBox";

export { default as Masthead, getMastheadHeight, useMastheadHeight, SkipToMainContent } from "./Masthead";

export { default as ContentLoader } from "./ContentLoader";

export { default as RelatedArticleList, RelatedArticle } from "./RelatedArticleList";

export { ErrorResourceAccessDenied, default as ErrorMessage } from "./ErrorMessage";

export { default as FileList, File, PdfFile, Format } from "./FileList";

export { default as Logo } from "./Logo";

export { default as FactBox } from "./FactBox";

export { default as Image, ImageLink, makeSrcQueryString } from "./Image";
export type { ImageCrop, ImageFocalPoint } from "./Image";

export type { HeroContentType } from "./Hero";
export {
  SubjectMaterialHero,
  TasksAndActivitiesHero,
  AssessmentResourcesHero,
  SubjectHero,
  SourceMaterialHero,
  Hero,
  NdlaFilmHero,
  ConceptHero,
  HeroContent,
} from "./Hero";

export { FilterButtons, ToggleItem } from "./Filter";

export { FooterBlock } from "./Footer";

export { Figure } from "./Figure";
export type { FigureType } from "./Figure";

export { LanguageSelector } from "./LanguageSelector";

export {
  LearningPathWrapper,
  LearningPathContent,
  LearningPathMenu,
  LearningPathSticky,
  LearningPathInformation,
  LearningPathStickySibling,
  LearningPathStickyPlaceholder,
  LearningPathLastStepNavigation,
  LearningPathMobileStepInfo,
  LearningPathMobileHeader,
} from "./LearningPaths";

export { default as SearchResultSleeve } from "./Search/SearchResultSleeve";

export { default as ContentTypeResult } from "./Search/ContentTypeResult";

export { SearchFieldForm } from "./Search/SearchFieldForm";

export { default as resourceTypeColor } from "./utils/resourceTypeColor";

export { default as CreatedBy } from "./CreatedBy";

export { MessageBox, MessageBanner } from "./Messages";

export { ResourceBox } from "./ResourceBox";

export { default as AudioPlayer } from "./AudioPlayer";

export {
  SearchTypeResult,
  SearchHeader,
  SearchFieldHeader,
  SearchSubjectResult,
  SearchFilterContent,
} from "./SearchTypeResult";

export { default as constants } from "./model";

export { default as messagesNB } from "./locale/messages-nb";
export { default as messagesNN } from "./locale/messages-nn";
export { default as messagesEN } from "./locale/messages-en";
export { default as messagesSE } from "./locale/messages-se";
export { default as messagesSMA } from "./locale/messages-sma";

export { default as Breadcrumb, HeaderBreadcrumb, HomeBreadcrumb } from "./Breadcrumb";
export type { SimpleBreadcrumbItem, IndexedBreadcrumbItem } from "./Breadcrumb";

export { i18nInstance, formatNestedMessages } from "./i18n";
export { default as ResourceGroup } from "./ResourceGroup";

export { default as LayoutItem, OneColumn, PageContainer, Content } from "./Layout";

export {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from "./MediaList";

export type { ItemType } from "./MediaList";

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

export { default as CopyParagraphButton } from "./CopyParagraphButton";

export { default as ContentPlaceholder } from "./ContentPlaceholder";

export { Notion } from "./Notion";

export { Folder, FolderInput } from "./MyNdla";
export { ListResource, BlockResource } from "./Resource";
export type { ListResourceProps } from "./Resource";
export type { TagType } from "./TagSelector";
export { TagSelector } from "./TagSelector";

export { SnackbarProvider, useSnack, BaseSnack, DefaultSnackbar } from "./SnackBar";
export type { Snack, SnackContext } from "./SnackBar";
export { TreeStructure } from "./TreeStructure";
export type { TreeStructureProps } from "./TreeStructure";

export { SearchField, SearchResultList, SearchResultItem, ActiveFilters } from "./Search";
export { default as LetterFilter } from "./LetterFilter";

export { OrderedList, UnOrderedList } from "./List";
export { BlogPostV2 } from "./BlogPost";
export { ProgrammeCard } from "./ProgrammeCard";
export { KeyFigure } from "./KeyFigure";
export { default as ContactBlock } from "./ContactBlock";
export type { HeartButtonType, CanonicalUrlFuncs, RenderContext } from "./Embed";
export { CampaignBlock } from "./CampaignBlock";
export { Grid, GridParallaxItem } from "./Grid";
export type { GridType } from "./Grid";

export {
  default as FrontpageArticle,
  FRONTPAGE_ARTICLE_MAX_WIDTH,
  WIDE_FRONTPAGE_ARTICLE_MAX_WIDTH,
} from "./FrontpageArticle";
export { DefinitionTerm, DefinitionDescription } from "./DefinitionList";
export type { ProgrammeV2 } from "./ProgrammeCard";

export { Gloss, GlossExample } from "./Gloss";

export { LinkBlock, LinkBlockSection } from "./LinkBlock";

export type { Article as ArticleType } from "./types";
