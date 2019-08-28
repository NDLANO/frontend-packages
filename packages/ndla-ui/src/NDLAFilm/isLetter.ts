/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const isLetter = (title: string): boolean => {
  const regTest: RegExp = /^[A-Za-zÅØÆåøæ]+$/;
  const firstLetter = title.substr(0, 1);
  return !(firstLetter.match(regTest) === null);
};
