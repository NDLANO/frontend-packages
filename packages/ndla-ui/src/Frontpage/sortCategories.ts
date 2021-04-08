/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { category as categoryProp } from '../types';

export const sortCategories = (categories: categoryProp[]): categoryProp[] => {
  // Illustation requires categories to be ordered in a specific way..
  const indexFellesfag: number = categories.findIndex(category => category.name === 'fellesfag');
  const indexYrkesfag: number = categories.findIndex(category => category.name === 'yrkesfag');
  const indexstudieSpesialiserende: number = categories.findIndex(
    category => category.name === 'studiespesialiserende',
  );
  const allIndexedSummed: number = indexFellesfag + indexYrkesfag + indexstudieSpesialiserende;
  if (
    allIndexedSummed !== 3 ||
    indexFellesfag === -1 ||
    indexYrkesfag === -1 ||
    indexstudieSpesialiserende === -1
  ) {
    return [];
  }
  return [
    categories[indexFellesfag],
    categories[indexstudieSpesialiserende],
    categories[indexYrkesfag],
  ];
};
