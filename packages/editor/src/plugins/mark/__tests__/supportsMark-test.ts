/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { describe, it, expect } from "vitest";
import { createSlate } from "../../../editor/createSlate";
import { markPlugin } from "../markPlugin";

describe("supportsMark", () => {
  it("should return true for supported marks", () => {
    const editor = createSlate({
      plugins: [markPlugin],
    });

    expect(editor.supportsMark("bold")).toBe(true);
    expect(editor.supportsMark("italic")).toBe(true);
    expect(editor.supportsMark("code")).toBe(true);
    expect(editor.supportsMark("underlined")).toBe(true);
    expect(editor.supportsMark("sup")).toBe(true);
    expect(editor.supportsMark("sub")).toBe(true);
  });
  it("should return true for multiple supported marks", () => {
    const editor = createSlate({
      plugins: [markPlugin],
    });
    expect(editor.supportsMark(["bold", "italic", "code", "underlined", "sub", "sub"])).toBe(true);
  });
  it("should return false for unsupported marks", () => {
    const editor = createSlate({
      plugins: [markPlugin],
    });

    // @ts-expect-error: Testing unsupported mark
    expect(editor.supportsMark("strike")).toBe(false);
  });
  it("should return false for mixed marks", () => {
    const editor = createSlate({
      plugins: [markPlugin],
    });

    // @ts-expect-error: Testing unsupported marks
    expect(editor.supportsMark(["bold", "italic", "strike"])).toBe(false);
  });
  it("should return false for disabled marks", () => {
    const editor = createSlate({
      plugins: [markPlugin.configure({ options: { supportedMarks: { value: ["bold", "italic"], override: true } } })],
    });

    expect(editor.supportsMark("bold")).toBe(true);
    expect(editor.supportsMark("italic")).toBe(true);
    expect(editor.supportsMark("code")).toBe(false);
    expect(editor.supportsMark("underlined")).toBe(false);
    expect(editor.supportsMark("sup")).toBe(false);
    expect(editor.supportsMark("sub")).toBe(false);
  });
});
