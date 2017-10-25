/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import BEMHelper from 'react-bem-helper';
import Article from './Article';

export const classes = new BEMHelper({
  name: 'article',
  prefix: 'c-',
});

export { default as ArticleByline } from './ArticleByline';
export { default as ArticleContent } from './ArticleContent';
export { default as ArticleFootNotes } from './ArticleFootNotes';
export { default as ArticleIntroduction } from './ArticleIntroduction';
export { default as ArticleTitle } from './ArticleTitle';
export { default as ArticleWrapper } from './ArticleWrapper';

export default Article;
