/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fetch from 'isomorphic-fetch';

export const fetchArticle = id => fetch(`${window.location.protocol}//api.test.ndla.no/article-oembed/raw/nb/${id}/`).then(res => (
  new Promise((resolve, reject) => {
    if (res.ok) {
      return res.json()
        .then(article => ({ ...article, title: article.title[0].title }))
        .then(article => resolve(article));
    }
    return res.json()
        .then(json => reject(json));
  })),
);

export const fetchArticleFromApi = id => fetch(`${window.location.protocol}//staging.api.ndla.no/article-api/v1/articles/${id}`).then(res => (
  new Promise((resolve, reject) => {
    if (res.ok) {
      return res.json()
        .then(article => ({ ...article, title: article.title[0].title, content: article.content[0].content }))
        .then(article => resolve(article));
    }
    return res.json()
        .then(json => reject(json));
  })),
);
