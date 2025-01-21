/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { inlineContentToEditorValue, blockContentToEditorValue } from "../deserializeFromHtml";
import { blockContentToHTML, inlineContentToHTML } from "../serializeToHtml";

const contentHTML = `<section><h2>Lorem ipsum</h2></section>`;

const contentHTMLWithSections = `<section><h2>Section 1</h2></section><section><h2>Section 2</h2></section><section><h2>Section 3</h2></section>`;
const mustBeWrappedHtml = `<section><h2>Section 1</h2><aside>Some text that slate wants to delete <div><em>blabla</em></div></aside></section><section><h2>Section 2</h2></section><section><h2>Section 3</h2></section>`;

test("articleContentConverter convert topic article content to and from editorValue", () => {
  // Todo fix test to handle empty text nodes
  const editorValue = inlineContentToEditorValue(contentHTML);
  const html = inlineContentToHTML(editorValue);
  expect(html).toMatchSnapshot();
});

test("articleContentConverter convert learningresource content to and from editorValue", () => {
  const editorValue = blockContentToEditorValue(contentHTML);
  const html = blockContentToHTML(editorValue);
  expect(html).toMatchSnapshot();
});

test("articleContentConverter convert learningresource content", () => {
  const editorValue = blockContentToEditorValue(contentHTML);
  expect(editorValue[0]).toMatchSnapshot();
});

test("articleContentConverter convert learningresource content with multiple sections to and from editorValue", () => {
  const editorValue = blockContentToEditorValue(contentHTMLWithSections);
  const html = blockContentToHTML(editorValue);
  expect(html).toMatchSnapshot();
});

test("articleContentConverter convert article that is a mix of inline and block object by wrapping the inline", () => {
  const editorValue = blockContentToEditorValue(mustBeWrappedHtml);

  const html = blockContentToHTML(editorValue);
  expect(html).toMatchSnapshot();
});
