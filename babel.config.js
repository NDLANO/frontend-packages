module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: {
          browsers: ["> 0.25%", "not dead"],
        },
      },
    ],
    "@babel/preset-typescript",
    ["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }],
  ],
  plugins: [["@emotion", { autoLabel: "always" }]],
  env: {
    test: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: {
              node: "current",
            },
          },
        ],
      ],
    },
  },
};
