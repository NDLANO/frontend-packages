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
  const correctCategoryList = ['fellesfag', 'studiespesialiserende', 'yrkesfag2'];
  const test1 = [
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
    { name: 'yrkesfag' },
  ];
  const test2 = [
    { name: 'yrkesfag' },
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
  ];
  const test3 = [
    { name: 'yrkesfag' },
    { name: 'fellesfag' },
    { name: 'studiespesialiserende' },
    { name: 'byggfag' },
  ];
  const test4 = [
    { name: 'yrkesfag' },
    { name: 'test' },
    { name: 'studiespesialiserende' },
  ];

  const sortedTest1 = sortCategories(test1);
  const sortedTest2 = sortCategories(test2);
  const sortedTest3 = sortCategories(test3);
  const sortedTest4 = sortCategories(test4);

  expect(sortedTest1 && sortedTest1.map(item => item.name)).toEqual(correctCategoryList);
  expect(sortedTest2 && sortedTest1.map(item => item.name)).toEqual(correctCategoryList);
  expect(sortedTest3).toBeUndefined();
  expect(sortedTest4).toBeUndefined();
});
