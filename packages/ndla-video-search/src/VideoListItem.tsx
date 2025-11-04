/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { CloseLine, PanoramaPhotosphere } from "@ndla/icons";
import { getLicenseByNBTitle, type LicenseLocaleType } from "@ndla/licenses";
import { Image, Text, ListItemContent, ListItemRoot, Button, IconButton } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { BrightcoveApiType } from "@ndla/types-embed";
import type { VideoTranslations } from "./VideoSearch";

const ButtonWrapper = styled("div", {
  base: {
    display: "flex",
    gap: "small",
  },
});

const PreviewIframe = styled("iframe", {
  base: {
    minHeight: "surface.xxsmall",
  },
});

const PreviewWrapper = styled("div", {
  base: {
    display: "grid",
    gap: "xsmall",
    gridTemplateColumns: "repeat(3,1fr)",
    padding: "small",
    borderBlockEnd: "1px solid",
    borderColor: "stroke.subtle",
  },
});

const StyledImage = styled(Image, {
  base: {
    minWidth: "surface.xxsmall",
    height: "surface.4xsmall",
    objectFit: "cover",
    border: "1px solid",
    borderColor: "stroke.subtle",
  },
});

const StyledVideoMeta = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xxsmall",
  },
});
const StyledListItemContent = styled(ListItemContent, {
  base: {
    alignItems: "flex-end",
    tabletDown: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

const StyledIconButton = styled(IconButton, {
  base: {
    marginLeft: "auto",
  },
});

const StyledListItemRoot = styled(ListItemRoot, {
  base: {
    paddingBlock: "medium",
    tabletDown: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

interface LicenseProps {
  license: LicenseLocaleType | string;
}
const License = ({ license }: LicenseProps) => {
  if (typeof license === "string") return <Text>{license}</Text>;
  if (license.url?.length) {
    return (
      <a href={license.url} rel="license">
        {license.abbreviation}
      </a>
    );
  }
  return <Text>{license.abbreviation}</Text>;
};

interface VideoListItemProps {
  video: BrightcoveApiType;
  translations: VideoTranslations;
  locale: string;
  onVideoSelect: (video: BrightcoveApiType) => void;
}

export const VideoListItem = ({ video, onVideoSelect, translations, locale }: VideoListItemProps) => {
  const [isPreviewing, setIsPreviewing] = useState(false);
  const license = video.custom_fields?.license ? getLicenseByNBTitle(video.custom_fields.license, locale) : "";

  return (
    <li>
      <StyledListItemRoot nonInteractive>
        <StyledImage src={video.images?.thumbnail?.src} alt="" variant="rounded" />
        <StyledListItemContent>
          <StyledVideoMeta>
            <Text textStyle="title.medium">
              {video.name}
              {video.projection === "equirectangular" && (
                <PanoramaPhotosphere
                  aria-hidden={false}
                  aria-label={translations.is360Video}
                  title={translations.is360Video}
                />
              )}
            </Text>
            <Text>{video.custom_fields?.licenseinfo ?? ""}</Text>
            <License license={license} />
          </StyledVideoMeta>
          <ButtonWrapper>
            <Button
              variant="secondary"
              size="small"
              onClick={() => setIsPreviewing((p) => !p)}
              aria-expanded={isPreviewing}
              aria-controls={`video-preview-${video.id}`}
            >
              {translations.previewVideo}
            </Button>
            <Button size="small" onClick={() => onVideoSelect(video)}>
              {translations.addVideo}
            </Button>
          </ButtonWrapper>
        </StyledListItemContent>
      </StyledListItemRoot>
      {!!isPreviewing && (
        <PreviewWrapper id={`video-preview-${video.id}`}>
          <div />
          <PreviewIframe
            title={video.name}
            src={`//players.brightcove.net/${video.account_id}/BkLm8fT_default/index.html?videoId=${video.id}`}
            allowFullScreen
          />
          <StyledIconButton
            variant="secondary"
            aria-label={translations.close}
            title={translations.close}
            onClick={() => setIsPreviewing(false)}
          >
            <CloseLine />
          </StyledIconButton>
        </PreviewWrapper>
      )}
    </li>
  );
};
