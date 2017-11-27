/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { contributorTypes, contributorGroups } from '../contributorTypes';

test('ContributorTypes keys is the same for each supported language', () => {
  const enLength = Object.keys(contributorTypes.en);
  const nbLength = Object.keys(contributorTypes.nb);
  expect(enLength).toEqual(nbLength);
});

test('Each contributor type in a contributor group has a valid translation', () => {
  contributorGroups.processors.forEach(processor => {
    expect(contributorTypes.en[processor]).toBeDefined();
    expect(contributorTypes.nb[processor]).toBeDefined();
  });

  contributorGroups.creators.forEach(creator => {
    expect(contributorTypes.en[creator]).toBeDefined();
    expect(contributorTypes.nb[creator]).toBeDefined();
  });

  contributorGroups.rightsholders.forEach(rightsholder => {
    expect(contributorTypes.en[rightsholder]).toBeDefined();
    expect(contributorTypes.nb[rightsholder]).toBeDefined();
  });
});
