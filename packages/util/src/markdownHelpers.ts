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

export const parseMarkdown = (content: string, parser: ParseType = 'caption') => {
  const markdown = new Remarkable({ breaks: true, html: true });
  markdown.inline.ruler.enable(['sub', 'sup']);
  if (parser === 'caption') {
    markdown.set({ html: false, breaks: false });
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
  const rendered = markdown.render(content);
  console.log(rendered);
  const parsed = parse(rendered);

  return parsed;
};
