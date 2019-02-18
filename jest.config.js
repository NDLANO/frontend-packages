module.exports = {
  setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
  testRegex: '/packages/.*/src/.*__tests__/.*-test.(js|jsx)$',
  snapshotSerializers: ['jest-emotion/serializer'],
};
