/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, domToReact } from 'html-react-parser';
import { DefinitionTerm } from '@ndla/ui';
import { PluginType } from './types';

export const dtPlugin: PluginType = (node, converterOpts, opts) => {
  const props = attributesToProps(node.attribs);

  return (
    <DefinitionTerm {...props} lang={opts.articleLanguage}>
      {domToReact(node.children, converterOpts)}
    </DefinitionTerm>
  );
};
