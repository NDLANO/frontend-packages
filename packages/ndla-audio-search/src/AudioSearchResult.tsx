/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { colors, spacing } from "@ndla/core";
import { getLicenseByAbbreviation, LicenseLocaleType } from "@ndla/licenses";
import { SafeLink } from "@ndla/safelink";
import { IAudioMetaInformation, IAudioSummary } from "@ndla/types-backend/audio-api";
import AudioBar from "./AudioBar";

const StyledListItem = styled.div`
  &:not(:last-child) {
    padding-bottom: 1em;
    border-bottom: 1px solid ${colors.brand.lighter};
  }
`;

const StyledHeading = styled.h2`
  margin-top: 30px;
`;

const LicenseWrapper = styled.div`
  margin-bottom: ${spacing.small};
`;

const StyledContainer = styled.div`
  margin-bottom: ${spacing.small};
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

interface Props {
  audio: IAudioSummary;
  translations: { useAudio: string };
  fetchAudio: (id: number) => Promise<IAudioMetaInformation>;
  onError: (err: any) => void;
  locale: string;
  onAudioSelect: (audio: IAudioSummary) => void;
}

export default function AudioSearchResult({ audio, fetchAudio, onError, locale, translations, onAudioSelect }: Props) {
  const license = getLicenseByAbbreviation(audio.license, locale);
  return (
    <StyledListItem key={audio.id}>
      <StyledContainer>
        <StyledHeading>{audio.title?.title}</StyledHeading>
        <LicenseWrapper>{license.rights ? <LicenseLink license={license} /> : license.title}</LicenseWrapper>
        <AudioBar audio={audio} fetchAudio={fetchAudio} onError={onError} />
      </StyledContainer>
      <ButtonV2 variant="outline" onClick={() => onAudioSelect(audio)}>
        {translations.useAudio}
      </ButtonV2>
    </StyledListItem>
  );
}
