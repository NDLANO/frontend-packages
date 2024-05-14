/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { ArticleParagraph } from "@ndla/ui";
import { PluginType } from "./types";

export const paragraphPlugin: PluginType = (node, converterOpts, opts) => {
  const props = attributesToProps(node.attribs);
  return (
    <ArticleParagraph {...props} lang={opts.articleLanguage}>
      {domToReact(node.children as DOMNode[], converterOpts)}
    </ArticleParagraph>
  );
};
