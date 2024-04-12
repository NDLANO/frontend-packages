/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import { preset } from "@ndla/primitives";

export default defineConfig({
  presets: [preset],
  importMap: "@ndla/styled-system",
  // Whether to use css reset
  preflight: false,
  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Files to exclude
  exclude: ["./src/**/*.stories.{js,jsx,ts,tsx}"],
  jsxFramework: "react",
  jsxStyleProps: "minimal",
  // The output directory for your css system
  outdir: "styled-system",
});
