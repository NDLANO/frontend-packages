/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "tsup";
import path from "path";
import { readFileSync } from "fs";

const pkgRoot = __dirname;
export function getExternalDeps(pkgDir: string) {
  const pkgJson = JSON.parse(readFileSync(path.join(pkgDir, "package.json"), "utf-8"));
  return [...Object.keys(pkgJson.dependencies || {}), ...Object.keys(pkgJson.peerDependencies || {})];
}

export default defineConfig((options) => ({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  outDir: "dist",
  dts: false,
  sourcemap: true,
  clean: false,
  watch: options.watch,
  treeshake: true,
  external: getExternalDeps(pkgRoot),
  target: "es2022",
}));
