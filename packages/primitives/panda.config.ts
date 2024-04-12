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
  preflight: false,
  jsxStyleProps: "minimal",

  // The extension for the emitted JavaScript files
  outExtension: "mjs",
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./src/**/*.stories.{js,jsx,ts,tsx}"],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // TODO: This might produce large css files regardless of whether the consumer uses panda or not.
  // Research later
  staticCss: {
    recipes: "*",
  },

  // The output directory for your css system
  outdir: "../styled-system",
  importMap: "@ndla/styled-system",
  // The JSX framework to use
  jsxFramework: "react",

  // The CSS Syntax to use to use
  syntax: "object-literal",
  // TODO: This is a temporary workaround caused by panda using css layers. A consequence of this is that our global css always "wins". It can be removed once we no longer rely on `ndla/core`.
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return content.replace("@layer utilities", "body");
      }
    },
  },
});
