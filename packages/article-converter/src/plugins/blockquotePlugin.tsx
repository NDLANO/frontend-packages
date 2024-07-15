/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { BlockQuote } from "@ndla/primitives";
import { PluginType } from "./types";

export const blockquotePlugin: PluginType = (node, opts) => {
  const props = attributesToProps(node.attribs);
  return <BlockQuote {...props}>{domToReact(node.children as DOMNode[], opts)}</BlockQuote>;
};
