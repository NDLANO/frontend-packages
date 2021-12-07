module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    '@babel/preset-typescript',
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop',
  ],
  plugins: [
    'polished',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
        importSource: '@emotion/core',
      },
    ],
  ],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    },
  },
};
