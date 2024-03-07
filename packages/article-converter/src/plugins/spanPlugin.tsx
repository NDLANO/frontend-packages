/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { PluginType } from "./types";
export const spanPlugin: PluginType = (node, opts) => {
  if (node.attribs["data-size"] === "large") {
    const props = attributesToProps(node.attribs);
    return (
      <span {...props} data-size={undefined} className={`${node.attribs.class ?? ""} u-large-body-text`}>
        {domToReact(node.children as DOMNode[], opts)}
      </span>
    );
  }

  return null;
};
