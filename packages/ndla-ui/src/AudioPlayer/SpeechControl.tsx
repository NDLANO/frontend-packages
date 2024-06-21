/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { IconButtonV2 } from "@ndla/button";
import { VolumeUp } from "@ndla/icons/common";
import { Tooltip } from "@ndla/tooltip";

type Props = {
  src: string;
  title: string;
  type?: "gloss" | "audio";
};

const SpeechControl = ({ src, title, type = "audio" }: Props) => {
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
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <Tooltip tooltip={t(`${type}.play`)}>
        <IconButtonV2 type="button" onClick={togglePlay} aria-label={t(`${type}.play`)} variant="ghost">
          <VolumeUp />
        </IconButtonV2>
      </Tooltip>
    </div>
  );
};

export default SpeechControl;
