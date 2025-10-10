/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { i18nInstance } from "../../../../testUtils/i18nTestInstance";
import {
  figureApa7CopyString,
  webpageReferenceApa7CopyString,
  podcastEpisodeApa7CopyString,
  podcastSeriesApa7CopyString,
  getCreditString,
  getDateString,
  getYearDurationString,
  getLicenseString,
} from "../getCopyString";

// Adding @ndla/ui to package.json would cause circular dependency.
const tNB = i18nInstance.getFixedT("nb");
const tEN = i18nInstance.getFixedT("en");

const roles = [
  { name: "Anna Langt Etternavn", type: "photographer" },
  { name: "Bendik Person", type: "artist" },
  { name: "Bendik Test", type: "artist" },
];

const creators = [{ name: "Anna Etternavn", type: "photographer" }];
const rightsholders = [{ name: "Stor Bedrift", type: "distributor" }];
const processors = [{ name: "Celine", type: "writer" }];
const copyright = {
  creators,
  rightsholders,
  processors,
  license: {
    license: "CC-BY-SA-4.0",
  },
};

// function getLicenseString
test("getLicenseString returns correct content for CC license", () => {
  const creditString = getLicenseString(copyright.license.license, "nb");
  expect(creditString).toEqual("CC BY-SA 4.0");
});

test("getLicenseString returns no content for PD license", () => {
  const creditString = getLicenseString("PD", "nb");
  expect(creditString).toEqual("");
});

test("getLicenseString returns no content for N/A license", () => {
  const creditString = getLicenseString("N/A", "nb");
  expect(creditString).toEqual("");
});

test("getLicenseString returns correct content for copyrighted license", () => {
  const creditString = getLicenseString("COPYRIGHTED", "nb");
  expect(creditString).toEqual("Begrensa gjenbruk");
});

test("getLicenseString returns no content for no license", () => {
  const creditString = getLicenseString("", "nb");
  expect(creditString).toEqual("");
});

// function getCreditString
test("getCreditString returns correct string for one person", () => {
  const creditString = getCreditString({ creators: [roles[0]] }, {}, tNB);
  expect(creditString).toEqual("Etternavn, A. L. ");
});

test("getCreditString returns correct string for two people", () => {
  const creditString = getCreditString({ creators: roles.slice(0, 2) }, {}, tNB);
  expect(creditString).toEqual("Etternavn, A. L., Person, B. ");
});

test("getCreditString returns correct string for three people", () => {
  const creditString = getCreditString({ creators: roles }, {}, tNB);
  expect(creditString).toEqual("Etternavn, A. L., Person, B., Test, B. ");
});

test("getCreditString returns correct content with withRoles param", () => {
  const creditString = getCreditString({ creators: roles.slice(0, 2) }, { withRole: true }, tNB);
  expect(creditString).toEqual("Etternavn, A. L. (Fotograf), Person, B. (Kunstner). ");
});

test("getCreditString returns correct content with byPrefix param", () => {
  const creditString = getCreditString({ creators: roles.slice(0, 2) }, { byPrefix: true }, tNB);
  expect(creditString).toEqual("av Etternavn, A. L., Person, B. ");
});

test("getCreditString returns correct content when using rightsholders", () => {
  const creditString = getCreditString(
    {
      rightsholders: [
        { type: "distributor", name: "Stor Bedrift" },
        { type: "distributor", name: "Liten Bedrift" },
        { type: "distributor", name: "Organisasjon" },
      ],
    },
    {},
    tNB,
  );
  expect(creditString).toEqual("Stor Bedrift, Liten Bedrift, Organisasjon. ");
});

test("getCreditString uses correct role when all are present", () => {
  const creditStringWithAll = getCreditString(copyright, {}, tNB);
  expect(creditStringWithAll).toEqual("Etternavn, A. ");
});

test("getCreditString uses correct role when creators is missing", () => {
  const creditStringWithoutCreators = getCreditString({ rightsholders, processors }, {}, tNB);
  expect(creditStringWithoutCreators).toEqual("Stor Bedrift. ");
});

test("getCreditString uses correct role when rightsholders is missing", () => {
  const creditStringWithoutRightsholders = getCreditString({ creators, processors }, {}, tNB);
  expect(creditStringWithoutRightsholders).toEqual("Etternavn, A. ");
});

test("getCreditString uses correct role when processors is missing", () => {
  const creditStringWithoutProcessors = getCreditString({ creators, rightsholders }, {}, tNB);
  expect(creditStringWithoutProcessors).toEqual("Etternavn, A. ");
});

// function getDateString
const date = "2017-06-05T14:25:14Z";
const invalidDate = "123abc";

test("getDateString returns correct date when using valid date and NB locale", () => {
  const dateNO = getDateString("nb", date);
  expect(dateNO).toEqual("2017, 5. juni");
});

test("getDateString returns correct date when using valid date and EN locale", () => {
  const dateEN = getDateString("en", date);
  expect(dateEN).toEqual("2017, June 5");
});

test("getDateString returns correct date (current) when using invalid date", () => {
  const dateWithInvalidInput = getDateString("nb", invalidDate);
  expect(dateWithInvalidInput).toMatch(/\d{4}, \d{1,2}. [a-zA-Z]+/);
});

test("getDateString returns correct date when given no input", () => {
  const dateWithNoInput = getDateString("en");
  expect(dateWithNoInput).toMatch(/\d{4}, [a-zA-Z]+ \d{1,2}/);
});

// function getYearString
const startYear = "2019";
const endYear = "2020";
test("getYearString returns correct string with only startYear param", () => {
  const yearWithStart = getYearDurationString(startYear, undefined, tNB);
  expect(yearWithStart).toEqual("(2019-nå). ");
});

