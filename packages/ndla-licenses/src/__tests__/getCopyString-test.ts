/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { getCopyString } from '../getCopyString';

const fakeTranslator = (id: string) => {
  switch (id) {
    case 'license.copyText.internet':
      return '[Internett]. ';
    case 'license.copyText.downloadedFrom':
      return 'Hentet fra: ';
    case 'license.copyText.readDate':
      return 'Lest: ';
    case 'license.copyText.noTitle':
      return 'Uten tittel';
    case 'photographer':
      return 'Fotograf';
    case 'artist':
      return 'Kunstner';
    case 'writer':
      return 'Forfatter';
    default:
      return 'ERROR';
  }
};

test('getCopyString returns correct content', () => {
  const copyright = {
    creators: [{ name: 'Person1', type: 'photographer' }],
    rightholders: [{ name: 'Person2', type: 'artist' }],
    processors: [{ name: 'Person3', type: 'writer' }],
  };
  const copyString = getCopyString('Tittel', undefined, 'path/123', copyright, 'https://test.ndla.no', (id: string) =>
    fakeTranslator(id),
  );

  expect(copyString).toContain(' Lest: ');

  const [content, date] = copyString.split(' Lest: ');

  expect(content).toBe(
    'Fotograf: Person1. Forfatter: Person3. Tittel [Internett]. Hentet fra: https://test.ndla.nopath/123',
  );

  expect(date).toMatch(/\d{2}.\d{2}.\d{4}/);
});
