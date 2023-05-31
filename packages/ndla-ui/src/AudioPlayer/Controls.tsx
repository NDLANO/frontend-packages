/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Root, Trigger, Item, Content } from '@radix-ui/react-dropdown-menu';
import { Root as SliderRoot, Track, Range, SliderThumb } from '@radix-ui/react-slider';
import { Root as PopoverRoot, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Play, Pause, VolumeUp } from '@ndla/icons/common';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Back15, Forward15 } from '@ndla/icons/action';
import { ButtonV2, IconButtonV2 } from '../../../button/src';

const ControlsWrapper = styled.div`
  border: 1px solid ${colors.brand.lighter};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.white};
  font-family: ${fonts.sans};
  gap: ${spacing.xsmall};
  padding: ${spacing.small} ${spacing.normal};
  ${mq.range({ until: breakpoints.tabletWide })} {
    display: grid;
    padding: ${spacing.small};
    grid-template-columns: 1fr repeat(5, auto) 1fr;
    grid-template-areas:
      'track  track track     track track     track   track'
      '.      speed backwards play  forwards  volume  .';
  }
`;

const PlayButton = styled(IconButtonV2)`
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-area: play;
  }
`;

const Forward15SecButton = styled(IconButtonV2)`
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-area: forwards;
  }
`;
const Back15SecButton = styled(IconButtonV2)`
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-area: backwards;
  }
`;

const SpeedButton = styled(ButtonV2)`
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-area: speed;
  }
`;

const SpeedList = styled(Content)`
  background: ${colors.white};
  border: 1px solid ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SpeedValueButton = styled(Item)`
  height: 28px;
  padding: 0 14px;
  cursor: pointer;
  font-weight: ${fonts.weight.semibold};
  ${fonts.sizes('14px')};
  color: ${colors.text.light};
  display: flex;
  justify-content: center;
  &:hover,
  &:active,
  &:focus,
  &[data-highlighted] {
    background: ${colors.brand.greyLighter};
    border-radius: 5px;
    outline: none;
    color: ${colors.text.primary};
  }
`;

const SpeedSelectedMark = styled.span`
  border-radius: 50%;
  background: #d1372e;
  width: 6px;
  height: 6px;
  margin: 6px 0 0 2px;
`;

const Time = styled.div`
  ${fonts.sizes('16px')};
`;

const ProgressWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-area: track;
  }
`;

const SliderWrapper = styled(SliderRoot)`
  cursor: pointer;
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
`;

const StyledTrack = styled(Track)`
  height: 4px;
  width: 100%;
  background: ${colors.brand.lighter};
  border-radius: 7px;
`;

const StyledRange = styled(Range)`
  position: absolute;
  height: 4px;
  background: #5cbc80;
  border-radius: 7px;
`;

const StyledThumb = styled(SliderThumb)`
  display: block;
  width: 20px;
  height: 20px;
  background: #5cbc80;
  border-radius: 50%;
  outline: none;
`;

const VolumeWrapper = styled(PopoverRoot)`
  position: relative;
  display: flex;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    grid-area: volume;
  }
`;

const VolumeList = styled(PopoverContent)`
  box-shadow: 0 14px 20px -5px rgba(32, 88, 143, 0.17);
  border-radius: 60px;
  background: ${colors.white};
  padding: ${spacing.small};
  border: 1px solid ${colors.brand.lighter};
  height: 128px;
`;

const VolumeSliderWrapper = styled(SliderRoot)`
  cursor: pointer;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  touch-action: none;
`;

const VolumeSliderBackground = styled(Track)`
  height: 100%;
  width: 5px;
  background: ${colors.brand.lighter};
  border-radius: 7px;
`;

const VolumeSliderSelected = styled(Range)`
  position: absolute;
  width: 5px;
  background: ${colors.brand.secondary};
  border-radius: 7px;
`;

const VolumeSliderHandle = styled(SliderThumb)`
  display: block;
  width: 20px;
  height: 20px;
  background: ${colors.brand.primary};
  border-radius: 50%;
`;

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const currentSeconds = seconds % 60;

  const formattedSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
  return `${minutes}:${formattedSeconds}`;
};

const speedValues = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

interface Props {
  src: string;
  title: string;
}

