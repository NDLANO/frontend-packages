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
  preflight: true,
  importMap: "@ndla/styled-system",
  strictPropertyValues: true,
  shorthands: false,
  outExtension: "js",
  include: ["./packages/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./packages/**/*-test.{js,jsx,ts,tsx}"],
  syntax: "object-literal",
  jsxFramework: "react",
});
