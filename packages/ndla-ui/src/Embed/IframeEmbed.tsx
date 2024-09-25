/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ComponentPropsWithRef, forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IframeMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder, { ErrorPlaceholder } from "./EmbedErrorPlaceholder";
import { ResourceBox } from "../ResourceBox";

interface Props extends ComponentPropsWithRef<"figure"> {
  embed: IframeMetaData;
}

const StyledIframe = styled("iframe", {
  base: {
    width: "100%",
  },
});

const IframeEmbed = forwardRef<HTMLElement, Props>(({ embed, children, ...rest }, ref) => {
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
    return (
      <EmbedErrorPlaceholder type="external" {...rest} ref={ref}>
        <ErrorPlaceholder type="external" />
        {children}
      </EmbedErrorPlaceholder>
    );
  }

  const { embedData, data } = embed;

  if (embedData.type === "fullscreen") {
    const iframeImage = embed.status === "success" ? data.iframeImage : undefined;
    const alt = embedData.alt !== undefined ? embedData.alt : iframeImage?.alttext.alttext;
    const image = { src: iframeImage?.image.imageUrl ?? "", alt: alt ?? "" };
    return (
      <Figure data-embed-type="iframe" {...rest} ref={ref}>
        <ResourceBox
          image={image}
          title={embedData.title ?? ""}
          url={embedData.url}
          caption={embedData.caption ?? ""}
          buttonText={t("license.other.itemImage.ariaLabel")}
        />
        {children}
      </Figure>
    );
  }

  const { width, height, title, url } = embedData;

  const strippedWidth = typeof width === "number" ? width : width?.replace(/\s*px/, "");
  const strippedHeight = typeof height === "number" ? height : height?.replace(/\s*px/, "");
  const urlOrTitle = title || url;

  return (
    <Figure data-embed-type="iframe" {...rest} ref={ref}>
      <StyledIframe
        ref={iframeRef}
        title={urlOrTitle}
        aria-label={urlOrTitle}
        src={url}
        width={strippedWidth}
        height={strippedHeight}
        // eslint-disable-next-line react/no-unknown-property
        allowFullScreen
        allow="encrypted-media"
        scrolling="no"
        frameBorder="0"
        loading="lazy"
      />
      {children}
    </Figure>
  );
});

export default IframeEmbed;
