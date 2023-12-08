/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Heavily inspired from create-react-app's ESLint config, but adapted to be more strict.

const restrictedGlobals = require('confusing-browser-globals');
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  root: true,
  parser: '@babel/eslint-parser',
  plugins: ['react', 'react-hooks', 'import', 'jsx-a11y', 'lodash'],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    sourceType: 'module',
    requireConfigFile: false,
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          '@ndla/*/lib/**',
          '@ndla/*/lib',
          '@ndla/*/es/**',
          '@ndla/*/es',
          '@ndla/*/src/**',
          '@ndla/*/src',
          '@ndla/*/build/*',
        ],
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'array-callback-return': 'warn',
    'default-case': 'warn',
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'smart'],
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-eval': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-implied-eval': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-labels': ['warn', { allowLoop: true, allowSwitch: false }],
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-operators': [
      'warn',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof'],
        ],
        allowSamePrecedence: false,
      },
    ],
    'no-multi-str': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-script-url': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-throw-literal': 'warn',
    'no-restricted-globals': ['error'].concat(restrictedGlobals),
    'no-unused-expressions': 'error',
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': [
      'warn',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-whitespace-before-property': 'warn',
    'rest-spread-spacing': ['warn', 'never'],
    strict: ['warn', 'never'],
    'no-restricted-properties': [
      'error',
      {
        object: 'require',
        property: 'ensure',
        message: 'Please use import instead',
      },
      {
        object: 'System',
        property: 'import',
        message: 'Please use import() instead',
      },
    ],

    'import/first': 'error',
    'import/no-amd': 'error',
    'import/no-duplicates': 'error',
    'import/no-anonymous-default-export': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: ['builtin', 'external', 'internal'],
        pathGroupsExcludedImportTypes: [],
        pathGroups: [
          { pattern: '@ndla/**', group: 'internal', position: 'before', patternOptions: { matchBase: true } },
          {
            pattern: '@*/**',
            group: 'external',
            position: 'after',
            patternOptions: { matchBase: true },
          },
        ],
      },
    ],
    'import/no-cycle': ['warn', { maxDepth: Infinity }],

    'lodash/import-scope': [2, 'method'],

    'react/no-unused-state': 'warn',
    'react/button-has-type': 'error',
    'react/jsx-pascal-case': 'warn',
    'react/style-prop-object': 'warn',
    'react/jsx-uses-react': 'error',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/no-unescaped-entities': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',
  },

  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ['@typescript-eslint'],
      rules: {
        'default-case': 'off',
        'no-dupe-class-members': 'off',
        'no-undef': 'off',
        camelcase: 'off',
        indent: 'off',
        'react/prop-types': 'off',
        'no-array-constructor': 'off',
        'no-redeclare': 'off',
        '@typescript-eslint/no-redeclare': 'warn',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'warn',
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        'no-unused-expressions': 'off',
        '@typescript-eslint/no-unused-expressions': [
          'error',
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'warn',
        '@typescript-eslint/consistent-type-assertions': 'warn',
        'prefer-rest-params': 'off',
      },
    },
  ],
};
