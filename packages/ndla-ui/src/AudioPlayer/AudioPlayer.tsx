/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { Play, Pause, VolumeUp } from '@ndla/icons/common';
import { colors, fonts, spacing } from '@ndla/core';

const stopPropagation = (e: React.MouseEvent<HTMLElement>) => {
  e.stopPropagation();
};

const Heading = styled.h2`
  ${fonts.sizes('20px', '20px')};
  margin: ${spacing.small} 0;
`;

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

const PlayIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
`;

const PauseIconWrapper = styled.span`
  display: none;
  align-items: center;
`;

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${colors.brand.greyLighter};
  padding: ${spacing.xsmall} 20px;

  &.playing ${PlayIconWrapper} {
    display: none;
  }
  &.playing ${PauseIconWrapper} {
    display: inline-flex;
  }
`;

const PlayButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: ${spacing.small};
  cursor: pointer;

  .c-icon {
    width: 24px;
    height: 24px;
  }
`;

const TimeWrapper = styled.div`
  margin-right: ${spacing.small};
  ${fonts.sizes('14px', '22px')};
`;

const ProgressWrapper = styled.div`
  position: relative;
  height: 30px;
  cursor: pointer;
  flex: 1 1 auto;
`;

const ProgressBackground = styled.div`
  position: absolute;
  top: 13px;
  left: 0;
  height: 4px;
  background: #ffffff;
  width: 100%;
`;

const ProgressPlayed = styled.div`
  position: absolute;
  top: 13px;
  left: 0;
  height: 4px;
  background: ${colors.text.primary};
`;

type Props = {
  src: string;
  title: string;
  speech?: boolean;
};
const AudioPlayer = ({ src, title, speech = false }: Props) => {
  if (speech) {
    return (
      <div data-audio-player={1}>
        <audio src={src} title={title} preload="metadata" />
        <SpeechPlayButton type="button" onClick={stopPropagation} data-play={1}>
          <VolumeUp role="img" aria-label="play" title="play" />
        </SpeechPlayButton>
      </div>
    );
  }

  return (
    <div data-audio-player={1}>
      <Heading>{title}</Heading>
      <audio src={src} title={title} preload="metadata" />
      <ControlsWrapper data-controls={1}>
        <PlayButton type="button" onClick={stopPropagation} data-play={1}>
          <PlayIconWrapper>
            <Play role="img" aria-label="play" title="play" />
          </PlayIconWrapper>
          <PauseIconWrapper>
            <Pause role="img" aria-label="pause" title="play" />
          </PauseIconWrapper>
        </PlayButton>
        <TimeWrapper data-time={1}>0:00</TimeWrapper>
        <ProgressWrapper tabIndex={0} data-progress={1}>
          <ProgressBackground />
          <ProgressPlayed data-value="0" data-progress-played={1} />
        </ProgressWrapper>
      </ControlsWrapper>
    </div>
  );
};

export default AudioPlayer;
