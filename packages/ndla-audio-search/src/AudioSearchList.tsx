/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from "react";
import { Text } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { IAudioMetaInformation, IAudioSummary } from "@ndla/types-backend/audio-api";
import AudioSearchResult from "./AudioSearchResult";

const StyledList = styled("ul", {
  base: {
    listStyle: "none",
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
  loadingIndicator: ReactNode;
}

export default function AudioSearchList({
  audios,
  searching,
  locale,
  translations,
  onError,
  fetchAudio,
  onAudioSelect,
  loadingIndicator,
}: Props) {
  if (!audios.length && !searching) {
    return <Text>{translations.noResults}</Text>;
  }
  if (searching) {
    return loadingIndicator;
  }

  return (
    <StyledList>
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
    </StyledList>
  );
}
