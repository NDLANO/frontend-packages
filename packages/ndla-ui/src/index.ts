/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Ignore typescript implicit any warning and export all javascript components
// Move components to this file when they are migrated to typescript

// @ts-ignore
export * from './index-javascript';

export { default as ErrorMessage } from './ErrorMessage';
export { default as SafeLink } from './common/SafeLink';
export { BlogPost, BlogPostWrapper } from './BlogPosts';

export {
  FrontpageInfo,
  FrontpageFilm,
  FrontpageHeader,
  FrontpageSubjectsInPortal,
  FrontpageSubjectIllustration,
  FrontpageCircularSubjectsSection,
  FrontpageSearch,
} from './Frontpage';

export { Footer, EditorName, FooterText } from './Footer';

export { LanguageSelector } from './LanguageSelector';
export { default as SafeLinkButton } from './common/SafeLinkButton';

export {
  LearningPathWrapper,
  LearningPathContent,
  LearningPathMenu,
  LearningPathSticky,
  LearningPathInformation,
  LearningPathStickySibling,
  LearningPathLastStepNavigation,
  LearningPathMobileStepInfo,
} from './LearningPaths';