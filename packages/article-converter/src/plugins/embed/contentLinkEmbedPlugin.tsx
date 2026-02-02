/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ContentLinkMetaData } from "@ndla/types-embed";
import { ContentLinkEmbed } from "@ndla/ui";
import { type DOMNode, attributesToProps, domToReact } from "html-react-parser";
import { type PluginType } from "../types";

export const contentLinkEmbedPlugin: PluginType = (element, opts, { isOembed }) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as ContentLinkMetaData;
  return (
    <ContentLinkEmbed embed={data} isOembed={isOembed}>
      {domToReact(element.children as DOMNode[], opts)}
    </ContentLinkEmbed>
  );
};
