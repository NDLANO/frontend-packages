/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const h3Plugin: PluginType = (node, opts) => {
  const props = attributesToProps(node.attribs);
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <h3 {...props} tabIndex={0}>
      {domToReact(node.children, opts)}
    </h3>
  );
};
