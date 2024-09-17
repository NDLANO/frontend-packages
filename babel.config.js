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
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  overrides: [
    {
      exclude:
        /primitives|preset-panda|styled-system|ndla-icons|ndla-ui|audio-search|image-search|video-search|util|error-reporter|tracker/,
      plugins: [["@emotion", { autoLabel: "always" }]],
    },
  ],
  plugins: [],
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
