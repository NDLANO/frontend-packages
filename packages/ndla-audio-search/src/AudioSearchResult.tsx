/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import BEMHelper from 'react-bem-helper';
import { LicenseByline, getLicenseByAbbreviation } from '@ndla/licenses';
import Button from '@ndla/button';
import { IAudioMetaInformation, IAudioSummary } from '@ndla/types-audio-api';
import AudioBar from './AudioBar';

const classes = new BEMHelper({
  name: 'audio-search',
  prefix: 'c-',
});

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
    <div key={audio.id} {...classes('list-item')}>
      <div {...classes('list-item-inner')}>
        <h2>{audio.title?.title}</h2>
        <div {...classes('license')}>
          {license.rights ? <LicenseByline licenseRights={license.rights} locale={locale} /> : license}
        </div>
        <AudioBar audio={audio} fetchAudio={fetchAudio} onError={onError} />
      </div>
      <Button outline onClick={() => onAudioSelect(audio)}>
        {translations.useAudio}
      </Button>
    </div>
  );
}
