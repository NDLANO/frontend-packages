/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FactBox } from "@ndla/ui";
import { type DOMNode, domToReact } from "html-react-parser";
import { type PluginType } from "./types";
export const asidePlugin: PluginType = (node, opts) => {
  if (node.attribs["data-type"] === "factAside") {
    return <FactBox>{domToReact(node.children as DOMNode[], opts)}</FactBox>;
  }
  return null;
};
