/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type DOMNode, domToReact } from "html-react-parser";
import { type PluginType } from "../types";

export const symbolEmbedPlugin: PluginType = (element, _, __) => {
  return <>{domToReact(element.children as DOMNode[])}</>;
};
