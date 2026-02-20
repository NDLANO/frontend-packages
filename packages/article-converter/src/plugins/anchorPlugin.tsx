/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { SafeLink } from "@ndla/safelink";
import { getPossiblyRelativeUrl } from "@ndla/ui";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import type { AnchorHTMLAttributes } from "react";
import { type PluginType } from "./types";

export const anchorPlugin: PluginType = (node, opts, { path, isOembed }) => {
  const props = attributesToProps(node.attribs);
  const href = getPossiblyRelativeUrl(props.href as string, path);

  const oembedProps: AnchorHTMLAttributes<HTMLAnchorElement> = isOembed ? { target: "_blank", rel: "noreferrer" } : {};

  return (
    <SafeLink {...props} to={href} {...oembedProps} target="">
      {domToReact(node.children as DOMNode[], opts)}
    </SafeLink>
  );
};
