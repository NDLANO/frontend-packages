/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse, { HTMLReactParserOptions } from 'html-react-parser';
import { basePlugins, oembedPlugins } from './plugins';
import { TransformOptions } from './plugins/types';
import { embedPlugins } from './plugins/embed';

const transform = (content: string, opts: TransformOptions) => {
  const plugins = opts?.isOembed ? oembedPlugins : basePlugins;
  const options: HTMLReactParserOptions = {
    replace: (node) => {
      if (!('attribs' in node)) {
        return;
      }
      if (plugins[node.name]) {
        return plugins[node.name](node, options, opts);
      }
      if (node.name === 'ndlaembed') {
        if (embedPlugins[node.attribs['data-resource']]) {
          return embedPlugins[node.attribs['data-resource']](node, options, opts);
        } else {
          return <span>Unsupported</span>;
        }
      }
    },
  };
  const replaced = parse(content, options);

  return replaced;
};

export default transform;
