/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type IframeMetaData } from "@ndla/types-embed";
import { IframeEmbed } from "@ndla/ui";
import { type PluginType } from "../types";

export const iframeEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as IframeMetaData;
  return <IframeEmbed embed={data} />;
};
