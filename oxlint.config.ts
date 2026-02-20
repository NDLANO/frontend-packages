/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "oxlint";
import baseConfig from "./packages/oxlint-config/src/index.ts";

export default defineConfig({
  extends: [baseConfig],
  ignorePatterns: ["**/es/**/*", "**/lib/**/*", "**/dist/**/*", "**/styled-system/**/*", "images/**/*"],
  overrides: [
    {
      files: ["**/*.stories.{js,mjs,cjs,ts,jsx,tsx,mts,cts,mtsx,ctsx}"],
      rules: {
        "react/no-unescaped-entities": "off",
        "import-js/no-extraneous-dependencies": "off",
      },
      plugins: ["react"],
    },
    {
      files: ["**/*-test.{js,mjs,cjs,ts,jsx,tsx,mts,cts,mtsx,ctsx}", "**/__tests__/**/*"],
      rules: {
        "import-js/no-extraneous-dependencies": "off",
      },
    },
  ],
});
