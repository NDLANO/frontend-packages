/* eslint-disable */
module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    'no-constant-condition': [2, { checkLoops: false }],

    'react/jsx-filename-extension': [0, { extensions: ['.js', '.jsx'] }],
    'react/forbid-prop-types': 1,
    'react/no-unused-prop-types': 0,
    'react/no-danger': 0,
    'react/require-default-props': 0,

    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
/* eslint-enable */
