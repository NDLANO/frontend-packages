/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import {
  contributorTypes,
  contributorGroups,
  mkContributorString,
  getGroupedContributorDescriptionList,
} from "../contributorTypes";

test("ContributorTypes keys is the same for each supported language", () => {
  const enLength = Object.keys(contributorTypes.en);
  const nbLength = Object.keys(contributorTypes.nb);
  expect(enLength).toEqual(nbLength);
});

test("Each contributor type in a contributor group has a valid translation", () => {
  contributorGroups.processors.forEach((processor) => {
    expect(contributorTypes.en[processor]).toBeDefined();
    expect(contributorTypes.nb[processor]).toBeDefined();
  });

  contributorGroups.creators.forEach((creator) => {
    expect(contributorTypes.en[creator]).toBeDefined();
    expect(contributorTypes.nb[creator]).toBeDefined();
  });

  contributorGroups.rightsholders.forEach((rightsholder) => {
    expect(contributorTypes.en[rightsholder]).toBeDefined();
    expect(contributorTypes.nb[rightsholder]).toBeDefined();
  });
});

const contributorList = [
  {
    type: "Director",
    name: "Francis Ford Coppola",
  },
  {
    type: "Linguistic",
    name: "Mario Puzo",
  },
  {
    type: "Rightsholder",
    name: "Paramount Pictures",
  },
  {
    type: "Distributor",
    name: "Alfran Productions",
  },
];

test("Makes a translated comma seperated contributor string", () => {
  const contributorStringNb = mkContributorString(contributorList, "nb");
  expect(contributorStringNb).toMatchSnapshot();
  const contributorStringEn = mkContributorString(contributorList, "en");
  expect(contributorStringEn).toMatchSnapshot();
});

test("Makes a translated comma separated contributor string (ignores rightsholder prefix)", () => {
  const contributorString = mkContributorString(contributorList, "nb", "rightsholder");
  expect(contributorString).toMatchSnapshot();
});

test("Get a grouped contributor description list for each supported language", () => {
  const copyright = {
    creators: [
      {
        type: "Director",
        name: "Francis Ford Coppola",
      },
    ],
    processors: [
      {
        type: "Processor",
        name: "Francis Ford Coppola",
      },
      {
        type: "Linguistic",
        name: "Mario Puzo",
      },
    ],
    rightsholders: [
      {
        type: "Rightsholder",
        name: "Paramount Pictures",
      },
      {
        type: "Distributor",
        name: "Alfran Productions",
      },
    ],
  };

  expect(getGroupedContributorDescriptionList(copyright, "nb")).toMatchSnapshot();
  expect(getGroupedContributorDescriptionList(copyright, "en")).toMatchSnapshot();
});
