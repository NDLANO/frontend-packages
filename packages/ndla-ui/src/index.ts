/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

export { default as SectionHeading } from './SectionHeading';
export {
  ConceptNotionV2,
  ImageEmbed,
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
} from './Embed';

export {
  ArticleByline,
  ArticleFootNotes,
  ArticleIntroduction,
  ArticleTitle,
  ArticleWrapper,
  ArticleHeaderWrapper,
  default as Article,
} from './Article';

export { default as Table, TableStyling } from './Table';

export { default as ResourcesWrapper, ResourcesTopicTitle } from './ResourcesWrapper';

export { createUniversalPortal } from './utils/createUniversalPortal';

export { default as NoContentBox } from './NoContentBox';

export { default as Masthead, getMastheadHeight, useMastheadHeight, SkipToMainContent } from './Masthead';

export { default as ContentLoader } from './ContentLoader';

export { default as RelatedArticleList, RelatedArticle, RelatedArticleListV2 } from './RelatedArticleList';

export { ErrorResourceAccessDenied, default as ErrorMessage } from './ErrorMessage';

export { default as FileList, File, FileListV2, FileV2, PdfFile } from './FileList';

export { BlogPost, BlogPostWrapper } from './BlogPosts';

export { default as Logo } from './Logo';

export { InfoBox } from './InfoBox';

export { default as InfoWidget } from './InfoWidget';

export {
  FrontpageInfo,
  FrontpageFilm,
  FrontpageToolbox,
  FrontpageMultidisciplinarySubject,
  FrontpageHeader,
  FrontpageSubjectIllustration,
  FrontpageSearch,
  FrontpageProgramMenu,
} from './Frontpage';

export { default as FactBox, FactBoxV2 } from './FactBox';

export { default as Image, ImageLink, makeSrcQueryString } from './Image';
export type { ImageCrop, ImageFocalPoint } from './Image';

export type { HeroContentType } from './Hero';
export {
  SubjectMaterialHero,
  TasksAndActivitiesHero,
  AssessmentResourcesHero,
  SubjectHero,
  ExternalLearningResourcesHero,
  SourceMaterialHero,
  Hero,
  NdlaFilmHero,
  HeroContent,
} from './Hero';

export { FilterList, FilterListPhone, FilterButtons, ToggleItem } from './Filter';

export { Footer, EditorName, FooterText } from './Footer';

export {
  Figure,
  FigureCaption,
  FigureLicenseDialog,
  FigureExpandButton,
  FigureOpenDialogButton,
  FigureBylineExpandButton,
} from './Figure';
export type { FigureType } from './Figure';

export { LanguageSelector } from './LanguageSelector';

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
} from './LearningPaths';
export { Translation, TranslationLine } from './Translation';

export { default as SearchResultSleeve } from './Search/SearchResultSleeve';

export { default as ContentTypeResult } from './Search/ContentTypeResult';

export { SearchFieldForm } from './Search/SearchFieldForm';

export { default as MastheadSearchModal } from './Masthead/MastheadSearchModal';
export { UserInfo } from './User';
export type {
  AffiliationType,
  FeideGoGroup,
  FeideGroup,
  FeideOrg,
  FeideUserApiType,
  FeideMembershipType,
  FeideUser,
} from './User';

export { default as resourceTypeColor } from './utils/resourceTypeColor';

export { default as CreatedBy } from './CreatedBy';

export { MessageBox, MessageBoxTag, MessageBanner } from './Messages';

export { ResourceBox } from './ResourceBox';

export { default as AudioPlayer, initAudioPlayers } from './AudioPlayer';

export { NavigationBox, NavigationTopicAbout } from './Navigation';

export { default as Programme } from './Programme';

export { default as CompetenceGoalTab } from './CompetenceGoalTab';

export { default as MultidisciplinarySubject } from './MultidisciplinarySubject';

