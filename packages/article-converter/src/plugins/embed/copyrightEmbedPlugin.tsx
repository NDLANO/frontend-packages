/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type CopyrightMetaData } from "@ndla/types-embed";
import { CopyrightEmbed } from "@ndla/ui";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type PluginType } from "../types";

export const copyrightEmbedPlugin: PluginType = (element, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as CopyrightMetaData;
  return <CopyrightEmbed embed={data}>{domToReact(element.children as DOMNode[], opts)}</CopyrightEmbed>;
};
