module.exports = {
  extends: [
    './base',
  ].map(require.resolve),
  env: {
    browser: true,
  },
};
