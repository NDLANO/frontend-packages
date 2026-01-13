/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { subjectCategories, subjectTypes } from "@ndla/ui";
import { translationHelper } from "./i18nTestInstance";

describe("constant translations", () => {
  describe("should contain translations for all subject types", () => {
    translationHelper(Object.values(subjectTypes).map((key) => `subjectTypes.${key}`));
  });
  describe("should contain translations for all subject categories", () => {
    translationHelper(Object.values(subjectCategories).map((key) => `subjectCategories.${key}`));
  });
});
