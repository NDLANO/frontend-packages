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
  const letterClass = node.attribs['data-type'] === 'letters' ? 'ol-list--roman' : false;
  const num = node.attribs['start'];
  const numClass = num ? `ol-reset-${num}` : false;
  const classes = [node.attribs.class ?? false, letterClass, numClass].filter((c): c is string => !!c).join(' ');

  return (
    <ol {...props} data-type={undefined} className={classes.length ? classes : undefined}>
      {domToReact(node.children, opts)}
    </ol>
  );
};
