/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export { InfoBox } from './InfoBox';

export { default as Logo } from './Logo';
export { default as Table } from './Table';
export { FilterList, FilterListPhone, FilterButtons } from './Filter';
export { default as FactBox } from './FactBox';

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
export { createUniversalPortal } from './utils/createUniversalPortal';
export { default as TopicIntroductionList } from './TopicIntroductionList';
export { default as TopicMenu, TopicMenuButton } from './TopicMenu';
export { default as RelatedArticleList, RelatedArticle } from './RelatedArticleList';
export {
  default as CompetenceGoals,
  CompetenceGoalList,
  CompetenceGoalListHeading,
  CompetenceGoal,
  CompetenceGoalsDialog,
} from './CompetenceGoals';

export { default as NoContentBox } from './NoContentBox';

export { default as ResourcesWrapper, ResourcesTitle, ResourcesTopicTitle } from './ResourcesWrapper';
export {
  MediaList,
  MediaListItem,
  MediaListItemBody,
  MediaListItemActions,
  MediaListItemImage,
  MediaListItemMeta,
} from './MediaList';

export { EmbeddedTwitter, EmbeddedFacebook, EmbeddedFacebookPage } from './Embedded';

export { default as Image, ImageLink } from './Image';
export { makeSrcQueryString } from './Image';
export { default as Portrait } from './Portrait';

export { DisplayOnPageYOffset } from './Animation';

export {
  FilmSlideshow,
  MovieGrid,
  AboutNdlaFilm,
  FilmMovieSearch,
  FilmMovieList,
  AllMoviesAlphabetically,
} from './NDLAFilm';
