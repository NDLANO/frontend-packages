/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps, Element } from "html-react-parser";
import { ImageMetaData } from "@ndla/types-embed";
import { ImageEmbed } from "@ndla/ui";
import { PluginType } from "../types";

export const imageEmbedPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as ImageMetaData;
  const inGrid = (element.parentNode?.parentNode as Element)?.attribs?.["data-type"] === "grid";

  return (
    <ImageEmbed
      inGrid={inGrid}
      embed={data}
      path={opts.path}
      previewAlt={opts.previewAlt}
      canonicalUrl={opts.canonicalUrls?.image}
      lang={opts.articleLanguage}
      renderContext={opts.renderContext}
    />
  );
};
