/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { colors, misc } from "@ndla/core";
import { IAudioMetaInformation, IAudioSummary } from "@ndla/types-backend/audio-api";
import AudioSearchResult from "./AudioSearchResult";

const StyledResultSpinner = styled.div`
  border: 0.4em solid ${colors.brand.greyLight};
  border-bottom-color: ${colors.brand.primary};
  border-radius: ${misc.borderRadiusLarge};
  margin: 0 auto;
  animation: loadVideoSpinner 0.7s linear infinite;
  height: 3em;
  width: 3em;
`;

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
    return <StyledResultSpinner />;
  }
  return (
    <div>
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
