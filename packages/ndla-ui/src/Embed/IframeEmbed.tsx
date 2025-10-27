/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IframeMetaData } from "@ndla/types-embed";
import { EmbedErrorPlaceholder } from "./EmbedErrorPlaceholder";
import { ResourceBox } from "../ResourceBox/ResourceBox";

interface Props {
  embed: IframeMetaData;
}

const StyledIframe = styled("iframe", {
  base: {
    width: "100%",
    border: 0,
  },
});

const StyledFigure = styled(Figure, {
  base: {
    clear: "both",
  },
});

export const IframeEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const [width, height] = [Number.parseInt(iframe.width), Number.parseInt(iframe.height)];
      iframe.style.aspectRatio = `${width ? width : 16}/${height ? height : 9}`;
      iframe.width = "";
      iframe.height = "";
    }
  }, []);

  if (embed.status === "error") {
    return <EmbedErrorPlaceholder type="external" />;
  }

  const { embedData, data } = embed;

  if (embedData.type === "fullscreen") {
    const iframeImage = embed.status === "success" ? data.iframeImage : undefined;
    const alt = embedData.alt !== undefined ? embedData.alt : iframeImage?.alttext.alttext;
    const image = { src: iframeImage?.image.imageUrl, alt: alt ?? "" };
    return (
      <StyledFigure data-embed-type="iframe">
        <ResourceBox
          image={image}
          title={embedData.title ?? ""}
          url={embedData.url}
          caption={embedData.caption ?? ""}
          buttonText={t("license.other.itemImage.ariaLabel")}
        />
      </StyledFigure>
    );
  }

  const { width, height, url } = embedData;

  const strippedWidth = typeof width === "number" ? width : width?.replace(/\s*px/, "");
  const strippedHeight = typeof height === "number" ? height : height?.replace(/\s*px/, "");
  const title = `${t("embed.type.external")}: ${embedData.title?.trim() ? embedData.title : url}`;

  return (
    <StyledFigure data-embed-type="iframe">
      <StyledIframe
        ref={iframeRef}
        title={title}
        aria-label={title}
        src={url}
        width={strippedWidth}
        height={strippedHeight}
        allow="fullscreen; encrypted-media"
        loading="lazy"
      />
    </StyledFigure>
  );
};
