/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ArrowRightLine } from "@ndla/icons";
import { Text } from "@ndla/primitives";
import type { CampaignBlockMetaData } from "@ndla/types-embed";
import parse from "html-react-parser";
import { getPossiblyRelativeUrl } from "../utils/relativeUrl";
import {
  CampaignBlockContainer,
  CampaignBlockContent,
  CampaignBlockText,
  CampaignBlockSafeLinkButton,
  CampaignBlockImage,
} from "./CampaignBlock";

interface Props {
  embed: CampaignBlockMetaData;
  path: string | undefined;
}

export const CampaignBlockEmbed = ({ embed, path }: Props) => {
  const image = embed.status === "success" ? embed.data.image : undefined;
  const imageComponent = !!image && (
    <CampaignBlockImage
      src={image.image.imageUrl}
      alt={embed.embedData.alt === undefined ? "" : embed.embedData.alt}
      variants={image.image.variants}
      width={image.image.dimensions?.width}
      height={image.image.dimensions?.height}
    />
  );
  return (
    <CampaignBlockContainer background={embed.embedData.background}>
      {embed.embedData.imageSide === "left" && imageComponent}
      <CampaignBlockContent>
        <Text asChild consumeCss textStyle="heading.small">
          <h2>{parse(embed.embedData.title)}</h2>
        </Text>
        <CampaignBlockText>{parse(embed.embedData.description)}</CampaignBlockText>
        {!!embed.embedData.url?.length && (
          <CampaignBlockSafeLinkButton to={getPossiblyRelativeUrl(embed.embedData.url, path)}>
            {parse(embed.embedData.urlText ?? "")}
            <ArrowRightLine />
          </CampaignBlockSafeLinkButton>
        )}
      </CampaignBlockContent>
      {embed.embedData.imageSide === "right" && imageComponent}
    </CampaignBlockContainer>
  );
};
