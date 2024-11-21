/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../packages/**/*.stories.@(tsx|jsx)", "../stories/**/*.stories.@(tsx|jsx)"],
  staticDirs: ["static"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-viewport",
    "@storybook/addon-docs",
    "@storybook/addon-controls",
    "@storybook/addon-backgrounds",
    "@storybook/addon-toolbars",
    "@storybook/addon-measure",
    "@storybook/addon-outline",
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    // uncomment this for quicker HMR during dev.
    // reactDocgen: "react-docgen",
  },
  framework: "@storybook/react-vite",
  /* For at "Show code" skal legge seg bakerst slik at elementer som drop-down ikke blir skjult bak den */
  previewHead: (head) => `
  <style>
    .docs-story div:has(.docblock-code-toggle) {
      z-index: 0 !important;
    }
  </style>
  ${head}`,
  docs: {
    autodocs: "tag",
  },
};

export default config;
