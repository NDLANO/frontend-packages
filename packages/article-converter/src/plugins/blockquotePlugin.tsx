/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { ContentTypeBlockQuote, type ContentTypeBlockQuoteVariant } from "@ndla/ui";
import { type PluginType } from "./types";

export const blockquotePlugin: PluginType = (node, opts, { contentType }) => {
  const { "data-variant": variant, ...props } = attributesToProps(node.attribs);
  return (
    <ContentTypeBlockQuote
      {...props}
      variant={variant as ContentTypeBlockQuoteVariant | undefined}
      contentType={contentType}
    >
      {domToReact(node.children as DOMNode[], opts)}
    </ContentTypeBlockQuote>
  );
};
