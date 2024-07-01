module.exports = {
  extends: "./packages/eslint-config-ndla/index.js",
  rules: {
    "import/no-extraneous-dependencies": 0,
  },
  ignorePatterns: ["packages/styled-system"],
};
