/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CopyParagraphButton } from '@ndla/ui';
import { PluginType } from './types';
export const CopyParagraphPlugin: PluginType = (node) => {
  const firstChild = node.children[0];
  if (firstChild && node.children.length === 1 && firstChild.type === 'text') {
    const content = firstChild.data;
    return <CopyParagraphButton title={content} content={content} />;
  }
};
