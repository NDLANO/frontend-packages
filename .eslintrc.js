module.exports = {
  extends: "ndla",
  plugins: ["prettier"],
  rules: {
    "import/no-extraneous-dependencies": 0, // Should be enabled when https://github.com/benmosher/eslint-plugin-import/issues/458 is closed
    "prettier/prettier": [
      "error",
      {
        jsxBracketSameLine: true,
        singleQuote: true,
        trailingComma: "all"
      }
    ]
  },
};
