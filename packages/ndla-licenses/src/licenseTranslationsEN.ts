/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { rights, type LicenseRight } from "./licenseRights";

export const licenseRights = {
  [rights.BY]: {
    title: "Attribution",
    description: "The work's creator have to be named",
  },
  [rights.SA]: {
    title: "Share with same license",
    description: "You should share only under a license identical to the license that governs the original work.",
  },
  [rights.NC]: {
    title: "Non Commercial",
    description: "The work can not be used commercially.",
  },
  [rights.ND]: {
    title: "NO DERIVES",
    description: "The work can only be used as is.",
  },
  [rights.PD]: {
    title: "Public Domain",
    description: "The work is free of all known.",
  },
  [rights.CC0]: {
    title: "Public Domain Dedication",
    description: "The work is given the public and the Creator has given up all rights, also attribution.",
  },
  [rights.COPYRIGHTED]: {
    title: "Copyright",
    description: "Only the creator can derive, publish, or license the work. It can not be shared without permission.",
  },
  [rights.CC]: {
    title: "Creative Commons",
    description: "Rights for reuse and sharing of content:",
  },
  [rights.NA]: {
    title: "N/A - not applicable",
    description: "This mark is intended for content that does not require a license.",
  },
} satisfies Record<LicenseRight, object>;
