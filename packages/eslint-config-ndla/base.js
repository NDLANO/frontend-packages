module.exports = {
  extends: ['react-app'],
  plugins: ['react-hooks'],
  rules: {
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/export': 'warn',
    'import/no-cycle': ['warn', { maxDepth: Infinity }],
    'react/no-unused-state': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
