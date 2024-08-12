/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { useEffect, useMemo, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Figure } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { BrightcoveEmbedData, BrightcoveMetaData, BrightcoveVideoSource } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { RenderContext } from "./types";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: BrightcoveMetaData;
  renderContext?: RenderContext;
}

const BrightcoveIframe = styled("iframe", {
  base: {
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

const getIframeProps = (data: BrightcoveEmbedData, sources: BrightcoveVideoSource[]) => {
  const { account, videoid, player = "default" } = data;

  const source = sources.filter((s) => s.width && s.height).toSorted((a, b) => a!.height! - b.height!)[0];

  return {
    src: `https://players.brightcove.net/${account}/${player}_default/index.html?videoId=${videoid}`,
    height: source?.height ?? "480",
    width: source?.width ?? "640",
  };
};
const BrightcoveEmbed = ({ embed, renderContext = "article" }: Props) => {
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
      <EmbedErrorPlaceholder type="video">
        <BrightcoveIframe
          ref={iframeRef}
          title={embedData.alt ?? fallbackTitle}
          aria-label={embedData.alt ?? fallbackTitle}
          frameBorder="0"
          {...getIframeProps(embedData, [])}
          allowFullScreen
        />
      </EmbedErrorPlaceholder>
    );
  }
  const { data } = embed;

  const originalVideoProps = getIframeProps(embedData, data.sources);

  return (
    <Figure data-embed-type="brightcove">
      <div className="brightcove-video">
        <BrightcoveIframe
          ref={iframeRef}
          className="original"
          title={embedData.alt ?? data.name ?? fallbackTitle}
          aria-label={embedData.alt ?? data.name ?? fallbackTitle}
          frameBorder="0"
          {...originalVideoProps}
          allowFullScreen
        />
      </div>
      <EmbedByline type="video" copyright={data.copyright!} description={parsedDescription} />
    </Figure>
  );
};

export default BrightcoveEmbed;
