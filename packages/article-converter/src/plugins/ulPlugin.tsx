/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { UnOrderedList } from "@ndla/primitives";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type PluginType } from "./types";
export const ulPlugin: PluginType = (node, converterOpts, opts) => {
  const props = attributesToProps(node.attribs);
  return (
    <UnOrderedList {...props} className={node.attribs.class} lang={opts.articleLanguage}>
      {domToReact(node.children as DOMNode[], converterOpts)}
    </UnOrderedList>
  );
};
