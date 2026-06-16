/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { KeyFigureMetaData } from "@ndla/types-embed";
import parse from "html-react-parser";
import { KeyFigureImage, KeyFigureRoot, KeyFigureSubtitle, KeyFigureTitle } from "./KeyFigure";

interface Props {
  embed: KeyFigureMetaData;
}
export const KeyFigureEmbed = ({ embed }: Props) => {
  const image = embed.status === "success" ? embed.data.metaImage : undefined;

  return (
    <KeyFigureRoot>
      {!!image && (
        <KeyFigureImage
          src={image.image.imageUrl}
          alt={embed.embedData.alt ?? ""}
          variants={image.image.variants}
          height={image.image.dimensions?.height}
          width={image.image.dimensions?.width}
        />
      )}
      <KeyFigureTitle>{parse(embed.embedData.title)}</KeyFigureTitle>
      <KeyFigureSubtitle>{parse(embed.embedData.subtitle)}</KeyFigureSubtitle>
    </KeyFigureRoot>
  );
};
