/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { test, expect } from "vitest";
import { i18nInstance } from "../../../../testUtils/i18nTestInstance";
import {
  figureApa7CopyString,
  webpageReferenceApa7CopyString,
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
  const creditString = getCreditString({ creators: [roles[0]] });
  expect(creditString).toEqual("Etternavn, A. L. ");
});

test("getCreditString returns correct string for two people", () => {
  const creditString = getCreditString({ creators: roles.slice(0, 2) });
  expect(creditString).toEqual("Etternavn, A. L., Person, B. ");
});

test("getCreditString returns correct string for three people", () => {
  const creditString = getCreditString({ creators: roles });
  expect(creditString).toEqual("Etternavn, A. L., Person, B., Test, B. ");
});

test("getCreditString uses correct role when all are present", () => {
  const creditStringWithAll = getCreditString(copyright);
  expect(creditStringWithAll).toEqual("Etternavn, A., Stor Bedrift. ");
});

test("getCreditString uses correct role when creators is missing", () => {
  const creditStringWithoutCreators = getCreditString({ rightsholders, processors });
  expect(creditStringWithoutCreators).toEqual("Stor Bedrift. ");
});

test("getCreditString uses correct role when rightsholders is missing", () => {
  const creditStringWithoutRightsholders = getCreditString({ creators, processors });
  expect(creditStringWithoutRightsholders).toEqual("Etternavn, A. ");
});

test("getCreditString uses correct role when processors is missing", () => {
  const creditStringWithoutProcessors = getCreditString({ creators, rightsholders });
  expect(creditStringWithoutProcessors).toEqual("Etternavn, A., Stor Bedrift. ");
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
