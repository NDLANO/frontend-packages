/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const OLPlugin: PluginType = (node, opts) => {
  const props = attributesToProps(node.attribs);
  const letterClass = node.attribs['data-type'] === 'letters' ? 'ol-list--roman' : '';
  const num = node.attribs['start'];
  const numClass = num ? `ol-reset-${num}` : '';

  return (
    <ol {...props} data-type={undefined} className={`${node.attribs.class ?? ''} ${letterClass} ${numClass}`}>
      {domToReact(node.children, opts)}
    </ol>
  );
};
