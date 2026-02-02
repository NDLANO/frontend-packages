/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AnchorHeading } from "@ndla/ui";
import { type DOMNode, Element, domToReact } from "html-react-parser";
import { type PluginType } from "./types";
export const anchorHeadingPlugin: PluginType = (node, converterOpts, opts) => {
  const parent = node.parent as Element | undefined;
  if (
    parent?.name === "section" ||
    (parent?.name === "div" && Object.keys(parent.attribs ?? {}).length === 0) ||
    (parent?.name === "ndlaembed" && parent.attribs["data-resource"] === "uu-disclaimer")
  ) {
    return (
      <AnchorHeading copyText={node.attribs["data-text"]} lang={opts.articleLanguage}>
        {domToReact(node.children as DOMNode[], converterOpts)}
      </AnchorHeading>
    );
  }
  return null;
};
