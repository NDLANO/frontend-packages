/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export async function fetchArticle(id) {
  const response = await fetch(
    `https://api.ndla.no/article-converter/json/nb/${id}/`,
  );

  const json = response.json();

  return json;
}
