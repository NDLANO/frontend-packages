/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { sortCategories } from '../sortCategories';

const arrayIsCorrect = array =>
  array &&
  array.length &&
  array[0].name === 'fellesfag' &&
  array[1].name === 'studiespesialiserende' &&
  array[2].name === 'yrkesfag';

test('Frontpage/sortCategories function test', () => {
  // Correct input and order
  const testTruthy1 = [
    {
      name: 'fellesfag',
      subjects: [
        {
          url: '#1',
          text: 'Engelsk',
        },
      ],
    },
    {
      name: 'studiespesialiserende',
      subjects: [
        {
          url: '#1',
          text: 'Biologi 1',
        },
      ],
    },
    {
      name: 'yrkesfag',
      subjects: [
        {
          url: '#1',
          text: 'Barne- og undersarbeiderfag',
        },
      ],
    },
  ];
  // Correct input, wrong order
  const testTruthy2 = [
    {
      name: 'yrkesfag',
      subjects: [
        {
          url: '#1',
          text: 'Barne- og undersarbeiderfag',
        },
      ],
    },
    {
      name: 'fellesfag',
      subjects: [
        {
          url: '#1',
          text: 'Engelsk',
        },
      ],
    },
    {
      name: 'studiespesialiserende',
      subjects: [
        {
          url: '#1',
          text: 'Biologi 1',
        },
      ],
    },
  ];
  // And extra input in addition to correct onces
  const testFalsy1 = [
    {
      name: 'yrkesfag',
      subjects: [
        {
          url: '#1',
          text: 'Barne- og undersarbeiderfag',
        },
      ],
    },
    {
      name: 'spoltefag',
      subjects: [
        {
          url: '#1',
          text: 'Engelsk',
        },
      ],
    },
    {
      name: 'fellesfag',
      subjects: [
        {
          url: '#1',
          text: 'Engelsk',
        },
      ],
    },
    {
      name: 'studiespesialiserende',
      subjects: [
        {
          url: '#1',
          text: 'Biologi 1',
        },
      ],
    },
  ];
  // Name altered in one of the items
  const testFalsy2 = [
    {
      name: 'yrkesfag1',
      subjects: [
        {
          url: '#1',
          text: 'Barne- og undersarbeiderfag',
        },
      ],
    },
    {
      name: 'fellesfag',
      subjects: [
        {
          url: '#1',
          text: 'Engelsk',
        },
      ],
    },
    {
      name: 'studiespesialiserende',
      subjects: [
        {
          url: '#1',
          text: 'Biologi 1',
        },
      ],
    },
  ];
  const sortedTruthy1 = sortCategories(testTruthy1);
  const sortedTruthy2 = sortCategories(testTruthy2);
  const sortedFalsy1 = sortCategories(testFalsy1);
  const sortedFalsy2 = sortCategories(testFalsy2);
  expect(arrayIsCorrect(sortedTruthy1)).toBeTruthy();
  expect(arrayIsCorrect(sortedTruthy2)).toBeTruthy();
  expect(arrayIsCorrect(sortedFalsy1)).toBeFalsy();
  expect(arrayIsCorrect(sortedFalsy2)).toBeFalsy();
});
