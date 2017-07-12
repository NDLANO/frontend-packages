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
