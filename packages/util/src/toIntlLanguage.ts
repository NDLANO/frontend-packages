/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Converts a language code to a format suitable for Intl APIs.
 * Chromium and Safari only supports "nb" and "no". Supplying "nn" when in Chrome falls back to "en".
 * As such, we have to live with bokmål here.
 */
export const toIntlLanguage = (lang: string): string => {
  if (lang === "nb" || lang === "nn") {
    return "no";
  }
  return lang;
};
