/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export function convertFieldWithFallback(element, field, fallback, language) {
  if (element[field] == null) return fallback;

  if (language) {
    return element[field].language === language
      ? element[field][field]
      : fallback;
  }

  if (typeof element[field] === 'object') {
    return element[field][field];
  }

  return element[field];
}
