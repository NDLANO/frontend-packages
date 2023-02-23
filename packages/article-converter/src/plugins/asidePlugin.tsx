/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { domToReact } from 'html-react-parser';
import { Aside, FactBoxV2 } from '@ndla/ui';
import { PluginType } from './types';
export const asidePlugin: PluginType = (node, opts) => {
  if (node.attribs['data-type'] === 'factAside') {
    return <FactBoxV2>{domToReact(node.children, opts)}</FactBoxV2>;
  } else if (node.attribs['data-type'] === 'rightAside') {
    return (
      <Aside wideScreen alwaysShow>
        {domToReact(node.children, opts)}
      </Aside>
    );
  }

  return null;
};
