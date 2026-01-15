/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { mkContributorString, getGroupedContributorDescriptionList } from "../contributorTypes";

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
