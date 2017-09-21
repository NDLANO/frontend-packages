/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const getLastPage = (search, type) => {
  if (type === 'youtube') {
    if (search.queries && search.queries.request.length > 0) {
      return Math.ceil(
        search.queries.request[0].totalResults /
          search.queries.request[0].count,
      );
    }
  }
  return 0;
};
