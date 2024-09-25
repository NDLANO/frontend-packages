/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ComponentPropsWithRef, forwardRef, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { OembedMetaData } from "@ndla/types-embed";
import { composeRefs } from "@ndla/util";
import EmbedErrorPlaceholder, { ErrorPlaceholder } from "./EmbedErrorPlaceholder";
import { ResourceBox } from "../ResourceBox";

interface Props extends ComponentPropsWithRef<"figure"> {
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

const ExternalEmbed = forwardRef<HTMLElement, Props>(({ embed, children, ...rest }, ref) => {
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
    return (
      <EmbedErrorPlaceholder type="external" {...rest} ref={ref}>
        <ErrorPlaceholder type="external" />
        {children}
      </EmbedErrorPlaceholder>
    );
  }

  const { embedData, data } = embed;

  if (embedData.type === "fullscreen") {
    const image = {
      src: data.iframeImage?.image.imageUrl ?? "",
      alt: embedData.alt !== undefined ? embedData.alt : data.iframeImage?.alttext?.alttext ?? "",
    };
    return (
      <Figure data-embed-type="external" {...rest} ref={ref}>
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

  return (
    <StyledFigure data-embed-type="external" ref={composeRefs(figRef, ref)} {...rest}>
      {!!data.oembed.html && parse(data.oembed.html)}
      {children}
    </StyledFigure>
  );
});

export default ExternalEmbed;
