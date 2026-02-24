/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { wordClass } from "@ndla/ui";
import { describe } from "vitest";
import { translationHelper } from "./i18nTestInstance";

describe("all word classes should have a translation", () => {
  translationHelper(Object.keys(wordClass).map((key) => `wordClass.${key}`));
});
