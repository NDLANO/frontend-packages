/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint-env jest */

import { parseMarkdown } from '../markdownHelpers';

const richMarkdown =
  '### Header\n **bold** \n_italic_ \n`code` \n^sup^ \n~sub~ \nNormal list: \n* One \n* Two \n* Three \nOrdered list: \n1. 1 \n2. 2 \n3. 3';

test('parseMarkdown renders body correctly.', () => {
  const parsed = parseMarkdown(richMarkdown, 'body');

  expect(parsed).toMatchSnapshot();
});

test('parseMarkdown does not render richText when type=caption.', () => {
  const parsed = parseMarkdown(richMarkdown, 'caption');

  expect(parsed).toMatchSnapshot();
});