export {
  SearchTypeResult,
  SearchHeader,
  SearchFieldHeader,
  SearchNotionsResult,
  SearchSubjectResult,
  SearchFilterContent,
} from './SearchTypeResult';

export { default as constants } from './model';

export { default as messagesNB } from './locale/messages-nb';
export { default as messagesNN } from './locale/messages-nn';
export { default as messagesEN } from './locale/messages-en';
export { default as messagesSE } from './locale/messages-se';
export { default as messagesSMA } from './locale/messages-sma';

export { default as RadioButtonGroup } from './RadioButtonGroup';

export { ToolboxInfo } from './ToolboxPage';
export { default as Topic } from './Topic';
export type { TopicProps } from './Topic';
export { default as Aside } from './Aside';

export { default as Breadcrumb, HeaderBreadcrumb, HomeBreadcrumb } from './Breadcrumb';
export type { SimpleBreadcrumbItem, IndexedBreadcrumbItem } from './Breadcrumb';

export { i18nInstance, formatNestedMessages } from './i18n';
export { default as ResourceGroup } from './ResourceGroup';

export { default as LayoutItem, OneColumn, PageContainer, Content } from './Layout';

export {
  FilmSlideshow,
  MovieGrid,
  AboutNdlaFilm,
  FilmMovieSearch,
  FilmMovieList,
  AllMoviesAlphabetically,
} from './NDLAFilm';

export {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from './MediaList';

export type { ItemType } from './MediaList';

export {
  default as ContentTypeBadge,
  SubjectMaterialBadge,
  TasksAndActivitiesBadge,
  AssessmentResourcesBadge,
  LearningPathBadge,
  SubjectBadge,
  ExternalLearningResourcesBadge,
  SourceMaterialBadge,
} from './ContentTypeBadge';

export {
  SubjectChildContent,
  SubjectContent,
  SubjectFlexWrapper,
  SubjectHeader,
  SubjectNewContent,
  SubjectSecondaryContent,
  SubjectSectionTitle,
  SubjectSidebarWrapper,
  SubjectSocialContent,
  SubjectSocialSection,
  SubjectTopics,
  SubjectBanner,
} from './Subject';

export { default as CopyParagraphButton, CopyParagraphButtonV2 } from './CopyParagraphButton';

export { default as ContentPlaceholder } from './ContentPlaceholder';

export { Notion } from './Notion';

export { BannerCard } from './BannerCard';
export { Folder, FolderInput } from './MyNdla';
export { ListResource, BlockResource } from './Resource';
export type { ListResourceProps } from './Resource';
export type { TagType } from './TagSelector';
export { TagSelector } from './TagSelector';

export { SnackbarProvider, useSnack, BaseSnack, DefaultSnackbar } from './SnackBar';
export type { Snack, SnackContext } from './SnackBar';
export { InfoBlock } from './InfoBlock';
export { TreeStructure } from './TreeStructure';
export type { TreeStructureProps } from './TreeStructure';

export { SearchField, SearchResultList, SearchResultItem, ActiveFilters, ToggleSearchButton } from './Search';
export { default as LetterFilter } from './LetterFilter';

export { OrderedList, UnOrderedList } from './List';
export { BlogPostV2 } from './BlogPost';
export { ProgrammeCard } from './ProgrammeCard';
export { KeyFigure } from './KeyFigure';
export { default as ContactBlock } from './ContactBlock';
export type { HeartButtonType } from './Embed';
export { CampaignBlock } from './CampaignBlock';
export { Grid, GridParallaxItem } from './Grid';
export type { GridType } from './Grid';

export {
  default as FrontpageArticle,
  FRONTPAGE_ARTICLE_MAX_WIDTH,
  WIDE_FRONTPAGE_ARTICLE_MAX_WIDTH,
} from './FrontpageArticle';
export { DefinitionTerm, DefinitionDescription } from './DefinitionList';
export type { ProgrammeV2 } from './ProgrammeCard';

export { Gloss } from './Gloss';

export { LinkBlock, LinkBlockSection } from './LinkBlock';