test("getYearString returns correct string with both params", () => {
  const yearWithStartAndEnd = getYearDurationString(startYear, endYear, tNB);
  expect(yearWithStartAndEnd).toEqual("(2019-2020). ");
});

test("getYearString returns empty string when no params are used", () => {
  const yearWithNoInput = getYearDurationString(undefined, undefined, tNB);
  expect(yearWithNoInput).toEqual("");
});

test("getYearString return corrct string when start and end is identical", () => {
  const yearWithEqualStartAndEnd = getYearDurationString(startYear, startYear, tNB);
  expect(yearWithEqualStartAndEnd).toEqual("(2019). ");
});

// function figureApa7CopyString
test("figureApa7CopyString return correct content", () => {
  const date = "2017-06-05T14:25:14Z";

  const copyString = figureApa7CopyString(
    "Tittel",
    date,
    undefined,
    "/path/123",
    copyright,
    "CC-BY-SA-4.0",
    "https://test.ndla.no",
    tNB,
    "nb",
  );

  expect(copyString).toEqual(
    "Tittel, 2017, av Etternavn, A., Stor Bedrift. (https://test.ndla.no/path/123). CC BY-SA 4.0.",
  );
});

test("figureApa7CopyString return correct content when no license in param", () => {
  const date = "2017-06-05T14:25:14Z";

  const copyString = figureApa7CopyString(
    "Tittel",
    date,
    undefined,
    "/path/123",
    copyright,
    undefined,
    "https://test.ndla.no",
    tNB,
    "nb",
  );

  expect(copyString).toEqual("Tittel, 2017, av Etternavn, A., Stor Bedrift. (https://test.ndla.no/path/123).");
});

// function podcastSeriesApa7CopyString
test("podcastSeriesApa7CopyString return correct with start and end date param", () => {
  const copyString = podcastSeriesApa7CopyString("Tittel", "2019", "2020", "5", copyright, "https://test.ndla.no", tNB);

  expect(copyString).toEqual(
    "Etternavn, A. (Fotograf), Stor Bedrift (Distributør). (2019-2020). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5",
  );
});

test("podcastSeriesApa7CopyString returns correct content with start date param", () => {
  const copyString = podcastSeriesApa7CopyString(
    "Tittel",
    "2019",
    undefined,
    "5",
    copyright,
    "https://test.ndla.no",
    tNB,
  );
  expect(copyString).toEqual(
    "Etternavn, A. (Fotograf), Stor Bedrift (Distributør). (2019-nå). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5",
  );
});

test("podcastSeriesApa7CopyString return nothing when no year param is used", () => {
  const copyString = podcastSeriesApa7CopyString(
    "Tittel",
    undefined,
    undefined,
    "5",
    copyright,
    "https://test.ndla.no",
    tNB,
  );
  expect(copyString).toEqual(
    "Etternavn, A. (Fotograf), Stor Bedrift (Distributør). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5",
  );
});

test("podcastSeriesApa7CopyString returns short year when start and end date is equal", () => {
  const copyString = podcastSeriesApa7CopyString("Tittel", "2019", "2019", "5", copyright, "https://test.ndla.no", tNB);

  expect(copyString).toEqual(
    "Etternavn, A. (Fotograf), Stor Bedrift (Distributør). (2019). Tittel [Audio podkast]. NDLA. https://test.ndla.no/podkast/5",
  );
});

// function podcastEpisodeApa7CopyString
test("podcastEpisodeApa7CopyString return correct content", () => {
  const copyright = {
    license: {
      license: "CC-BY-SA-4.0",
    },
    creators: [
      { name: "Anna Etternavn", type: "writer" },
      { name: "Bendik Person", type: "artist" },
      { name: "Lars Nordmann", type: "artist" },
    ],
    rightsholders: [{ name: "Stor Bedrift", type: "distributor" }],
    processors: [{ name: "Celine", type: "writer" }],
  };

  const copyString = podcastEpisodeApa7CopyString(
    "Tittel",
    "2017-06-05T14:25:14Z",
    "10",
    "2",
    copyright,
    "no",
    "https://test.ndla.no",
    tNB,
  );

  expect(copyString).toEqual(
    "Etternavn, A. (Forfatter), Person, B. (Kunstner), Nordmann, L. (Kunstner), Stor Bedrift (Distributør). (2017, 5. juni). Tittel [Audio podkast episode]. NDLA. https://test.ndla.no/podkast/10#episode-2",
  );
});

// function webpageReferenceApa7CopyString
test("webpageReferenceApa7CopyString return correct content", () => {
  const copyright = {
    creators: [
      { name: "Anna Etternavn", type: "photographer" },
      { name: "Bendik Person", type: "artist" },
    ],
    rightsholders: [{ name: "Stor Bedrift", type: "distributor" }],
    processors: [{ name: "Celine", type: "writer" }],
  };

  const englishCopyString = webpageReferenceApa7CopyString(
    "Title",
    undefined,
    "2017-06-05T14:25:14Z",
    "/path/123",
    copyright,
    "en",
    "https://test.ndla.no",
    tEN,
  );

  const norwegianCopyString = webpageReferenceApa7CopyString(
    "Tittel",
    undefined,
    "2017-06-05T14:25:14Z",
    "/path/123",
    copyright,
    "nb",
    "https://test.ndla.no",
    tNB,
  );

  expect(englishCopyString).toEqual(
    "Etternavn, A., Person, B., Stor Bedrift. (2017, June 5). Title. NDLA. https://test.ndla.no/path/123",
  );
  expect(norwegianCopyString).toEqual(
    "Etternavn, A., Person, B., Stor Bedrift. (2017, 5. juni). Tittel. NDLA. https://test.ndla.no/path/123",
  );
});
