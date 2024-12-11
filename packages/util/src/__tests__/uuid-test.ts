/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { uuid } from "../index";

test("@ndla/util/uuid sanity test", () => {
  expect(uuid()).not.toEqual(uuid());
});
