/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createSlate } from "../../editor/createSlate";
import { createPlugin } from "../createPlugin";

describe("createPlugin", () => {
  it("should return create a new plugin whenever configure is called", () => {
    const originalPlugin = createPlugin({
      name: "test-plugin",
      options: {
        foo: ["bar"],
      },
    });
    const dupe1 = originalPlugin.configure({
      options: {
        foo: { value: ["baz"], override: true },
      },
    });
    const dupe2 = originalPlugin.configure({
      options: {
        foo: { value: ["bazzzz"], override: true },
      },
    });

    const firstEditor = createSlate({ plugins: [dupe1] });
    const secondEditor = createSlate({ plugins: [dupe2] });
    expect(firstEditor.pluginOptions.get("test-plugin")).toEqual({ foo: ["baz"] });
    expect(secondEditor.pluginOptions.get("test-plugin")).toEqual({ foo: ["bazzzz"] });
  });
});
