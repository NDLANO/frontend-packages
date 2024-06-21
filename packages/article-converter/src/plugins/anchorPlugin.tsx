/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { SafeLink } from "@ndla/safelink";
import { getPossiblyRelativeUrl } from "@ndla/ui";
import { PluginType } from "./types";

export const anchorPlugin: PluginType = (node, opts, { path }) => {
  const props = attributesToProps(node.attribs);
  const href = getPossiblyRelativeUrl(props.href as string, path);

  return (
    <SafeLink {...props} to={href}>
      {domToReact(node.children as DOMNode[], opts)}
    </SafeLink>
  );
};
