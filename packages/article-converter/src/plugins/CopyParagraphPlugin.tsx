/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CopyParagraphButtonV2 } from '@ndla/ui';
import { domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const CopyParagraphPlugin: PluginType = (node, opts) => {
  return (
    <CopyParagraphButtonV2 copyText={node.attribs['data-text']}>
      {domToReact(node.children, opts)}
    </CopyParagraphButtonV2>
  );
};
