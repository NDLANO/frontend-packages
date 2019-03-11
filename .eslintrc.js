module.exports = {
  extends: './packages/eslint-config-ndla/index.js',
  plugins: ['emotion'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'emotion/no-vanilla': 'error',
    'emotion/import-from-emotion': 'error',
    'emotion/styled-import': 'error',
  },
};
