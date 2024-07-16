/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { ExpandableBox } from "@ndla/primitives";
import { PluginType } from "./types";

export const detailsPlugin: PluginType = (node, converterOpts) => {
  const props = attributesToProps(node.attribs);

  return <ExpandableBox {...props}>{domToReact(node.children as DOMNode[], converterOpts)}</ExpandableBox>;
};
