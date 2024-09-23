/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { ContentTypeBlockQuote } from "@ndla/ui";
import { PluginType } from "./types";

export const blockquotePlugin: PluginType = (node, opts, { contentType }) => {
  const props = attributesToProps(node.attribs);
  return (
    <ContentTypeBlockQuote {...props} contentType={contentType}>
      {domToReact(node.children as DOMNode[], opts)}
    </ContentTypeBlockQuote>
  );
};
