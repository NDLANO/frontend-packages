/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { ComponentPropsWithRef, forwardRef, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { BrightcoveEmbedData, BrightcoveMetaData, BrightcoveVideoSource } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { RenderContext } from "./types";
import { EmbedByline } from "../LicenseByline";
import { licenseAttributes } from "../utils/licenseAttributes";

interface Props extends ComponentPropsWithRef<"figure"> {
  embed: BrightcoveMetaData;
  renderContext?: RenderContext;
  lang?: string;
}

const LinkedVideoButton = styled(Button, {
  base: {
    marginInlineStart: "xsmall",
  },
});

const BrightcoveIframe = styled("iframe", {
  base: {
    border: 0,
    height: "auto",
    width: "100%",
  },
});

export const makeIframeString = (url: string, width: string | number, height: string | number, title = "") => {
  const strippedWidth = typeof width === "number" ? width : width.replace(/\s*px/, "");
  const strippedHeight = typeof height === "number" ? height : height.replace(/\s*px/, "");
  const urlOrTitle = title || url;
  return `<iframe title="${urlOrTitle}" aria-label="${urlOrTitle}" src="${url}" width="${strippedWidth}" height="${strippedHeight}" allowfullscreen scrolling="no" frameborder="0" loading="lazy"></iframe>`;
};

export const isNumeric = (value: any) => !Number.isNaN(value - Number.parseFloat(value));

const getIframeProps = (data: BrightcoveEmbedData, sources: BrightcoveVideoSource[]) => {
  const { account, videoid, player = "default" } = data;

  const source = sources.filter((s) => s.width && s.height).toSorted((a, b) => a!.height! - b.height!)[0];

  return {
    src: `https://players.brightcove.net/${account}/${player}_default/index.html?videoId=${videoid}`,
    height: source?.height ?? "480",
    width: source?.width ?? "640",
  };
};
const BrightcoveEmbed = forwardRef<HTMLElement, Props>(
  ({ embed, renderContext = "article", lang, children, ...rest }, ref) => {
    const [showOriginalVideo, setShowOriginalVideo] = useState(true);
    const { t } = useTranslation();
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const { embedData } = embed;
    const fallbackTitle = `${t("embed.type.video")}: ${embedData.videoid}`;
    const parsedDescription = useMemo(() => {
      if (embed.embedData.caption || renderContext === "article") {
        return embed.embedData.caption ? parse(embed.embedData.caption) : undefined;
      } else if (embed.status === "success" && embed.data.description) {
        return parse(embed.data.description);
      }
    }, [embed, renderContext]);

    useEffect(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        const [width, height] = [parseInt(iframe.width), parseInt(iframe.height)];
        iframe.style.aspectRatio = `${width}/${height}`;
        iframe.width = "";
        iframe.height = "";
      }
    }, []);
    if (embed.status === "error") {
      return (
        <EmbedErrorPlaceholder type="video" {...rest} ref={ref}>
          <BrightcoveIframe
            ref={iframeRef}
            title={embedData.alt ?? fallbackTitle}
            aria-label={embedData.alt ?? fallbackTitle}
            {...getIframeProps(embedData, [])}
            allow="fullscreen; encrypted-media"
          />
          {children}
        </EmbedErrorPlaceholder>
      );
    }
    const { data } = embed;

    const linkedVideoId = isNumeric(data.link?.text) ? data.link?.text : undefined;

    const originalVideoProps = getIframeProps(embedData, data.sources);
    const alternativeVideoProps = linkedVideoId
      ? getIframeProps({ ...embedData, videoid: linkedVideoId }, data.sources)
      : undefined;

    const licenseProps = licenseAttributes(data?.copyright?.license.license, lang, embedData.pageUrl);

    return (
      <Figure data-embed-type="brightcove" {...licenseProps} {...rest} ref={ref}>
        <div className="brightcove-video">
          <BrightcoveIframe
            ref={iframeRef}
            className="original"
            title={embedData.alt ?? data.name ?? fallbackTitle}
            aria-label={embedData.alt ?? data.name ?? fallbackTitle}
            {...(alternativeVideoProps && !showOriginalVideo ? alternativeVideoProps : originalVideoProps)}
            allow="fullscreen; encrypted-media"
          />
        </div>
        <EmbedByline type="video" copyright={data.copyright!} description={parsedDescription}>
          {!!linkedVideoId && (
            <LinkedVideoButton size="small" variant="secondary" onClick={() => setShowOriginalVideo((p) => !p)}>
              {t(`figure.button.${!showOriginalVideo ? "original" : "alternative"}`)}
            </LinkedVideoButton>
          )}
        </EmbedByline>
        {children}
      </Figure>
    );
  },
);

export default BrightcoveEmbed;
