/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { VolumeUpFill } from "@ndla/icons";
import { PlayButton } from "./PlayButton";
import { useAudioControls } from "./useAudioControls";

type Props = {
  src: string;
  title: string;
};

export const SpeechControl = ({ src, title }: Props) => {
  const { audioRef, togglePlay } = useAudioControls();

  return (
    <div data-embed-type="speech">
      {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <PlayButton variant="tertiary" onClick={togglePlay}>
        <VolumeUpFill />
      </PlayButton>
    </div>
  );
};
