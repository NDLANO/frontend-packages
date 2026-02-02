/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type CodeMetaData } from "@ndla/types-embed";
import { CodeEmbed } from "@ndla/ui";
import { attributesToProps } from "html-react-parser";
import { type PluginType } from "../types";

export const codeEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as CodeMetaData;
  return <CodeEmbed embed={data} />;
};
