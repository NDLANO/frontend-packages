/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import parse from "html-react-parser";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { BrightcoveEmbedData, BrightcoveMetaData, BrightcoveVideoSource } from "@ndla/types-embed";
import EmbedErrorPlaceholder from "./EmbedErrorPlaceholder";
import { RenderContext } from "./types";
import { Figure } from "../Figure";
import { EmbedByline } from "../LicenseByline";

interface Props {
  embed: BrightcoveMetaData;
  isConcept?: boolean;
  renderContext?: RenderContext;
}

const LinkedVideoButton = styled(Button, {
  base: {
    marginInlineStart: "xsmall",
    alignSelf: "flex-end",
  },
});

const BrightcoveIframe = styled("iframe", {
  base: {
    width: "100%",
    height: "auto",
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
const BrightcoveEmbed = ({ embed, isConcept, renderContext = "article" }: Props) => {
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

  const linkedVideoId = isNumeric(data.link?.text) ? data.link?.text : undefined;

  const originalVideoProps = getIframeProps(embedData, data.sources);
  const alternativeVideoProps = linkedVideoId
    ? getIframeProps({ ...embedData, videoid: linkedVideoId }, data.sources)
    : undefined;

  return (
    <Figure type={isConcept ? "full-column" : "full"}>
      <BrightcoveIframe
        ref={iframeRef}
        className="original"
        title={embedData.alt ?? data.name ?? fallbackTitle}
        aria-label={embedData.alt ?? data.name ?? fallbackTitle}
        frameBorder="0"
        {...(alternativeVideoProps && !showOriginalVideo ? alternativeVideoProps : originalVideoProps)}
        allowFullScreen
      />
      <EmbedByline type="video" copyright={data.copyright!} description={parsedDescription}>
        {!!linkedVideoId && (
          <LinkedVideoButton variant="secondary" onClick={() => setShowOriginalVideo((p) => !p)}>
            {t(`figure.button.${!showOriginalVideo ? "original" : "alternative"}`)}
          </LinkedVideoButton>
        )}
      </EmbedByline>
    </Figure>
  );
};

export default BrightcoveEmbed;
