/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type FootnoteMetaData } from "@ndla/types-embed";
import { FootnoteEmbed } from "@ndla/ui";
import { type PluginType } from "../types";

export const footnoteEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as FootnoteMetaData;
  return <FootnoteEmbed embed={data} />;
};
