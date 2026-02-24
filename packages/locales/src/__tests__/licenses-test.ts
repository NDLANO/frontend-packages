/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { contributorTypes } from "@ndla/licenses";
import { describe } from "vitest";
import { translationHelper } from "./i18nTestInstance";

describe("license translations", () => {
  describe("should have translations for all contributor types", () => {
    translationHelper(Object.keys(contributorTypes));
  });
});
