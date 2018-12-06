module.exports = {
  extends: ['react-app'],
  rules: {
    'import/order': ['warn', { groups: [['builtin', 'external', 'internal']] }],
    'import/export': 'warn',
    'import/no-cycle': ['warn', { maxDepth: Infinity }],
    'react/no-unused-state': 'warn',
  },
};
