/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* eslint jsx-a11y/media-has-caption: 0 */

import { useEffect, useState } from "react";
import type { IAudioMetaInformationDTO } from "@ndla/types-backend/audio-api";

interface Props {
  audio: { id: number };
  fetchAudio: (id: number) => Promise<IAudioMetaInformationDTO>;
  onError: (err: any) => void;
}

const AudioBar = ({ audio, fetchAudio, onError }: Props) => {
  const [audioSource, setAudioSource] = useState<string | undefined>(undefined);
  const [audioType, setAudioType] = useState<string | undefined>(undefined);

  const loadAudio = () => {
    fetchAudio(audio.id)
      .then((result) => {
        setAudioSource(result.audioFile.url);
        setAudioType(result.audioFile.mimeType);
      })
      .catch((err) => {
        onError(err);
      });
  };

  useEffect(
    () => loadAudio(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return <audio controls>{!!audioSource && <source src={audioSource} type={audioType} />}</audio>;
};

export default AudioBar;
