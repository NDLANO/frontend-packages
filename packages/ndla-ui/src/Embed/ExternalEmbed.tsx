/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRightShortLine } from "@ndla/icons";
import { Figure, Text } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { linkOverlay } from "@ndla/styled-system/patterns";
import type { OembedMetaData } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { ResourceBox } from "../ResourceBox";

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

// TODO: Move this to own component in UI? Use variant of existing?
const StyledSafeLink = styled(SafeLink, {
  base: {
    textDecoration: "underline",
    textStyle: "label.large",
    color: "text.link",
    fontWeight: "bold",
    _hover: {
      textDecoration: "unset",
    },
  },
});

const LinkWrapper = styled("div", {
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "xsmall",
  },
});

const TextWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "xxsmall",
  },
});

const Wrapper = styled("div", {
  base: {
    display: "flex",
    width: "100%",
    gap: "small",
    flexDirection: "column",
    backgroundColor: "surface.brand.2.subtle",
    borderRadius: "xxsmall",
    padding: "medium",
    border: "1px solid",
    borderColor: "stroke.info",
  },
});

const UrlText = styled(Text, {
  base: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
});

const ExternalEmbed = ({ embed }: Props) => {
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

  if (embedData.type === "link") {
    return (
      <Figure data-embed-type="external">
        <Wrapper>
          <LinkWrapper>
            <TextWrapper>
              <StyledSafeLink to={embedData.url} unstyled css={linkOverlay.raw()}>
                {embedData.title}
              </StyledSafeLink>
              <Text textStyle="label.medium">{embedData.caption}</Text>
            </TextWrapper>
            <ArrowRightShortLine />
          </LinkWrapper>
          <UrlText textStyle="label.medium" color="text.subtle">
            {embedData.url}
          </UrlText>
        </Wrapper>
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
export default ExternalEmbed;
