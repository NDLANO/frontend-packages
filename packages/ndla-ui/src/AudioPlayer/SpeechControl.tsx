/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { VolumeUp } from '@ndla/icons/common';

const SpeechPlayButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  cursor: pointer;
  color: ${colors.brand.primary};
  margin-right: 0;

  &:hover,
  &:active,
  &:focus {
    color: ${colors.brand.secondary};
  }
  .c-icon {
    width: 24px;
    height: 24px;
  }
`;

type Props = {
  src: string;
  title: string;
};

const SpeechControl = ({ src, title }: Props) => {
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
    <>
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <SpeechPlayButton type="button" onClick={togglePlay}>
        <VolumeUp role="img" aria-label="play" title="play" />
      </SpeechPlayButton>
    </>
  );
};

export default SpeechControl;
