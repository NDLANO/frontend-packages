/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default {
  versionGroups: [
    {
      dependencies: ["**"],
      dependencyTypes: ["peer"],
      isIgnored: true,
    },
  ],
} satisfies import("syncpack").RcFile;
