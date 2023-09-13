module.exports = {
  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
  testEnvironment: 'jsdom',
  maxWorkers: '50%',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
    // Use ts-jest for typescript tests: https://kulshekhar.github.io/ts-jest/user/babel7-or-ts#no-type-checking
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    // Fix for ndla-icons. Should be changed '<rootDir>packages/$1/src/$2' when ndla-icons folder is renamed to icons
    '@ndla/(.+)/(.+)$': '<rootDir>packages/ndla-$1/src/$2',
    '@ndla/(.+)$': ['<rootDir>packages/$1/src', '<rootDir>packages/ndla-$1/src'],
  },
  testRegex: '/packages/.*/src/.*__tests__/.*-test.(js|jsx|ts|tsx)$',
  snapshotSerializers: ['@emotion/jest/serializer'],
};
