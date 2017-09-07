/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fetch from 'isomorphic-fetch';
import { headerWithAccessToken, getToken } from '../apiFunctions';

export const fetchArticle = id =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(`https://staging.api.ndla.no/article-converter/json/nb/${id}/`, {
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return res.json().then(article => resolve(article));
        }
        return res.json().then(json => reject(json));
      });
    });
  });

export const fetchArticleFromApi = id =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(
        `https://ndla-article-converter.herokuapp.com/article-api/articles/${id}`,
        { method: 'GET', headers: headerWithAccessToken(token) },
      ).then(res => {
        if (res.ok) {
          return res
            .json()
            .then(article => ({
              ...article,
              title: article.title.title,
              content: article.content.content,
            }))
            .then(article => resolve(article));
        }
        return res.json().then(json => reject(json));
      });
    });
  });

export const fetchWithToken = apiUrl =>
  new Promise((resolve, reject) => {
    getToken().then(token => {
      fetch(apiUrl, {
        method: 'GET',
        headers: headerWithAccessToken(token),
      }).then(res => {
        if (res.ok) {
          return res.json().then(image => resolve(image));
        }
        return res.json().then(json => reject(json));
      });
    });
  });
