/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { H5pMetaData } from "@ndla/types-embed";
import { useTranslation } from "react-i18next";
import { EmbedErrorPlaceholder } from "./EmbedErrorPlaceholder";

interface Props {
  embed: H5pMetaData;
}

const StyledFigure = styled(Figure, {
  base: {
    "& iframe": {
      height: "auto",
      width: "100%",
    },
  },
});

const FigureOembed = styled(Figure, {
  base: {
    width: "100%",
    "& iframe": {
      width: "100%",
    },
  },
});

export const H5pEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type="h5p" />;
  }

  if (embed.data.oembed) {
    return <FigureOembed data-embed-type="h5p" dangerouslySetInnerHTML={{ __html: embed.data.oembed.html ?? "" }} />;
  }

  const title = embed.embedData.title?.trim()
    ? embed.embedData.title
    : embed.data.h5pLicenseInformation?.h5p.title?.trim()
      ? embed.data.h5pLicenseInformation.h5p.title
      : embed.embedData.url;

  const titleWithPrefix = `${t("embed.type.h5p")}: ${title}`;

  return (
    <StyledFigure data-embed-type="h5p">
      <iframe title={titleWithPrefix} aria-label={titleWithPrefix} src={embed.embedData.url} />
    </StyledFigure>
  );
};
