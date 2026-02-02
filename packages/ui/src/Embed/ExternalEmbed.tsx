/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { OembedMetaData } from "@ndla/types-embed";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ResourceBox } from "../ResourceBox/ResourceBox";
import { EmbedErrorPlaceholder } from "./EmbedErrorPlaceholder";

interface Props {
  embed: OembedMetaData;
}

const StyledFigure = styled(Figure, {
  base: {
    "& iframe": {
      height: "auto",
      width: "100%",
    },
  },
});

export const ExternalEmbed = ({ embed }: Props) => {
  const { t } = useTranslation();
  const figRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const iframe = figRef.current?.querySelector("iframe");
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
    const image = {
      src: data.iframeImage?.image.imageUrl,
      alt: embedData.alt !== undefined ? embedData.alt : (data.iframeImage?.alttext?.alttext ?? ""),
    };
    return (
      <Figure data-embed-type="external">
        <ResourceBox
          image={image}
          title={embedData.title ?? ""}
          url={embedData.url}
          caption={embedData.caption ?? ""}
          buttonText={t("license.other.itemImage.ariaLabel")}
        />
      </Figure>
    );
  }

  return (
    <StyledFigure
      data-embed-type="external"
      ref={figRef}
      dangerouslySetInnerHTML={{ __html: data?.oembed?.html ?? "" }}
    />
  );
};
