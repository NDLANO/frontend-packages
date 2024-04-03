/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { OembedMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { Figure } from "../Figure";
import { ResourceBox } from "../ResourceBox";

interface Props {
  embed: OembedMetaData;
  isConcept?: boolean;
}

const StyledFigure = styled(Figure)`
  iframe {
    height: auto;
  }
`;

const ExternalEmbed = ({ embed, isConcept }: Props) => {
  const { t } = useTranslation();
  const figRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const iframe = figRef.current?.querySelector(`iframe`);
    if (iframe) {
      const [width, height] = [parseInt(iframe.width), parseInt(iframe.height)];
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
      src: data.iframeImage?.image.imageUrl ?? "",
      alt: embedData.alt !== undefined ? embedData.alt : data.iframeImage?.alttext?.alttext ?? "",
    };
    return (
      <Figure type="full">
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
      ref={figRef}
      type={isConcept ? "full-column" : undefined}
      dangerouslySetInnerHTML={{ __html: data.oembed.html ?? "" }}
    />
  );
};

export default ExternalEmbed;
