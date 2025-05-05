/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Range, type Descendant } from "slate";
import { createSlate } from "../editor/createSlate";
import { createPlugin } from "../core/createPlugin";
import { sectionPlugin } from "../plugins/section/sectionPlugin";
import { paragraphPlugin } from "../plugins/paragraph/paragraphPlugin";
import { breakPlugin } from "../plugins/break/breakPlugin";

describe("createSlate", () => {
  describe("normalizeInitialValue", () => {
    it("does not crash if a plugin is just a regular function", () => {
      const editor = createSlate({
        plugins: [(editor) => editor],
      });
      expect(editor).toBeTruthy();
    });
    it("does not run normalizeInitialValue if the editor has no initial value", () => {
      const updatedValue: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Hello" }] }] },
      ] as const;
      const editor = createSlate({
        plugins: [
          createPlugin({
            name: "test",
            normalizeInitialValue: (editor) => {
              editor.children = updatedValue;
              return true;
            },
          }),
        ],
      });
      expect(editor.children).toEqual([]);
    });
    it("runs if the editor has an initial value", () => {
      const value: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Hello" }] }] },
      ] as const;

      const expected: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Updated" }] }] },
      ] as const;

      const editor = createSlate({
        value: value,
        plugins: [
          (editor) => editor,
          createPlugin({
            name: "test",
            normalizeInitialValue: (editor) => {
              editor.children = expected;
              return true;
            },
          }),
        ],
      });
      expect(editor.children).toEqual(expected);
    });
    it("can be overriden with configure", () => {
      const value: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Hello" }] }] },
      ] as const;

      const expected: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Updated" }] }] },
      ] as const;

      const testPlugin = createPlugin({
        name: "test",
        normalizeInitialValue: (editor) => {
          editor.children.push({ type: "section", children: [{ type: "paragraph", children: [{ text: "Add" }] }] });
          return true;
        },
      });
      const editor = createSlate({
        value: value,
        plugins: [
          (editor) => editor,
          testPlugin.configure({
            normalizeInitialValue: (editor) => {
              //@ts-expect-error - this is a test
              editor.children[0].children[0].children[0].text = "Updated";
              return true;
            },
            override: {
              normalizeInitialValue: true,
            },
          }),
        ],
      });
      expect(editor.children).toEqual(expected);
    });
    it("can run both the original and the `configure` normalizeInitialValue", () => {
      const value: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Hello" }] }] },
      ] as const;

      const expected: Descendant[] = [
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Updated" }] }] },
        { type: "section", children: [{ type: "paragraph", children: [{ text: "Add" }] }] },
      ] as const;
      const testPlugin = createPlugin({
        name: "test",
        normalizeInitialValue: (editor) => {
          editor.children.push({ type: "section", children: [{ type: "paragraph", children: [{ text: "Add" }] }] });
          return true;
        },
      });
      const editor = createSlate({
        value: value,
        plugins: [
          (editor) => editor,
          testPlugin.configure({
            normalizeInitialValue: (editor) => {
              //@ts-expect-error - this is a test
              editor.children[0].children[0].children[0].text = "Updated";
              return true;
            },
          }),
        ],
      });
      expect(editor.children).toEqual(expected);
    });
  });
  describe("supportsElement", () => {
    it("returns false if no plugins are registered", () => {
      const editor = createSlate({});
      const result = editor.supportsElement({ type: "paragraph", children: [{ text: "" }] });
      expect(result).toBe(false);
    });
    it("returns true if a plugin supports the element", () => {
      const editor = createSlate({ plugins: [createPlugin({ name: "test", type: "paragraph" })] });
      const result = editor.supportsElement({ type: "paragraph", children: [{ text: "" }] });
      expect(result).toBe(true);
    });
    it("returns false if a plugin does not support the element", () => {
      const editor = createSlate({ plugins: [createPlugin({ name: "test", type: "section" })] });
      const result = editor.supportsElement({ type: "paragraph", children: [{ text: "" }] });
      expect(result).toBe(false);
    });
  });
  describe("restoreFocus", () => {
    it("restores focus when the editor is reinitialized", () => {
      const value: Descendant[] = [
        {
          type: "section",
          children: [
            { type: "paragraph", children: [{ text: "Hello 1" }] },
            { type: "paragraph", children: [{ text: "Hello 2" }] },
            { type: "paragraph", children: [{ text: "Hello 3" }] },
          ],
        },
      ] as const;

      const editor = createSlate({
        value,
        shouldNormalize: true,
      });

      const expected: Range = {
        anchor: { path: [0, 1, 0], offset: 3 },
        focus: { path: [0, 1, 0], offset: 3 },
      };

      editor.selection = expected;

      editor.reinitialize({ value: value, restoreSelection: true });
      expect(editor.selection).toEqual(expected);
    });

    it("retains expanded ranges when reinitializing", () => {
      const value: Descendant[] = [
        {
          type: "section",
          children: [
            { type: "paragraph", children: [{ text: "Hello 1" }] },
            { type: "paragraph", children: [{ text: "Hello 2" }] },
            { type: "paragraph", children: [{ text: "Hello 3" }] },
          ],
        },
      ] as const;

      const editor = createSlate({
        value,
        shouldNormalize: true,
      });

      const expected: Range = {
        anchor: { path: [0, 1, 0], offset: 3 },
        focus: { path: [0, 2, 0], offset: 5 },
      };

      editor.selection = expected;

      editor.reinitialize({ value: value, restoreSelection: true });
      expect(editor.selection).toEqual(expected);
    });
    it("moves the selection to the next path if the selected element is a block element", () => {
      const value: Descendant[] = [
        {
          type: "section",
          children: [
            { type: "paragraph", children: [{ text: "Hello 1" }] },
            { type: "paragraph", children: [{ text: "Hello 2" }] },
            // not really a focusable element, but we don't have any other void block elements in frontend-packages
            { type: "br", children: [{ text: "" }] },
            { type: "paragraph", children: [{ text: "Hello 3" }] },
          ],
        },
      ] as const;

      const editor = createSlate({
        value,
        plugins: [sectionPlugin, paragraphPlugin, breakPlugin],
        shouldNormalize: true,
      });

      editor.selection = {
        anchor: { path: [0, 2, 0], offset: 0 },
        focus: { path: [0, 2, 0], offset: 0 },
      };

      editor.reinitialize({ value, restoreSelection: true });

      expect(editor.selection).toEqual({
        anchor: { path: [0, 3, 0], offset: 0 },
        focus: { path: [0, 3, 0], offset: 0 },
      });
    });
  });
});
