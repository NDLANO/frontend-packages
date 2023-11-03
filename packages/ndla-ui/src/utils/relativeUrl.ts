/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { supportedTranslationLanguages } from '../i18n/i18n';

const ENV_REGEX = /(staging|test)\.?/;
const LANGUAGE_REGEX = new RegExp(`^\\/((?:${supportedTranslationLanguages.join('|')})(?:$|\\/))`, '');

const NDLA_URL = /(.*\.)?ndla.no.*/;

export const getPossiblyRelativeUrl = (url: string, path?: string) => {
  if (!path) return url;
  // If not on NDLA, or if url is not a NDLA url, return url as is
  if (!NDLA_URL.test(url) || !NDLA_URL.test(path)) return url;
  //Remove environment info
  const urlObj = new URL(url.replace(ENV_REGEX, ''));
  const pathObj = new URL(path.replace(ENV_REGEX, ''));
  // If the host is the same, return the relative path
  if (urlObj.host === pathObj.host) {
    // Replace the language part of the path with the language part of the page path
    // If the page language part does not exist, remove it.
    const urlMatch = urlObj.pathname.match(LANGUAGE_REGEX);
    const pathMatch = pathObj.pathname.match(LANGUAGE_REGEX);
    if (urlMatch?.[1] && urlMatch?.[1] !== pathMatch?.[1]) {
      return urlObj.pathname.replace(urlMatch[1], pathMatch?.[1] || '');
    }

    return urlObj.pathname;
  }
  return url;
};
