/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { attributesToProps } from "html-react-parser";
import { type KeyFigureMetaData } from "@ndla/types-embed";
import { KeyFigure } from "@ndla/ui";
import { type PluginType } from "../types";

export const keyFigureEmbedPlugin: PluginType = (element) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as KeyFigureMetaData;
  const { title, subtitle, alt } = data.embedData;
  return (
    <KeyFigure
      title={title}
      subtitle={subtitle}
      image={
        data.status === "success" && data.data.metaImage
          ? {
              src: data.data.metaImage.image.imageUrl,
              alt: alt === undefined ? "" : alt,
            }
          : undefined
      }
    />
  );
};
