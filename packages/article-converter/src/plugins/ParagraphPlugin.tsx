/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const ParagraphPlugin: PluginType = (node, opts) => {
  if (node.attribs['data-align'] === 'center') {
    const props = attributesToProps(node.attribs);
    return (
      <p {...props} data-align={undefined} className={`${node.attribs.class ?? ''} u-text-center`}>
        {domToReact(node.children, opts)}
      </p>
    );
  }

  return null;
};
