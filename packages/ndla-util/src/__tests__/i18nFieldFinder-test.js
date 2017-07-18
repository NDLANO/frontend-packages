/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
/* eslint-env jest */

import { tagsI18N } from '../i18nFieldFinder';

const norwegianTags = ['kristofer', 'nils', 'arne'];
const englishTags = ['James', '007', 'Secret'];
const image = {
  tags: [
    {
      tags: norwegianTags,
      language: 'nb',
    },
    {
      tags: englishTags,
      language: 'en',
    },
  ],
};

test('ndla-util/tagsI18N translate', () => {
  expect(tagsI18N(image, 'nb')).toEqual(norwegianTags);
  expect(tagsI18N(image, 'en')).toEqual(englishTags);
});

test('ndla-util/tagsI18N with fallback', () => {
  expect(tagsI18N(image, 'zh', true, ['en', 'nb', 'nn'])).toEqual(englishTags);
});
