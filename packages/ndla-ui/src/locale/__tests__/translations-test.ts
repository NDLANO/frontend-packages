/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { validateTranslationFiles } from '@ndla/util';
import messagesNB from '../messages-nb';
import messagesNN from '../messages-nn';
import messagesEN from '../messages-en';

test('language-keys', () => {
  const anyMissing = validateTranslationFiles(
    [
      {
        languageName: 'Norsk bokmål',
        translationObject: messagesNB,
      },
      {
        languageName: 'Norsk nynorsk',
        translationObject: messagesNN,
      },
      {
        languageName: 'English',
        translationObject: messagesEN,
      },
    ],
    'only-on-error',
  );

  expect(anyMissing).toBe(false);
});
