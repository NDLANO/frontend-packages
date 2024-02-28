/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const isPathToHighlight = (path: string, href: string | false | null): boolean => {
  const regexForPath = new RegExp(`^(/.*)?${path}$`);
  return regexForPath.test(href || "") || path === href;
};
