/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CopyParagraphButtonV2 } from '@ndla/ui';
import { Element, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const copyParagraphPlugin: PluginType = (node, converterOpts, opts) => {
  const parent = node.parent as Element | undefined;
  if (parent?.name === 'section' || (parent?.name === 'div' && Object.keys(parent.attribs ?? {}).length === 0)) {
    return (
      <CopyParagraphButtonV2 copyText={node.attribs['data-text']} lang={opts.articleLanguage}>
        {domToReact(node.children, converterOpts)}
      </CopyParagraphButtonV2>
    );
  }
  return null;
};
