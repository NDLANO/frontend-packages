/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from '../types';
export const anchorPlugin: PluginType = (node, options) => {
  const props = attributesToProps(node.attribs);
  return (
    <a {...props} target="_blank">
      {domToReact(node.children, options)}
    </a>
  );
};
