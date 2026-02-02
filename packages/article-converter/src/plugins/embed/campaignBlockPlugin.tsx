/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type CampaignBlockMetaData } from "@ndla/types-embed";
import { CampaignBlock } from "@ndla/ui";
import { attributesToProps } from "html-react-parser";
import { type PluginType } from "../types";

export const campaignBlockPlugin: PluginType = (element, _, opts) => {
  const props = attributesToProps(element.attribs);
  const data = JSON.parse(props["data-json"] as string) as CampaignBlockMetaData;
  const embed = data.embedData;

  return (
    <CampaignBlock
      title={embed.title}
      description={embed.description}
      url={{ url: embed.url, text: embed.urlText }}
      path={opts.path}
      imageSide={embed.imageSide}
      image={
        data.status === "success" && data.data.image
          ? {
              src: data.data.image.image.imageUrl,
              alt: embed.alt === undefined ? "" : embed.alt,
            }
          : undefined
      }
    />
  );
};
