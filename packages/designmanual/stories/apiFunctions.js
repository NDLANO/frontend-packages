/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fetch from 'isomorphic-fetch';

const url = 'https://ndla.eu.auth0.com/oauth/token';

export const getToken = () =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      grant_type: 'client_credentials',
      client_id: 'yQoTsCl47nSr72ixETlIlVgnDdQemE2M',
      client_secret: 'xrCvq_nPYcXpHwBPG5NNbjj12iG4XK9stwA5WoKGWM6UwHbWc88pLwOsCid_On8C',
      audience: 'ndla_system',
    }),
    json: true,
  })
    .then((res) => res.json())
    .then((json) => json.access_token);

export function headerWithAccessToken(token) {
  return { Authorization: `Bearer ${token}` };
}
