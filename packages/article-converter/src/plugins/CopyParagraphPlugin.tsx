/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CopyParagraphButton } from '@ndla/ui';
import { Text, Element } from 'html-react-parser';
import { PluginType } from './types';
export const CopyParagraphPlugin: PluginType = (node) => {
  const directTextChild = node.children.find((c): c is Text => c.type === 'text');
  if (directTextChild) {
    return <CopyParagraphButton title={directTextChild.data} content={directTextChild.data} />;
  }
  const paragraphChild = node.children.find((c): c is Element => c.type === 'tag');
  const textChild = paragraphChild?.children.find((c): c is Text => c.type === 'text');
  if (textChild) {
    return <CopyParagraphButton title={textChild.data} content={textChild.data} />;
  }
  return null;
};
