/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import preset from "./src";
import { forwardCssPropPlugin } from "./src/plugins/forwardCssPropPlugin";

export default defineConfig({
  presets: [preset],
  preflight: false,
  jsxStyleProps: "minimal",
  strictPropertyValues: true,
  shorthands: false,
  outExtension: "mjs",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./src/**/*.stories.{js,jsx,ts,tsx}"],
  importMap: "@ndla/styled-system",
  outdir: "../styled-system",
  jsxFramework: "react",
  syntax: "object-literal",
  plugins: [forwardCssPropPlugin()],
});