const Controls = ({ src, title }: Props) => {
  const { t } = useTranslation();
  const [speedValue, setSpeedValue] = useState(1);
  const [volumeValue, setVolumeValue] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speedValue;
    }
  }, [speedValue]);

  useEffect(() => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      const handleTimeUpdate = () => {
        const { currentTime, duration } = audioElement;
        setCurrentTime(Math.round(currentTime));
        setRemainingTime(Math.round(duration - currentTime));
      };

      const handleLoadedMetaData = () => {
        const { currentTime, duration } = audioElement;
        setCurrentTime(Math.round(currentTime));
        setRemainingTime(Math.round(duration - currentTime));
      };

      const handleTimeEnded = () => {
        setPlaying(false);
      };

      audioElement.addEventListener('timeupdate', handleTimeUpdate);
      audioElement.addEventListener('loadedmetadata', handleLoadedMetaData);
      audioElement.addEventListener('ended', handleTimeEnded);
      return () => {
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetaData);
        audioElement.removeEventListener('ended', handleTimeEnded);
      };
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      if (!playing) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
      setPlaying(!playing);
    }
  };

  const onSeekSeconds = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0];
    }
  };

  const handleVolumeSliderChange = (values: number[]) => {
    if (audioRef.current) {
      audioRef.current.volume = values[0] / 100;
      setVolumeValue(values[0]);
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <ControlsWrapper>
        <PlayButton
          aria-label={t(playing ? t('audio.pause') : t('audio.play'))}
          colorTheme="lighter"
          size="normal"
          onClick={togglePlay}
        >
          {playing ? <Pause /> : <Play />}
        </PlayButton>
        <Back15SecButton
          variant="ghost"
          colorTheme="greyLighter"
          title={t('audio.controls.rewind15sec')}
          aria-label={t('audio.controls.rewind15sec')}
          onClick={() => onSeekSeconds(-15)}
        >
          <Back15 />
        </Back15SecButton>

        <Root>
          <Trigger asChild>
            <SpeedButton
              shape="pill"
              variant="ghost"
              size="normal"
              colorTheme="greyLighter"
              title={t('audio.controls.selectSpeed')}
              aria-label={t('audio.controls.selectSpeed')}
            >
              {speedValue}x
            </SpeedButton>
          </Trigger>
          <SpeedList>
            {speedValues.map((speed) => (
              <SpeedValueButton key={speed} onSelect={() => setSpeedValue(speed)}>
                {speed}x{speed === speedValue && <SpeedSelectedMark />}
              </SpeedValueButton>
            ))}
          </SpeedList>
        </Root>
        <Forward15SecButton
          colorTheme="greyLighter"
          variant="ghost"
          title={t('audio.controls.forward15sec')}
          aria-label={t('audio.controls.forward15sec')}
          onClick={() => onSeekSeconds(15)}
        >
          <Forward15 />
        </Forward15SecButton>
        <ProgressWrapper>
          <Time>{formatTime(currentTime)}</Time>
          <SliderWrapper
            value={[audioRef.current?.currentTime ?? 0]}
            defaultValue={[0]}
            step={1}
            max={audioRef.current?.duration ?? 0}
            onValueChange={handleSliderChange}
          >
            <StyledTrack>
              <StyledRange />
            </StyledTrack>
            <StyledThumb />
          </SliderWrapper>
          <Time>-{formatTime(remainingTime)}</Time>
        </ProgressWrapper>
        <VolumeWrapper>
          <PopoverTrigger asChild>
            <IconButtonV2 variant="ghost" colorTheme="greyLighter" aria-label={t('audio.controls.adjustVolume')}>
              <VolumeUp />
            </IconButtonV2>
          </PopoverTrigger>
          <VolumeList side="top">
            <VolumeSliderWrapper
              orientation="vertical"
              value={[volumeValue]}
              min={0}
              defaultValue={[100]}
              step={1}
              onValueChange={handleVolumeSliderChange}
            >
              <VolumeSliderBackground>
                <VolumeSliderSelected />
              </VolumeSliderBackground>
              <VolumeSliderHandle />
            </VolumeSliderWrapper>
          </VolumeList>
        </VolumeWrapper>
      </ControlsWrapper>
    </div>
  );
};

export default Controls;
