/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import type { KeyFigureMetaData } from "@ndla/types-embed";
import { KeyFigureImage, KeyFigureRoot, KeyFigureSubTitle, KeyFigureTitle } from "../KeyFigure/KeyFigure";

interface Props {
  embed: KeyFigureMetaData;
}

export const KeyFigureEmbed = ({ embed }: Props) => {
  const image = embed.status === "success" && embed.data.metaImage ? embed.data.metaImage : undefined;
  return (
    <KeyFigureRoot data-embed-type="key-figure">
      {!!image && (
        <KeyFigureImage
          src={image.image.imageUrl}
          alt={image.alttext.alttext}
          width={image.image.dimensions?.width}
          height={image.image.dimensions?.height}
          variants={image.image.variants}
        />
      )}
      <KeyFigureTitle asChild consumeCss>
        <div>{parse(embed.embedData.title)}</div>
      </KeyFigureTitle>
      <KeyFigureSubTitle asChild consumeCss>
        <div>{parse(embed.embedData.subtitle)}</div>
      </KeyFigureSubTitle>
    </KeyFigureRoot>
  );
};
