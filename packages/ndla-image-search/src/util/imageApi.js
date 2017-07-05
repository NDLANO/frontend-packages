/**
 * Copyright (c) 2017-present, NDLA
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import queryString from 'query-string';
import defined from 'defined';
import fetch from 'isomorphic-fetch';

export function createErrorPayload(status, message, json) {
  return Object.assign(new Error(message), { status, json });
}

export function resolveJsonOrRejectWithError(res) {
  return new Promise((resolve, reject) => {
    if (res.ok) {
      return res.status === 204 ? resolve() : resolve(res.json());
    }
    return res
      .json()
      .then(json =>
        createErrorPayload(
          res.status,
          defined(json.message, res.statusText),
          json,
        ),
      )
      .catch(reject);
  });
}

const basePath = '/image-api/v1/images';

export const search = (query, page, locale, ndlaClient) =>
  fetch(
    `${ndlaClient.apiUrl}/${basePath}/?${queryString.stringify({
      query,
      page,
    })}&page-size=16&language=${locale}`, { headers: { Authorization: `Bearer ${ndlaClient.token}` } },
  ).then(resolveJsonOrRejectWithError);

// export const search = (queryString, locale) =>
//   fetchWithAccessToken(`${baseUrl}/${queryString}&language=${locale}`, { headers: headerWithAccessToken(token) }).then(resolveJsonOrRejectWithError);

export const fetchImage = (imageId, ndlaClient) =>
  fetch(`${ndlaClient.apiUrl}/${basePath}/${imageId}`, { headers: { Authorization: `Bearer ${ndlaClient.token}` } }).then(
    resolveJsonOrRejectWithError,
  );
