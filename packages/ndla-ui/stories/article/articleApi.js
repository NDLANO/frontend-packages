/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fetch from 'isomorphic-fetch';

export const fetchArticle = id => fetch(`https://staging.api.ndla.no/article-converter/raw/nb/${id}/`).then(res => (
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
