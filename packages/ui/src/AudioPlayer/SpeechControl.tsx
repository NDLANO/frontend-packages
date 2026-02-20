/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { VolumeUpFill } from "@ndla/icons";
import { IconButton } from "@ndla/primitives";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

type Props = {
  src: string;
  title: string;
  type?: "gloss" | "audio";
};

export const SpeechControl = ({ src, title, type = "audio" }: Props) => {
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  };
  return (
    <div data-embed-type="speech">
      {/* oxlint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <IconButton variant="tertiary" aria-label={t(`${type}.play`)} title={t(`${type}.play`)} onClick={togglePlay}>
        <VolumeUpFill />
      </IconButton>
    </div>
  );
};
