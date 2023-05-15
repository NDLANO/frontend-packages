/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { UnOrderedList } from '@ndla/ui';
import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const ulPlugin: PluginType = (node, opts) => {
  const props = attributesToProps(node.attribs);
  const classes = [node.attribs.class ?? '', node.attribs['data-type'] === 'two-column' ? 'o-list--two-columns' : '']
    .filter((c) => !!c)
    .join(' ');
  return (
    <UnOrderedList {...props} className={classes}>
      {domToReact(node.children, opts)}
    </UnOrderedList>
  );
};
