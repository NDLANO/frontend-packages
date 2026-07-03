/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import type { Artifact, ArtifactId } from "@pandacss/types";
import preset from "./src";
import { forwardCssPropPlugin } from "./src/plugins/forwardCssPropPlugin";

export default defineConfig({
  presets: [preset],
  preflight: false,
  jsxStyleProps: "minimal",
  strictPropertyValues: true,
  shorthands: false,
  outExtension: "js",
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: ["./src/**/*.stories.{js,jsx,ts,tsx}", "./src/**/*-test.{js,jsx,ts,tsx}"],
  importMap: "@ndla/styled-system",
  outdir: "../styled-system/src",
  jsxFramework: "react",
  syntax: "object-literal",
  plugins: [forwardCssPropPlugin()],
  hooks: {
    "codegen:prepare": async (config) => {
      config.artifacts = config.artifacts.flatMap<Artifact>((artifact) => {
        if (artifact.id === "types-entry") {
          const indexFile = artifact.files.find((f) => f.file === "index.d.ts");
          if (indexFile?.code && !indexFile.code.includes("export * from './prop-type'")) {
            indexFile.code = indexFile.code.concat("\nexport * from './prop-type';");
          }
        }

        const typeFiles = artifact.files.filter((f) => f.file.endsWith("d.ts"));

        return [
          artifact,
          {
            id: (artifact.id + "-types") as ArtifactId,
            dir: artifact.dir?.map((p, i) => (i === 1 ? p.replace("/src", "/dist") : p)),
            files: typeFiles,
          },
        ];
      });

      return config.artifacts;
    },
  },
});
