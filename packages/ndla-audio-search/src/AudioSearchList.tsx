/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Spinner } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { IAudioMetaInformation, IAudioSummary } from "@ndla/types-backend/audio-api";
import AudioSearchResult from "./AudioSearchResult";

const SpinnerWrapper = styled("div", {
  base: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
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
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );
  }

  return (
    <ul>
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
    </ul>
  );
}
