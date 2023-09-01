/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const ENV_REGEX = /(staging|test)\.?/;

const NDLA_URL = /(.*\.)?ndla.no.*/;

export const usePossiblyRelativeUrl = (url: string, path?: string) => {
  if (!path) return url;
  if (!NDLA_URL.test(url) || !NDLA_URL.test(path)) return url;
  const urlObj = new URL(url.replace(ENV_REGEX, ''));
  const pathObj = new URL(path.replace(ENV_REGEX, ''));
  if (urlObj.host === pathObj.host) return urlObj.pathname;
  return url;
};
