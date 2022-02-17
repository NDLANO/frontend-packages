/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { getCopyString, inlineFigureApa7CopyString } from '../getCopyString';

// Adding @ndla/ui to package.json would cause circular dependency.
import { i18nInstance } from '../../../ndla-ui';
const t = i18nInstance.getFixedT('nb');

test('inlineFigureApa7CopyString return correct content', () => {
  const copyright = {
    license: {
      license: 'CC-BY-SA-4.0',
    },
    creators: [{ name: 'Anna Etternavn', type: 'photographer' }],
    rightsholders: [{ name: 'Bendik Person', type: 'artist' }],
    processors: [{ name: 'Celine', type: 'writer' }],
  };

  const copyString = inlineFigureApa7CopyString('Tittel', undefined, '/path/123', copyright, 'https://test.ndla.no', t);

  expect(copyString).toEqual(
    'Tittel, av Etternavn, A., Celine., Person, B. NDLA. (https://test.ndla.no/path/123). CC-BY-SA-4.0.',
  );
});

test('getCopyString returns correct content', () => {
  const copyright = {
    creators: [{ name: 'Person1', type: 'photographer' }],
    rightsholders: [{ name: 'Person2', type: 'artist' }],
    processors: [{ name: 'Person3', type: 'writer' }],
  };
  const copyString = getCopyString('Tittel', undefined, '/path/123', copyright, 'https://test.ndla.no', t);

  expect(copyString).toContain(' Lest: ');

  const [content, date] = copyString.split(' Lest: ');

  expect(content).toBe(
    'Fotograf: Person1. Forfatter: Person3. Tittel [Internett]. Kunstner: Person2. Hentet fra: https://test.ndla.no/path/123',
  );

  expect(date).toMatch(/\d{2}.\d{2}.\d{4}/);
});
