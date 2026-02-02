/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ExpandableBoxSummary } from "@ndla/primitives";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type PluginType } from "./types";

export const summaryPlugin: PluginType = (node, converterOpts) => {
  const props = attributesToProps(node.attribs);

  return (
    <ExpandableBoxSummary {...props}>{domToReact(node.children as DOMNode[], converterOpts)}</ExpandableBoxSummary>
  );
};
