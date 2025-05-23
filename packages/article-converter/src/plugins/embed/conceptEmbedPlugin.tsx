/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type ConceptMetaData } from "@ndla/types-embed";
import { ConceptEmbed } from "@ndla/ui";
import { type PluginType } from "../types";

export const conceptEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as ConceptMetaData;
  return (
    <ConceptEmbed
      embed={data}
      lang={opts.articleLanguage}
      renderContext={opts.renderContext}
      previewAlt={opts.previewAlt}
    />
  );
};
