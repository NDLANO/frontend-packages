/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, domToReact } from "html-react-parser";
import { Aside, FactBox } from "@ndla/ui";
import { PluginType } from "./types";
export const asidePlugin: PluginType = (node, opts) => {
  if (node.attribs["data-type"] === "factAside") {
    return <FactBox>{domToReact(node.children as DOMNode[], opts)}</FactBox>;
  } else if (node.attribs["data-type"] === "rightAside") {
    return <Aside>{domToReact(node.children as DOMNode[], opts)}</Aside>;
  }

  return null;
};
