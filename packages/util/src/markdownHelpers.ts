/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

//@ts-ignore
import { Remarkable } from 'remarkable';
import parse from 'html-react-parser';

export type ParseType = 'caption' | 'body';

export const parseMarkdown = (embeddedCaption: string, parser: ParseType = 'caption') => {
  const markdown = new Remarkable({ breaks: true, html: true });
  markdown.inline.ruler.enable(['sub', 'sup']);
  if (parser === 'caption') {
    markdown.block.ruler.disable([
      'table',
      'footnote',
      'blockquote',
      'code',
      'fences',
      'footnote',
      'heading',
      'hr',
      'htmlblock',
      'lheading',
      'list',
      'table',
    ]);
    markdown.inline.ruler.disable([
      'autolink',
      'backticks',
      'del',
      'entity',
      'escape',
      'footnote_ref',
      'htmltag',
      'links',
      'newline',
      'text',
    ]);
  }
  const caption = embeddedCaption || '';
  /**
   * Whitespace must be escaped in order for ^superscript^ and ~subscript~
   * to render properly. Superfluous whitespace must be escaped in order for
   * text within *italics* and *bold* to render properly.
   */
  const escapedMarkdown = markdown.render(caption.split(' ').join('\\ '));
  const parsed = parse(escapedMarkdown.split('\\').join(''));
  return Array.isArray(parsed) ? parsed[0] : parsed;
};
