/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { OembedMetaData } from "@ndla/types-embed";
import { ExternalEmbed } from "@ndla/ui";
import { PluginType } from "../types";

export const externalEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"]) as OembedMetaData;
  return <ExternalEmbed embed={data} />;
};
