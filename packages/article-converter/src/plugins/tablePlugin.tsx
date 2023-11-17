/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Table } from '@ndla/ui';
import { attributesToProps, domToReact } from 'html-react-parser';
import { PluginType } from './types';
export const tablePlugin: PluginType = (node, converterOpts, opts) => {
  const props = attributesToProps(node.attribs);
  return (
    <Table {...props} lang={opts.articleLanguage}>
      {domToReact(node.children, converterOpts)}
    </Table>
  );
};
