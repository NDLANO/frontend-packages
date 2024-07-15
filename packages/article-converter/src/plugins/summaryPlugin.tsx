/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { PluginType } from "./types";
import { ExpandableBoxSummary } from "../../../primitives/es";

export const summaryPlugin: PluginType = (node, converterOpts) => {
  const props = attributesToProps(node.attribs);

  return (
    <ExpandableBoxSummary {...props}>{domToReact(node.children as DOMNode[], converterOpts)}</ExpandableBoxSummary>
  );
};
