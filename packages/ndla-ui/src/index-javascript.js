/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export {
  ArticleByline,
  ArticleContent,
  ArticleFootNotes,
  ArticleIntroduction,
  ArticleTitle,
  ArticleWrapper,
  ArticleHeaderWrapper,
  default as Article,
} from './Article';

export { default as AuthorInfo } from './AuthorInfo';
export { default as ContentCard } from './ContentCard';
export { InfoBox } from './InfoBox';

export {
  SubjectHeader,
  SubjectContent,
  SubjectTopics,
  SubjectSidebarWrapper,
  SubjectFlexWrapper,
  SubjectFlexChild,
  SubjectShortcuts,
  SubjectLinks,
  SubjectArchive,
  SubjectCarousel,
  SubjectSocialContent,
  SubjectSocialSection,
  SubjectSectionTitle,
  SubjectChildContent,
  SubjectFilter,
  SubjectAbout,
  SubjectSecondaryContent,
  SubjectNewContent,
} from './Subject';

export { default as Logo } from './Logo';
export { default as Table } from './Table';
export { FilterList, FilterListPhone } from './Filter';
export { default as AudioPlayer } from './AudioPlayer';
export { default as Aside } from './Aside';
export { default as FactBox } from './FactBox';
export { default as FileList, File } from './FileList';

export {
  SearchOverlay,
  SearchField,
  SearchPage,
  SearchResult,
  SearchResultAuthor,
  SearchResultList,
  SearchResultItem,
  SearchFilter,
  SearchFilterList,
  SearchPopoverFilter,
  ActiveFilters,
  ToggleSearchButton,
} from './Search';
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
  default as LayoutItem,
  OneColumn,
  PageContainer,
  Content,
} from './Layout';
export { createUniversalPortal } from './utils/createUniversalPortal';
export { default as TopicIntroductionList } from './TopicIntroductionList';
export { default as TopicMenu, TopicMenuButton } from './TopicMenu';
export {
  default as RelatedArticleList,
  RelatedArticle,
} from './RelatedArticleList';
export {
  default as CompetenceGoals,
  CompetenceGoalList,
  CompetenceGoalListHeading,
  CompetenceGoal,
  CompetenceGoalsDialog,
} from './CompetenceGoals';

export { default as NoContentBox } from './NoContentBox';

export {
  default as ResourcesWrapper,
  ResourcesTitle,
  ResourcesTopicTitle,
} from './ResourcesWrapper';
export { default as ResourceGroup } from './ResourceGroup';
export { default as Breadcrumb, BreadcrumbBlock } from './Breadcrumb';
export {
  SubjectMaterialHero,
  TasksAndActivitiesHero,
  AssessmentResourcesHero,
  SubjectHero,
  ExternalLearningResourcesHero,
  SourceMaterialHero,
  Hero,
  NdlaFilmHero,
  FFHeroBadge,
} from './Hero';
export { default as Masthead, MastheadItem } from './Masthead';
export {
  Figure,
  FigureCaption,
  FigureLicenseDialog,
  FigureExpandButton,
} from './Figure';
export {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from './MediaList';

export {
  EmbeddedTwitter,
  EmbeddedFacebook,
  EmbeddedFacebookPage,
} from './Embedded';

export { default as Image, ImageLink } from './Image';
export { makeSrcQueryString } from './Image';
export { default as Portrait } from './Portrait';
export { Translation, TranslationLine, TranslationBox } from './Translation';

export { default as ContentLoader } from './ContentLoader';

export { default as constants } from './model';

export { DisplayOnPageYOffset } from './Animation';

export { default as InfoWidget } from './InfoWidget';

export { default as messagesNB } from './locale/messages-nb';
export { default as messagesNN } from './locale/messages-nn';
export { default as messagesEN } from './locale/messages-en';

export { default as RadioButtonGroup } from './RadioButtonGroup';

export {
  FilmSlideshow,
  MovieGrid,
  AboutNdlaFilm,
  FilmMovieSearch,
  FilmMovieList,
  AllMoviesAlphabetically,
} from './NDLAFilm';

export { default as CreatedBy } from './CreatedBy';
export { SpeechBadge } from './Badge';
