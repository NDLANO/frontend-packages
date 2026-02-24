/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { test, expect } from "vitest";
import { getResourceTypeNamespace } from "../CCRel";

test("microData/getResourceTypeNamespace when type video should return video namespace", () => {
  const namespace = getResourceTypeNamespace("video");
  expect(namespace).toBe("http://purl.org/dc/dcmitype/MovingImage");
});

test("microData/getResourceTypeNamespace when unknown type should return null", () => {
  //@ts-expect-error - This tests for an unknown type
  const namespace = getResourceTypeNamespace("UNKNOWN");
  expect(namespace).toBe(null);
});
