/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { sortCategories } from '../FrontpageCircularSubjectsSection';

test('sortedCategories for NDLA Film', () => {
  const correctCategoryList = [
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
    { name: 'yrkesfag' },
  ];
  const testCategory1 = [
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
    { name: 'yrkesfag' },
  ];
  const testCategory2 = [
    { name: 'yrkesfag' },
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
  ];
  const testCategory3 = [
    { name: 'yrkesfag' },
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
    { name: 'byggfag' },
  ];
  const testCategory4 = [
    { name: 'yrkesfag' },
    { name: 'test' },
    { name: 'studiespesialiserende' },
  ];

  expect(sortCategories(testCategory1)).toEqual(correctCategoryList);
  expect(sortCategories(testCategory2)).toEqual(correctCategoryList);
  expect(sortCategories(testCategory3)).toEqual(undefined);
  expect(sortCategories(testCategory4)).toEqual(undefined);
});
