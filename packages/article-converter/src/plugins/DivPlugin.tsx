/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { domToReact, attributesToProps } from 'html-react-parser';
import { RelatedArticleList } from '@ndla/ui';
import { PluginType } from './types';
export const DivPlugin: PluginType = (node, opts) => {
  if (node.attribs['data-type'] === 'related-content' && node.children.length) {
    const props = attributesToProps(node.attribs);

    return (
      <RelatedArticleList {...props} headingLevel="h3">
        {/* @ts-ignore          */}
        {domToReact(node.children, opts)}
      </RelatedArticleList>
    );
  }
  return null;
};
