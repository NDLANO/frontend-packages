/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { readFileSync } from "fs";
import path from "path";
import { defineConfig } from "tsdown";

const pkgRoot = typeof __dirname === "undefined" ? import.meta.dirname : __dirname;
export function getExternalDeps(pkgDir: string) {
  const pkgJson = JSON.parse(readFileSync(path.join(pkgDir, "package.json"), "utf-8"));
  return [...Object.keys(pkgJson.dependencies || {}), ...Object.keys(pkgJson.peerDependencies || {})];
}

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  silent: true,
  outDir: "dist",
  outputOptions: (options, format) => {
    if (format === "es") {
      return {
        ...options,
        dir: "es",
        entryFileNames: "[name].mjs",
      };
    } else {
      return {
        ...options,
        dir: "lib",
        entryFileNames: "[name].js",
      };
    }
  },
  dts: false,
  sourcemap: true,
  clean: false,
  treeshake: true,
  external: getExternalDeps(pkgRoot),
  target: "es2022",
  unbundle: true,
});
