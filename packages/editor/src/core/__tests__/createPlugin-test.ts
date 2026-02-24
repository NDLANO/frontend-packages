/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { describe, expect, it } from "vitest";
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

  it("should allow to configure an already configured plugin", () => {
    const originalPlugin = createPlugin({
      name: "test",
      options: {
        foo: [1],
      },
    });

    const configured = originalPlugin.configure({
      options: {
        foo: { value: [1, 2], override: true },
      },
    });

    const reconfigured = configured.configure({
      options: {
        foo: { value: [1, 2, 3], override: true },
      },
    });
    const editor = createSlate({ plugins: [reconfigured] });
    expect(editor.pluginOptions.get("test")).toEqual({ foo: [1, 2, 3] });
  });
});
