/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // Use ts-jest for typescript tests: https://kulshekhar.github.io/ts-jest/user/babel7-or-ts#no-type-checking
    "^.+\\.(ts|tsx)$": [
      "ts-jest",
      {
        useESM: true,
        isolatedModules: true,
      },
    ],
  },
  moduleNameMapper: {
    // @ndla/styled-system has a different structure from our other packages
    "@ndla/styled-system/(.+)$": "<rootDir>packages/styled-system/src/$1",
    // Fix for @ndla/icons.
    "@ndla/(.+)/(.+)$": "<rootDir>packages/$1/src/$2",
    "@ndla/(.+)$": ["<rootDir>packages/$1/src", "<rootDir>packages/ndla-$1/src"],
  },
  testRegex: "/packages/.*/src/.*__tests__/.*-test.(js|jsx|ts|tsx)$",
};
