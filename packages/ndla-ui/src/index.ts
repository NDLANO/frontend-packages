/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

/** @ts-ignore */
export * from './index-javascript';

export {
  ArticleByline,
  ArticleContent,
  ArticleFootNotes,
  ArticleIntroduction,
  ArticleTitle,
  ArticleWrapper,
  ArticleHeaderWrapper,
  ArticleSideBar,
  default as Article,
} from './Article';

export { default as Table } from './Table';

export { default as ResourcesWrapper, ResourcesTitle, ResourcesTopicTitle } from './ResourcesWrapper';

export { createUniversalPortal } from './utils/createUniversalPortal';

export { default as NoContentBox } from './NoContentBox';

export { default as Masthead, MastheadItem } from './Masthead';

export { default as Portrait } from './Portrait';

export { default as ContentLoader } from './ContentLoader';

export { default as RelatedArticleList, RelatedArticle } from './RelatedArticleList';

export { ErrorResourceAccessDenied, default as ErrorMessage } from './ErrorMessage';

export { default as FileList, File } from './FileList';

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

export { default as FactBox } from './FactBox';

export { default as Image, ImageLink } from './Image';
export { makeSrcQueryString } from './Image';

export {
  SubjectMaterialHero,
  TasksAndActivitiesHero,
  AssessmentResourcesHero,
  SubjectHero,
  ExternalLearningResourcesHero,
  SourceMaterialHero,
  Hero,
  NdlaFilmHero,
} from './Hero';

export { Footer, EditorName, FooterText, FooterAuth } from './Footer';

export { Figure, FigureCaption, FigureLicenseDialog, FigureExpandButton } from './Figure';

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
export { Translation, TranslationLine, TranslationBox } from './Translation';

export { default as Spinner } from './Spinner';

export { default as SearchResultSleeve } from './Search/SearchResultSleeve';

export { default as ContentTypeResult } from './Search/ContentTypeResult';

export { SearchFieldForm } from './Search/SearchFieldForm';

export { default as MastheadSearchModal } from './Masthead/MastheadSearchModal';
export { default as MastheadAuthModal } from './Masthead/MastheadAuthModal';
export { default as AuthModal } from './User';

export { default as CreatedBy } from './CreatedBy';

export { default as Breadcrumblist } from './Breadcrumblist';

export { MessageBox } from './MessageBox';

export { default as AudioPlayer, initAudioPlayers } from './AudioPlayer';

export { NavigationHeading, NavigationBox, NavigationTopicAbout } from './Navigation';

export { default as Programme } from './Programme';

export { default as CompetenceGoalTab } from './CompetenceGoalTab';

export { default as MultidisciplinarySubject, MultidisciplinarySubjectHeader } from './MultidisciplinarySubject';

export {
  SearchTypeResult,
  SearchHeader,
  SearchFieldHeader,
  SearchNotionsResult,
  SearchSubjectResult,
} from './SearchTypeResult';

export { default as constants } from './model';

export { default as messagesNB } from './locale/messages-nb';
export { default as messagesNN } from './locale/messages-nn';
export { default as messagesEN } from './locale/messages-en';

export { default as RadioButtonGroup } from './RadioButtonGroup';

export { ToolboxInfo } from './ToolboxPage';
export { default as Topic } from './Topic';
export type { TopicProps } from './Topic';
export { default as Aside } from './Aside';
export { default as AuthorInfo } from './AuthorInfo';

export { default as Breadcrumb, BreadcrumbBlock } from './Breadcrumb';

export type { BreadcrumbItemProps } from './Breadcrumblist/Breadcrumblist';
export { i18nInstance, formatNestedMessages, formatMessage } from './i18n';
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

export { DisplayOnPageYOffset } from './Animation';

export {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from './MediaList';

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
  SubjectAbout,
  SubjectArchive,
  SubjectCarousel,
  SubjectChildContent,
  SubjectContent,
  SubjectFilter,
  SubjectFlexChild,
  SubjectFlexWrapper,
  SubjectHeader,
  SubjectLinks,
  SubjectNewContent,
  SubjectSecondaryContent,
  SubjectSectionTitle,
  SubjectShortcuts,
  SubjectSidebarWrapper,
  SubjectSocialContent,
  SubjectSocialSection,
  SubjectTopics,
  SubjectBanner,
} from './Subject';

export { default as ContentCard } from './ContentCard';

export { default as CopyParagraphButton } from './CopyParagraphButton';
