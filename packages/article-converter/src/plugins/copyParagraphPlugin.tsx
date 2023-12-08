/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Element, domToReact } from 'html-react-parser';
import { CopyParagraphButton } from '@ndla/ui';
import { PluginType } from './types';
export const copyParagraphPlugin: PluginType = (node, converterOpts, opts) => {
  const parent = node.parent as Element | undefined;
  if (parent?.name === 'section' || (parent?.name === 'div' && Object.keys(parent.attribs ?? {}).length === 0)) {
    return (
      <CopyParagraphButton copyText={node.attribs['data-text']} lang={opts.articleLanguage}>
        {domToReact(node.children, converterOpts)}
      </CopyParagraphButton>
    );
  }
  return null;
};
