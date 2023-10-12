/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const paragraphPlugin: PluginType = (node, converterOpts, opts) => {
  const props = attributesToProps(node.attribs);
  if (node.attribs['data-align'] === 'center') {
    const classes = [node.attribs.class ?? '', 'u-text-center'].filter((c) => !!c).join(' ');
    return (
      <p {...props} lang={opts.articleLanguage} data-align={undefined} className={classes}>
        {domToReact(node.children, converterOpts)}
      </p>
    );
  }
  return (
    <p {...props} lang={opts.articleLanguage}>
      {domToReact(node.children, converterOpts)}
    </p>
  );
};
