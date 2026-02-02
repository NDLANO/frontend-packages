/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LinkBlockSection } from "@ndla/ui";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type PluginType } from "./types";

export const navPlugin: PluginType = (node, opts) => {
  if (node.attribs["data-type"] === "link-block-list") {
    const props = attributesToProps(node.attribs);
    return <LinkBlockSection {...props}>{domToReact(node.children as DOMNode[], opts)}</LinkBlockSection>;
  }
  return null;
};
