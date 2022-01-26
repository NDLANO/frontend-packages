/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IAudioMetaInformation, IAudioSummary } from '@ndla/types-audio-api';
import React from 'react';
import BEMHelper from 'react-bem-helper';
import AudioSearchResult from './AudioSearchResult';

const classes = new BEMHelper({
  name: 'audio-search-list',
  prefix: 'c-',
});

interface Props {
  audios: IAudioSummary[];
  searching: boolean;
  locale: string;
  translations: {
    noResults: string;
    useAudio: string;
  };
  onError: (err: any) => void;
  fetchAudio: (id: number) => Promise<IAudioMetaInformation>;
  onAudioSelect: (audio: IAudioSummary) => void;
}

export default function AudioSearchList({
  audios,
  searching,
  locale,
  translations,
  onError,
  fetchAudio,
  onAudioSelect,
}: Props) {
  if ((!audios || audios.length === 0) && !searching) {
    return <p>{translations.noResults}</p>;
  }
  if (searching && !((audios?.length ?? 0) > 0)) {
    return <div {...classes('result-spinner')} />;
  }
  return (
    <div {...classes('list')}>
      {audios?.map((audio) => (
        <AudioSearchResult
          key={audio.id}
          audio={audio}
          fetchAudio={fetchAudio}
          onError={onError}
          locale={locale}
          translations={translations}
          onAudioSelect={onAudioSelect}
        />
      ))}
    </div>
  );
}
