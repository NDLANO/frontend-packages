/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(tsx|mdx|jsx)', '../stories/**/*.stories.@(tsx|mdx)'],
  staticDirs: ['static'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    {
      name: '@storybook/addon-styling',
      options: {
        sass: {
          implementation: require('sass'),
        },
      },
    },
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  babel: async (options) => {
    return {
      ...options,
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-typescript',
        ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
      ],
      plugins: [['@emotion', { autoLabel: 'always' }]],
    };
  },
  /* For at "Show code" skal legge seg bakerst slik at elementer som drop-down ikke blir skjult bak den */
  previewHead: (head) => `
  <style>
    .docs-story div:has(.docblock-code-toggle) {
      z-index: 0 !important;
    }
  </style>
  ${head}`,
  docs: {
    autodocs: 'tag',
  },
};

export default config;
