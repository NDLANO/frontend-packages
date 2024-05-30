/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import preset from "./packages/preset-panda/src/";

export default defineConfig({
  presets: [preset],
  importMap: "@ndla/styled-system",
  preflight: true,
  strictPropertyValues: true,
  include: ["./packages/*/src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  jsxFramework: "react",
  outdir: "styled-system",
  // TODO: We polyfill for now to not have our styles overriden by core .scss
  polyfill: true,
});
