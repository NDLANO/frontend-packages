/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import { preset } from "./src/preset";

export default defineConfig({
  presets: ["@pandacss/dev/presets", preset],
  // Whether to use css reset
  preflight: true,

  // The extension for the emitted JavaScript files
  outExtension: "mjs",
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  staticCss: {
    recipes: {
      button: ["*"],
    },
  },

  // The output directory for your css system
  outdir: "../styled-system",
  importMap: {
    css: "@ndla/styled-system/css",
    recipes: "@ndla/styled-system/recipes",
    patterns: "@ndla/styled-system/patterns",
    jsx: "@ndla/styled-system/jsx",
  },
  // The JSX framework to use
  jsxFramework: "react",

  // The CSS Syntax to use to use
  syntax: "object-literal",
});
