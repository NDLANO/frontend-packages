/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Article, {
  ArticleTitle,
  ArticleIntroduction,
  ArticleWrapper,
} from './Article';

export { default as ArticleByline } from './ArticleByline';
export { default as ArticleContent } from './ArticleContent';
export { default as ArticleFootNotes } from './ArticleFootNotes';
export {
  default as ArticleAuthorsAndLicense,
} from './ArticleAuthorsAndLicense';
export { ArticleTitle, ArticleIntroduction, ArticleWrapper };

export default Article;
