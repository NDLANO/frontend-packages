module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    // Use ts-jest for typescript tests: https://kulshekhar.github.io/ts-jest/user/babel7-or-ts#no-type-checking
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    // @ndla/styled-system has a different structure from our other packages
    "@ndla/styled-system/(.+)$": "<rootDir>packages/styled-system/$1",
    // Fix for ndla-icons. Should be changed '<rootDir>packages/$1/src/$2' when ndla-icons folder is renamed to icons
    "@ndla/(.+)/(.+)$": "<rootDir>packages/ndla-$1/src/$2",
    "@ndla/(.+)$": ["<rootDir>packages/$1/src", "<rootDir>packages/ndla-$1/src"],
  },
  testRegex: "/packages/.*/src/.*__tests__/.*-test.(js|jsx|ts|tsx)$",
  snapshotSerializers: ["@emotion/jest/serializer"],
};
