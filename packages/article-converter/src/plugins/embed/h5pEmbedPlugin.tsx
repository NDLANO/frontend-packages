/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { H5pMetaData } from "@ndla/types-embed";
import { H5pEmbed } from "@ndla/ui";
import { PluginType } from "../types";

export const h5pEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"]) as H5pMetaData;
  return <H5pEmbed embed={data} />;
};
