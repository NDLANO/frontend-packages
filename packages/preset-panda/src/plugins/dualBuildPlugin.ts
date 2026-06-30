/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ArtifactId, CodegenArtifact, CodegenFile, PandaPlugin } from "@pandacss/types";

export const dualBuildPlugin: PandaPlugin = {
  name: "dual-build",
  hooks: {
    // We need to support both esm and cjs. This allows us to transpile the esm output to cjs. TODO: Remove this once we fully transition to esm.
    "codegen:prepare": (config) => {
      const newArtifacts = config.artifacts.reduce<CodegenArtifact[]>((acc, artifact) => {
        const [regularFiles, typeFiles] = artifact.files.reduce<[CodegenFile[], CodegenFile[]]>(
          (acc, curr) => {
            if (curr.path.endsWith("d.ts")) acc[1].push(curr);
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
          files: typeFiles.map((file) => ({ ...file, path: `../lib/${file.path}` })),
        });

        return acc;
      }, []);

      config.artifacts = newArtifacts;

      return config.artifacts;
    },
  },
};
