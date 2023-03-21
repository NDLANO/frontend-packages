/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const ulPlugin: PluginType = (node, opts) => {
  if (node.attribs['data-type'] === 'two-column') {
    const props = attributesToProps(node.attribs);
    const classes = [node.attribs.class ?? '', 'o-list--two-columns'].filter((c) => !!c).join(' ');
    return (
      <ul {...props} data-type={undefined} className={classes}>
        {domToReact(node.children, opts)}
      </ul>
    );
  }

  return null;
};
