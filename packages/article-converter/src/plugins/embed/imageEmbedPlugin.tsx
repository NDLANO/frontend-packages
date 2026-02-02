/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ImageMetaData } from "@ndla/types-embed";
import { ImageEmbed } from "@ndla/ui";
import { attributesToProps } from "html-react-parser";
import { type PluginType } from "../types";

export const imageEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as ImageMetaData;

  return (
    <ImageEmbed
      embed={data}
      previewAlt={opts.previewAlt}
      lang={opts.articleLanguage}
      renderContext={opts.renderContext}
    />
  );
};
