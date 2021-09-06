/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Remarkable } from 'remarkable';
import parse from 'html-react-parser';

export const parseMarkdown = (embeddedCaption: string) => {
  const markdown = new Remarkable({ breaks: true, html: true });
  markdown.inline.ruler.enable(['sub', 'sup']);
  const caption = embeddedCaption || '';
  /**
   * Whitespace must be escaped in order for ^superscript^ and ~subscript~
   * to render properly. Superfluous whitespace must be escaped in order for
   * text within *italics* and *bold* to render properly.
   */
  const escapedMarkdown = markdown.render(caption.split(' ').join('\\ '));
  return parse(escapedMarkdown.split('\\').join(''));
};
