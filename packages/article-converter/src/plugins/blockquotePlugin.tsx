/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { BlockQuote } from "@ndla/primitives";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type PluginType } from "./types";

export const blockquotePlugin: PluginType = (node, opts) => {
  const { "data-variant": variant, ...props } = attributesToProps(node.attribs);
  return (
    <BlockQuote {...props} variant={variant === "colored" ? "brand1" : undefined}>
      {domToReact(node.children as DOMNode[], opts)}
    </BlockQuote>
  );
};
