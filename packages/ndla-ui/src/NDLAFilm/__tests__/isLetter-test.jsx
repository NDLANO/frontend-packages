/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { isLetter } from "../isLetter";

test("Check is letter", () => {
  expect(isLetter("A")).toBe(true);
  expect(isLetter("1")).toBe(false);
  expect(isLetter("æ")).toBe(true);
  expect(isLetter("?")).toBe(false);
  expect(isLetter("!")).toBe(false);
  expect(isLetter(" ")).toBe(false);
});
