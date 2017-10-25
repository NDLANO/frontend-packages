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
      client_id: 'IxLzDBlvwmHBUMfLaGfJshD6Kahb362L',
      client_secret:
        'w9P-niyBUZK9fadBt5yNkG-7KMBULm59HB8GnJJPgwvT_gwlG98nfvdik2sVW9d_',
      audience: 'ndla_system',
    }),
    json: true,
  })
    .then(res => res.json())
    .then(json => json.access_token);

export function headerWithAccessToken(token) {
  return { Authorization: `Bearer ${token}` };
}
