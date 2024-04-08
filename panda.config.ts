/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import basePreset from "@pandacss/preset-base";
import { preset } from "./packages/primitives/src/preset";

export default defineConfig({
  presets: [basePreset, preset],
  importMap: "@ndla/styled-system",
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ["./packages/*/src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: [],
  jsxFramework: "react",
  // The output directory for your css system
  outdir: "styled-system",
  staticCss: {
    recipes: "*",
  },
  // TODO: This is a temporary workaround caused by panda using css layers. A consequence of this is that our global css always "wins". It can be removed once we no longer rely on `ndla/core`.
  hooks: {
    "cssgen:done": ({ artifact, content }) => {
      if (artifact === "styles.css") {
        return content.replace("@layer utilities", "body");
      }
    },
  },
});
