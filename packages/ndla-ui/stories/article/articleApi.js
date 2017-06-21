/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fetch from 'isomorphic-fetch';

import btoa from 'btoa';

const url = 'https://staging.api.ndla.no/auth/tokens';

const b64EncodeUnicode = str => btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (match, p1) => String.fromCharCode(`0x${p1}`)));

export const getToken = () => fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    Authorization: `Basic ${b64EncodeUnicode('swagger-client:swagger-public-client-secret')}`,
  },
  body: 'grant_type=client_credentials',
}).then(res => res.json()).then(json => json.access_token);

export function headerWithAccessToken(token) {
  return { Authorization: `Bearer ${token}` };
}

export const fetchArticle = id => (
   new Promise((resolve, reject) => {
     getToken().then((token) => {
       fetch(`https://staging.api.ndla.no/article-converter/json/nb/${id}/`, { headers: headerWithAccessToken(token) })
        .then((res) => {
          if (res.ok) {
            return res.json()
              .then(article => ({ ...article, title: article.title[0].title }))
              .then(article => resolve(article));
          }
          return res.json()
              .then(json => reject(json));
        });
     });
   })
);

export const fetchArticleFromApi = id => (
  new Promise((resolve, reject) => {
    getToken().then((token) => {
      fetch(`https://ndla-article-converter.herokuapp.com/article-api/articles/${id}`, { method: 'GET', headers: headerWithAccessToken(token) })
        .then((res) => {
          if (res.ok) {
            return res.json()
              .then(article => ({ ...article, title: article.title[0].title, content: article.content[0].content }))
              .then(article => resolve(article));
          }
          return res.json().then(json => reject(json));
        });
    });
  })
);

export const fetchWithToken = apiUrl => (
  new Promise((resolve, reject) => {
    getToken().then((token) => {
      fetch(apiUrl, { method: 'GET', headers: headerWithAccessToken(token) })
        .then((res) => {
          if (res.ok) {
            return res.json().then(image => resolve(image));
          }
          return res.json().then(json => reject(json));
        });
    });
  })
);
