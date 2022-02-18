/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import {
  getCopyString,
  figureApa7CopyString,
  webpageReferenceApa7CopyString,
  podcastEpisodeApa7CopyString,
  podcastSeriesApa7CopyString,
} from '../getCopyString';

// Adding @ndla/ui to package.json would cause circular dependency.
import { i18nInstance } from '../../../ndla-ui';
const tNB = i18nInstance.getFixedT('nb');
const tEN = i18nInstance.getFixedT('en');

test('figureApa7CopyString return correct content', () => {
  const copyright = {
    license: {
      license: 'CC-BY-SA-4.0',
    },
    creators: [{ name: 'Anna Etternavn', type: 'photographer' }],
    rightsholders: [{ name: 'Bendik Person', type: 'artist' }],
    processors: [{ name: 'Celine', type: 'writer' }],
  };

  const copyString = figureApa7CopyString(
    'Tittel',
    2010,
    undefined,
    '/path/123',
    copyright,
    'https://test.ndla.no',
    tNB,
  );

  expect(copyString).toEqual('Tittel, 2010, av Etternavn, A. NDLA. (https://test.ndla.no/path/123). CC-BY-SA-4.0.');
});

test('podcastSeriesApa7CopyString return correct content', () => {
  const copyright = {
    license: {
      license: 'CC-BY-SA-4.0',
    },
    creators: [{ name: 'Anna Etternavn', type: 'writer' }],
    rightsholders: [{ name: 'Bendik Person', type: 'artist' }],
    processors: [{ name: 'Celine', type: 'writer' }],
  };

  const copyStringWithStartAndEnd = podcastSeriesApa7CopyString(
    'Tittel',
    '2019',
    '2020',
    '5',
    copyright,
    'https://test.ndla.no',
    tNB,
  );
  const copyStringWithStart = podcastSeriesApa7CopyString(
    'Tittel',
    '2019',
    undefined,
    '5',
    copyright,
    'https://test.ndla.no',
    tNB,
  );
  const copyStringWithNoYear = podcastSeriesApa7CopyString(
    'Tittel',
    undefined,
    undefined,
    '5',
    copyright,
    'https://test.ndla.no',
    tNB,
  );
  const copyStringWithEqualYears = podcastSeriesApa7CopyString(
    'Tittel',
    '2019',
    '2019',
    '5',
    copyright,
    'https://test.ndla.no',
    tNB,
  );

  expect(copyStringWithStartAndEnd).toEqual(
    'Etternavn, A. (Forfatter). (2019-2020). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5',
  );

  expect(copyStringWithStart).toEqual(
    'Etternavn, A. (Forfatter). (2019). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5',
  );

  expect(copyStringWithNoYear).toEqual(
    'Etternavn, A. (Forfatter). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5',
  );

  expect(copyStringWithEqualYears).toEqual(
    'Etternavn, A. (Forfatter). (2019). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5',
  );
});

test('podcastEpisodeApa7CopyString return correct content', () => {
  const copyright = {
    license: {
      license: 'CC-BY-SA-4.0',
    },
    creators: [{ name: 'Anna Etternavn', type: 'writer' }],
    rightsholders: [{ name: 'Bendik Person', type: 'artist' }],
    processors: [{ name: 'Celine', type: 'writer' }],
  };

  const copyString = podcastEpisodeApa7CopyString(
    'Tittel',
    '2017-06-05T14:25:14Z',
    '10',
    '2',
    copyright,
    'no',
    'https://test.ndla.no',
    tNB,
  );

  expect(copyString).toEqual(
    'Etternavn, A. (Forfatter). (2017, 5. juni). Tittel [Audio podkast episode]. NDLA. https://test.ndla.no/podkast/10#episode-2',
  );
});

test('webpageReferenceApa7CopyString return correct content', () => {
  const copyright = {
    creators: [{ name: 'Anna Etternavn', type: 'photographer' }],
    rightsholders: [{ name: 'Bendik Person', type: 'artist' }],
    processors: [{ name: 'Celine', type: 'writer' }],
  };

  const englishCopyString = webpageReferenceApa7CopyString(
    'Title',
    undefined,
    '2017-06-05T14:25:14Z',
    '/path/123',
    copyright,
    'en',
    'https://test.ndla.no',
    tEN,
  );

  const norwegianCopyString = webpageReferenceApa7CopyString(
    'Tittel',
    undefined,
    '2017-06-05T14:25:14Z',
    '/path/123',
    copyright,
    'nb',
    'https://test.ndla.no',
    tNB,
  );

  expect(englishCopyString).toEqual('Etternavn, A. (2017, June 5). Title. NDLA. https://test.ndla.no/path/123');
  expect(norwegianCopyString).toEqual('Etternavn, A. (2017, 5. juni). Tittel. NDLA. https://test.ndla.no/path/123');
});

test('getCopyString returns correct content', () => {
  const copyright = {
    creators: [{ name: 'Person1', type: 'photographer' }],
    rightsholders: [{ name: 'Person2', type: 'artist' }],
    processors: [{ name: 'Person3', type: 'writer' }],
  };
  const copyString = getCopyString('Tittel', undefined, '/path/123', copyright, 'https://test.ndla.no', tNB);

  expect(copyString).toContain(' Lest: ');

  const [content, date] = copyString.split(' Lest: ');

  expect(content).toBe(
    'Fotograf: Person1. Forfatter: Person3. Tittel [Internett]. Kunstner: Person2. Hentet fra: https://test.ndla.no/path/123',
  );

  expect(date).toMatch(/\d{2}.\d{2}.\d{4}/);
});
