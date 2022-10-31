/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

module.exports = {
  stories: ['../stories/index.ts', '../../**/*.stories.@(tsx|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        transcludeMarkdown: true,
        babelOptions: {},
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
  framework: '@storybook/react',

  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      loaders: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: './.storybook/postcss.config.js',
            },
          },
        },
        'sass-loader',
      ],
    });
    return config;
  },
  babel: async (options) => {
    return {
      ...options,
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
      ],
      plugins: [
        ['@emotion', { autoLabel: 'always' }],
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-optional-chaining',
      ],
    };
  },
};
