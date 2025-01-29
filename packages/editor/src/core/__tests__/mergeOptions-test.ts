/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { MappedConfigurationOption } from "..";
import { mergeOptions } from "../mergeOptions";

interface TestOptions {
  onlyInOptions?: number;
  value?: boolean;
  arr?: string[];
}

describe("mergeOptions", () => {
  it("should prefer configuration over options", () => {
    const options: TestOptions = {
      onlyInOptions: 1,
      value: true,
    };

    const config: MappedConfigurationOption<TestOptions> = {
      value: false,
    };
    expect(mergeOptions(options, config)).toEqual({ onlyInOptions: 1, value: false });
  });

  it("should concat array values by default", () => {
    const options: TestOptions = {
      arr: ["a"],
    };

    const config: MappedConfigurationOption<TestOptions> = {
      arr: ["b"],
    };

    const valueConfig: MappedConfigurationOption<TestOptions> = {
      arr: {
        value: ["b"],
      },
    };
    expect(mergeOptions(options, config)).toEqual({ arr: ["a", "b"] });
    expect(mergeOptions(options, valueConfig)).toEqual({ arr: ["a", "b"] });
  });

  it("should override array values when override is true", () => {
    const options: TestOptions = {
      arr: ["a"],
    };

    const config: MappedConfigurationOption<TestOptions> = {
      arr: {
        value: ["b"],
        override: true,
      },
    };
    expect(mergeOptions(options, config)).toEqual({ arr: ["b"] });
  });
});
