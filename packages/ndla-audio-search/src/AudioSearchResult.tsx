/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { getLicenseByAbbreviation } from '@ndla/licenses';
import { LicenseByline } from '@ndla/notion';
import { ButtonV2 } from '@ndla/button';
import { IAudioMetaInformation, IAudioSummary } from '@ndla/types-audio-api';
import { colors, spacing } from '@ndla/core';
import AudioBar from './AudioBar';

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
      <div>
        <StyledHeading>{audio.title?.title}</StyledHeading>
        <LicenseWrapper>
          {license.rights ? <LicenseByline licenseRights={license.rights} locale={locale} /> : license}
        </LicenseWrapper>
        <AudioBar audio={audio} fetchAudio={fetchAudio} onError={onError} />
      </div>
      <ButtonV2 variant="outline" onClick={() => onAudioSelect(audio)}>
        {translations.useAudio}
      </ButtonV2>
    </StyledListItem>
  );
}
