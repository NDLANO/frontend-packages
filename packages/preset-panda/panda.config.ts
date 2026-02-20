/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { defineConfig } from "@pandacss/dev";
import type { ArtifactContent, Artifact, ArtifactId } from "@pandacss/types";
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
    // We need to support both esm and cjs. This allows us to transpile the esm output to cjs. TODO: Remove this once we fully transition to esm.
    "codegen:prepare": async (config) => {
      const newArtifacts = config.artifacts.reduce<Artifact[]>((acc, artifact) => {
        if (artifact.id === "types-entry") {
          const indexFile = artifact.files.find((f) => f.file === "index.d.ts");
          if (indexFile?.code && !indexFile.code.includes("export * from './prop-type'")) {
            indexFile.code = indexFile.code.concat("\nexport * from './prop-type';");
          }
        }
        const [regularFiles, typeFiles] = artifact.files.reduce<[ArtifactContent[], ArtifactContent[]]>(
          (acc, curr) => {
            if (curr.file.endsWith("d.ts")) acc[1].push(curr);
            else acc[0].push(curr);

            return acc;
          },
          [[], []],
        );

        acc.push({
          ...artifact,
          files: regularFiles.concat(typeFiles),
        });

        acc.push({
          id: (artifact.id + "-types") as ArtifactId,
          dir: artifact.dir?.map((path, index) => (index === 1 ? path.replace("/src", "/lib") : path)),
          files: typeFiles,
        });

        return acc;
      }, []);

      config.artifacts = newArtifacts;

      return config.artifacts;
    },
  },
});
