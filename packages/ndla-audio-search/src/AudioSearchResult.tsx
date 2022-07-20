/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { LicenseByline, getLicenseByAbbreviation } from '@ndla/licenses';
import Button from '@ndla/button';
import { IAudioMetaInformation, IAudioSummary } from '@ndla/types-audio-api';
import { spacing } from '@ndla/core';
import AudioBar from './AudioBar';

const StyledListItem = styled.div`
  &:not(:last-child) {
    padding-bottom: 1em;
    border-bottom: 1px solid $brand-color--lighter;
  }
`;

const InnerListItem = styled.div`
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
      <InnerListItem>
        <h2>{audio.title?.title}</h2>
        <LicenseWrapper>
          {license.rights ? <LicenseByline licenseRights={license.rights} locale={locale} /> : license}
        </LicenseWrapper>
        <AudioBar audio={audio} fetchAudio={fetchAudio} onError={onError} />
      </InnerListItem>
      <Button outline onClick={() => onAudioSelect(audio)}>
        {translations.useAudio}
      </Button>
    </StyledListItem>
  );
}
