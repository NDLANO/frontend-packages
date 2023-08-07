/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { LinkBlockSection } from '@ndla/ui';
import { PluginType } from './types';

export const navPlugin: PluginType = (node, opts) => {
  if (node.attribs['data-type'] === 'link-block') {
    const props = attributesToProps(node.attribs);
    return <LinkBlockSection {...props}>{domToReact(node.children, opts)}</LinkBlockSection>;
  }
  return null;
};
