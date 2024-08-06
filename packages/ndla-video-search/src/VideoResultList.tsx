/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2, IconButtonV2 } from "@ndla/button";
import { breakpoints, colors, misc, mq, spacing } from "@ndla/core";
import { CloseLine } from "@ndla/icons/action";
import { PanoramaPhotosphere } from "@ndla/icons/common";
import { getLicenseByNBTitle, LicenseLocaleType } from "@ndla/licenses";
import { SafeLink } from "@ndla/safelink";
import { BrightcoveApiType } from "@ndla/types-embed";
import { Heading } from "@ndla/typography";
import { Translations } from "./VideoSearch";

interface Props {
  videos: BrightcoveApiType[];
  translations: Translations;
  locale: string;
  onSelectVideo: (video: BrightcoveApiType) => void;
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
  padding: 0;
  margin: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
`;

const StyledListElement = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

const StyledHeading = styled(Heading)`
  display: flex;
  gap: ${spacing.small};
  align-items: center;
  svg {
    color: ${colors.brand.primary};
    width: ${spacing.normal};
    height: ${spacing.normal};
  }
`;

const StyledImg = styled.img`
  width: 320px;
  height: 180px;
  object-fit: cover;
  border-radius: ${misc.borderRadius};
  flex-shrink: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: ${spacing.small};
  flex-wrap: wrap;
`;

export const VideoResultList = ({ videos, translations, locale, onSelectVideo }: Props) => {
  return (
    <StyledList>
      {videos.map((video, index) => (
        <VideoListItem
          key={`${video.id}-${index}`}
          video={video}
          translations={translations}
          locale={locale}
          onSelectVideo={onSelectVideo}
        />
      ))}
    </StyledList>
  );
};

const ItemWrapper = styled.div`
  display: flex;
  gap: ${spacing.normal};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
`;

const PreviewIframe = styled.iframe`
  min-height: 300px;
  border: none;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  border-radius: ${misc.borderRadius};
  gap: ${spacing.small};
  padding: ${spacing.small};
  background: ${colors.brand.light};
`;

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.brand.primary};
  text-decoration: underline;
  &:hover,
  &:focus-within {
    text-decoration: none;
  }
`;
interface LicenseLinkProps {
  license: LicenseLocaleType;
}
const LicenseLink = ({ license }: LicenseLinkProps) => {
  if (license.url?.length) {
    return (
      <StyledSafeLink to={license.url} rel="license">
        {license.abbreviation}
      </StyledSafeLink>
    );
  }
  return <span>{license.abbreviation}</span>;
};

interface VideoListItemProps {
  video: BrightcoveApiType;
  translations: Translations;
  locale: string;
  onSelectVideo: (video: BrightcoveApiType) => void;
}

export const VideoListItem = ({ video, onSelectVideo, translations, locale }: VideoListItemProps) => {
  const { t } = useTranslation();
  const [isPreviewing, setIsPreviewing] = useState(false);
  const license = video.custom_fields?.license ? getLicenseByNBTitle(video.custom_fields.license, locale) : "";
  return (
    <StyledListElement>
      <ItemWrapper>
        <StyledImg src={video.images?.thumbnail?.src ?? ""} alt="" />
        <ContentWrapper>
          <StyledHeading element="h3" margin="none" headingStyle="h3">
            {video.name}
            {video.projection === "equirectangular" && (
              <PanoramaPhotosphere
                aria-hidden={false}
                aria-label={translations.is360Video}
                title={translations.is360Video}
              />
            )}
          </StyledHeading>
          {video.custom_fields?.licenseinfo ?? ""}
          {typeof license === "string" ? license : <LicenseLink license={license} />}
          <ButtonWrapper>
            <ButtonV2 variant="outline" onClick={() => setIsPreviewing((p) => !p)}>
              {translations.previewVideo}
            </ButtonV2>
            <ButtonV2 onClick={() => onSelectVideo(video)}>{translations.addVideo}</ButtonV2>
          </ButtonWrapper>
        </ContentWrapper>
      </ItemWrapper>
      {isPreviewing && (
        <PreviewWrapper>
          <IconButtonV2
            variant="ghost"
            aria-label={t("close")}
            title={t("close")}
            onClick={() => setIsPreviewing(false)}
          >
            <CloseLine />
          </IconButtonV2>
          <PreviewIframe
            title={video.name}
            src={`//players.brightcove.net/${video.account_id}/BkLm8fT_default/index.html?videoId=${video.id}`}
            allowFullScreen
          />
        </PreviewWrapper>
      )}
    </StyledListElement>
  );
};
