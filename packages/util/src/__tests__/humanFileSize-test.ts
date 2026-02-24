/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { describe, it, expect } from "vitest";
import { humanFileSize } from "../humanFileSize";

describe("humanFileSize", () => {
  it("handles bytes", () => {
    expect(humanFileSize(250, "nb")).toEqual("250 B");
  });

  it("handles kilobytes", () => {
    expect(humanFileSize(1000, "nb")).toEqual("1 kB");
  });

  it("handles megabytes", () => {
    expect(humanFileSize(1000000, "nb")).toEqual("1 MB");
  });

  it("handles border values", () => {
    expect(humanFileSize(999999, "nb")).toEqual("1 000 kB");
    expect(humanFileSize(1000000, "nb")).toEqual("1 MB");
    expect(humanFileSize(1001000, "nb")).toEqual("1 MB");
  });

  it("rounds to two decimal places", () => {
    expect(humanFileSize(1234567, "nb")).toEqual("1,23 MB");
  });
});
