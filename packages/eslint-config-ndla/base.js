module.exports = {
  extends: ['react-app'],
  plugins: ['react-hooks'],
  rules: {
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/export': 'warn',
    'import/no-cycle': ['warn', { maxDepth: Infinity }],
    'react/no-unused-state': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
  // remove when https://github.com/facebook/create-react-app/pull/6513 is merged
  overrides: {
    files: ['**/*.ts', '**/*.tsx'],
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
      camelcase: 'off',
      indent: 'off',
      'react/prop-types': 'off',
      'no-array-constructor': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'none',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
};
