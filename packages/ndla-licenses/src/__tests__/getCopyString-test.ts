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
  getCreditString,
  getDateString,
  getYearDurationString,
} from '../getCopyString';

// Adding @ndla/ui to package.json would cause circular dependency.
import { i18nInstance } from '../../../ndla-ui';
const tNB = i18nInstance.getFixedT('nb');
const tEN = i18nInstance.getFixedT('en');

// Utils
test('getCreditString returns correct content', () => {
  const roles = [
    { name: 'Anna Langt Etternavn', type: 'photographer' },
    { name: 'Bendik Person', type: 'artist' },
    { name: 'Bendik Test', type: 'artist' },
  ];

  const creditStringWithOnePerson = getCreditString({ creators: [roles[0]] }, false, false, tNB);
  expect(creditStringWithOnePerson).toEqual('Etternavn, A. L. ');

  const creditStringWithTwoPeople = getCreditString({ creators: roles.slice(0, 2) }, false, false, tNB);
  expect(creditStringWithTwoPeople).toEqual('Etternavn, A. L. & Person, B. ');

  const creditStringWithMultiplePeople = getCreditString({ creators: roles }, false, false, tNB);
  expect(creditStringWithMultiplePeople).toEqual('Etternavn, A. L., Person, B. & Test, B. ');

  const creditStringWithRoles = getCreditString({ creators: roles.slice(0, 2) }, false, true, tNB);
  expect(creditStringWithRoles).toEqual('Etternavn, A. L. (Fotograf) & Person, B. (Kunstner). ');

  const creditStringWithPrefix = getCreditString({ creators: roles.slice(0, 2) }, true, false, tNB);
  expect(creditStringWithPrefix).toEqual('av Etternavn, A. L. & Person, B. ');

  const creditStringWithRightsholders = getCreditString(
    {
      rightsholders: [
        { type: 'distributor', name: 'Stor Bedrift' },
        { type: 'distributor', name: 'Liten Bedrift' },
        { type: 'distributor', name: 'Organisasjon' },
      ],
    },
    false,
    false,
    tNB,
  );
  expect(creditStringWithRightsholders).toEqual('Stor Bedrift, Liten Bedrift & Organisasjon. ');
});

test('getCreditString picks correct order of role type', () => {
  const creators = [{ name: 'Anna Etternavn', type: 'photographer' }];
  const rightsholders = [{ name: 'Stor Bedrift', type: 'distributor' }];
  const processors = [{ name: 'Celine', type: 'writer' }];
  const copyright = {
    creators,
    rightsholders,
    processors,
  };

  const creditStringWithAll = getCreditString(copyright, false, false, tNB);
  expect(creditStringWithAll).toEqual('Etternavn, A. ');

  const creditStringWithoutCreators = getCreditString({ rightsholders, processors }, false, false, tNB);
  expect(creditStringWithoutCreators).toEqual('Stor Bedrift. ');

  const creditStringWithoutRightsholders = getCreditString({ creators, processors }, false, false, tNB);
  expect(creditStringWithoutRightsholders).toEqual('Etternavn, A. ');

  const creditStringWithoutProcessors = getCreditString({ creators, rightsholders }, false, false, tNB);
  expect(creditStringWithoutProcessors).toEqual('Etternavn, A. ');
});

test('getDateString returns correct content', () => {
  const date = '2017-06-05T14:25:14Z';
  const invalidDate = '123abc';
  const dateNO = getDateString('nb', date);
  expect(dateNO).toEqual('2017, 5. juni');

  const dateEN = getDateString('en', date);
  expect(dateEN).toEqual('2017, June 5');

  const dateWithInvalidInput = getDateString('nb', invalidDate);
  expect(dateWithInvalidInput).toMatch(/\d{4}, \d{1,2}. [a-zA-Z]+/);

  const dateWithNoInput = getDateString('en');
  expect(dateWithNoInput).toMatch(/\d{4}, [a-zA-Z]+ \d{1,2}/);
});

test('getYearString return correct content', () => {
  const start = '2019';
  const end = '2020';

  const yearWithStart = getYearDurationString(start, undefined, tNB);
  expect(yearWithStart).toEqual('(2019-nå). ');

  const yearWithStartAndEnd = getYearDurationString(start, end, tNB);
  expect(yearWithStartAndEnd).toEqual('(2019-2020). ');

  const yearWithNoInput = getYearDurationString(undefined, undefined, tNB);
  expect(yearWithNoInput).toEqual('');

  const yearWithEqualStartAndEnd = getYearDurationString(start, start, tNB);
  expect(yearWithEqualStartAndEnd).toEqual('(2019). ');
});

// Get functions
test('figureApa7CopyString return correct content', () => {
  const copyright = {
    creators: [{ name: 'Anna Etternavn', type: 'photographer' }],
    rightsholders: [{ name: 'Bendik Person', type: 'artist' }],
    processors: [{ name: 'Celine', type: 'writer' }],
  };
  const date = '2017-06-05T14:25:14Z';

  const copyString = figureApa7CopyString(
    'Tittel',
    date,
    undefined,
    '/path/123',
    copyright,
    'CC-BY-SA-4.0',
    'https://test.ndla.no',
    tNB,
  );

  expect(copyString).toEqual('Tittel, 2017, av Etternavn, A. NDLA. (https://test.ndla.no/path/123). CC-BY-SA-4.0.');
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
    'Etternavn, A. (Forfatter). (2019-nå). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5',
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
    creators: [
      { name: 'Anna Etternavn', type: 'writer' },
      { name: 'Bendik Person', type: 'artist' },
      { name: 'Lars Nordmann', type: 'artist' },
    ],
    rightsholders: [{ name: 'Bendik Test', type: 'artist' }],
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
    'Etternavn, A. (Forfatter), Person, B. (Kunstner) & Nordmann, L. (Kunstner). (2017, 5. juni). Tittel [Audio podkast episode]. NDLA. https://test.ndla.no/podkast/10#episode-2',
  );
});

test('webpageReferenceApa7CopyString return correct content', () => {
  const copyright = {
    creators: [
      { name: 'Anna Etternavn', type: 'photographer' },
      { name: 'Bendik Person', type: 'artist' },
    ],
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

  expect(englishCopyString).toEqual(
    'Etternavn, A. & Person, B. (2017, June 5). Title. NDLA. https://test.ndla.no/path/123',
  );
  expect(norwegianCopyString).toEqual(
    'Etternavn, A. & Person, B. (2017, 5. juni). Tittel. NDLA. https://test.ndla.no/path/123',
  );
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
