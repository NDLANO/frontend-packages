/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Menu, MenuButton, MenuItem, MenuPopover, MenuItems, MenuItemProps } from '@reach/menu-button';
import { SliderInput, SliderTrack, SliderRange, SliderHandle, SliderOrientation } from '@reach/slider';
import { Play, Pause, VolumeUp } from '@ndla/icons/common';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import { Back15, Forward15 } from '@ndla/icons/action';

const ControlsWrapper = styled.div`
  border: 1px solid ${colors.brand.lighter};
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  font-family: ${fonts.sans};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-wrap: wrap;
  }
  padding: ${spacing.small};
  ${mq.range({ from: breakpoints.tabletWide })} {
    padding: ${spacing.small} ${spacing.normal};
  }
`;

const PlayButton = styled.button`
  background: ${colors.brand.lighter};
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  cursor: pointer;
  color: ${colors.brand.primary};
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transition: ${misc.transition.default};
  margin-right: ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 4;
    margin-left: ${spacing.small};
  }

  &:hover,
  &:active,
  &:focus {
    background: ${colors.brand.primary};
    color: #ffffff;
  }

  .c-icon {
    width: 24px;
    height: 24px;
  }
`;

const ForwardRewindButton = styled.button`
  background-color: inherit;
  background-position: center;
  background-repeat: no-repeat;
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 9px;
  line-height: 23px;
  color: ${colors.brand.dark};
  font-family: ${fonts.sans};
  transition: ${misc.transition.default};

  &:hover {
    background-color: ${colors.brand.greyLighter};
  }
`;

const Forward15SecButton = styled(ForwardRewindButton)`
  svg {
    fill: ${colors.brand.primary};
    width: 24px;
    height: 24px;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 3;
  }
`;
const Back15SecButton = styled(ForwardRewindButton)`
  svg {
    fill: ${colors.brand.primary};
    width: 24px;
    height: 24px;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 5;
  }
`;

const SpeedWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 2;
  }
`;
const SpeedButton = styled(MenuButton)`
  height: 32px;
  border: 0;
  background: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  width: 52px;
  &:hover,
  &:active,
  &:focus,
  &[aria-expanded='true'] {
    background: ${colors.brand.greyLighter};
    border-radius: 27px;
    color: ${colors.text.primary};
  }
`;

const SpeedMenu = styled(MenuPopover)`
  position: absolute;
  bottom: 36px;
  z-index: 99;
`;

const SpeedList = styled(MenuItems)`
  background: #ffffff;
  border: 1px solid ${colors.brand.lighter};
  border-radius: 5px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;

interface SpeedValueButtonProps extends MenuItemProps {
  selected?: boolean;
}

const SpeedValueButton = styled(MenuItem)<SpeedValueButtonProps>`
  height: 28px;
  position: relative;
  background: none;
  border: 0;
  padding: 0 14px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: ${colors.text.light};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:active,
  &:focus,
  &[data-selected] {
    background: ${colors.brand.greyLighter};
    border-radius: 5px;
    color: ${colors.text.primary};
  }
  ${(props) =>
    props.selected &&
    `
    color: ${colors.text.primary};
    
  `}
`;

const SpeedSelectedMark = styled.span`
  border-radius: 50%;
  background: #d1372e;
  width: 6px;
  height: 6px;
  display: inline-block;
  align-self: flex-start;
  margin: 6px 0 0 2px;
`;

const Time = styled.div`
  font-size: 16px;
`;

const ProgressWrapper = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  margin: 0 ${spacing.small};
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 1;
    width: 100%;
    margin: 0;
    margin-bottom: ${spacing.normal};
  }
`;
const SliderWrapper = styled.div`
  cursor: pointer;
  flex: 1 1 auto;
  margin: 0 ${spacing.small};
`;

const ProgressBackground = styled(SliderTrack)`
  height: 4px;
  width: 100%;
  background: ${colors.brand.lighter};
  border-radius: 7px;
`;

const ProgressPlayed = styled(SliderRange)`
  height: 4px;
  background: #5cbc80;
  border-radius: 7px;
`;

const ProgressHandle = styled(SliderHandle)`
  width: 20px;
  height: 20px;
  background: #5cbc80;
  border-radius: 50%;
  top: -8px;
`;

const VolumeWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 6;
  }
`;

const WardButtonWrapper = styled.div<{ order: number }>`
  position: relative;
  display: flex;
  justify-content: center;
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${(props) =>
      `
    order: ${props.order};
  `}
  }
`;

const VolumeButton = styled(MenuButton)`
  background-color: inherit;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

  svg {
    fill: ${colors.brand.primary};
    width: 32px;
    height: 32px;
  }

  &:hover,
  &:active,
  &:focus,
  &[aria-expanded='true'] {
    background-color: ${colors.brand.greyLighter};
  }
`;

const VolumeMenu = styled(MenuPopover)`
  position: absolute;
  bottom: 52px;
  z-index: 99;
`;

const VolumeList = styled.div`
  box-shadow: 0 14px 20px -5px rgba(32, 88, 143, 0.17);
  border-radius: 60px;
  background: #ffffff;
  border: 1px solid ${colors.brand.lighter};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 32px;
  height: 128px;
`;

const VolumeSliderWrapper = styled.div`
  cursor: pointer;
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;

const VolumeSliderBackground = styled(SliderTrack)`
  height: 100%;
  width: 5px;
  background: ${colors.brand.lighter};
  border-radius: 7px;
`;

const VolumeSliderSelected = styled(SliderRange)`
  width: 5px;
  background: ${colors.brand.secondary};
  border-radius: 7px;
  bottom: 0;
`;

const VolumeSliderHandle = styled(SliderHandle)`
  width: 20px;
  height: 20px;
  background: ${colors.brand.primary};
  border-radius: 50%;
  left: -8px;
`;

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const currentSeconds = seconds % 60;

  const formattedSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
  return `${minutes}:${formattedSeconds}`;
};

const speedValues = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2];

type Props = {
  src: string;
  title: string;
};

const Controls = ({ src, title }: Props) => {
  const { t } = useTranslation();
  const [speedValue, setSpeedValue] = useState(1);
  const [volumeValue, setVolumeValue] = useState(100);
  const [sliderValue, setSliderValue] = useState(0);
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
        const percent = Math.round((currentTime / duration) * 100);
        setSliderValue(percent);
        setCurrentTime(Math.round(currentTime));
        setRemainingTime(Math.round(duration - currentTime));
      };

      const handleLoadedMetaData = () => {
        const { currentTime, duration } = audioElement;
        setCurrentTime(Math.round(currentTime));
        setRemainingTime(Math.round(duration - currentTime));
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

  const handleSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    }
  };

  const handleVolumeSliderChange = (value: number) => {
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
      setVolumeValue(value);
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <ControlsWrapper>
        <PlayButton type="button" onClick={togglePlay} title="play" aria-label="play">
          <span aria-hidden>
            {playing ? (
              <Pause role="img" aria-label="Pause" title="Pause" />
            ) : (
              <Play role="img" aria-label="Play" title="Play" />
            )}
          </span>
        </PlayButton>
        <WardButtonWrapper order={3}>
          <Back15SecButton
            type="button"
            title={t('audio.controls.rewind15sec')}
            aria-label={t('audio.controls.rewind15sec')}
            onClick={() => {
              onSeekSeconds(-15);
            }}
          >
            <Back15 />
          </Back15SecButton>
        </WardButtonWrapper>

        <SpeedWrapper>
          <Menu>
            <SpeedButton
              type="button"
              as="button"
              title={t('audio.controls.selectSpeed')}
              aria-label={t('audio.controls.selectSpeed')}
            >
              {speedValue}x
            </SpeedButton>
            <SpeedMenu as="div" portal={false}>
              <div>
                <SpeedList as="div">
                  {speedValues.map((speed) => (
                    <SpeedValueButton
                      type="button"
                      //@ts-ignore
                      as="button"
                      key={speed}
                      selected={speed === speedValue}
                      onSelect={() => {
                        setSpeedValue(speed);
                      }}
                    >
                      {speed}x{speed === speedValue && <SpeedSelectedMark />}
                    </SpeedValueButton>
                  ))}
                </SpeedList>
              </div>
            </SpeedMenu>
          </Menu>
        </SpeedWrapper>
        <WardButtonWrapper order={5}>
          <Forward15SecButton
            type="button"
            title={t('audio.controls.forward15sec')}
            aria-label={t('audio.controls.forward15sec')}
            onClick={() => {
              onSeekSeconds(15);
            }}
          >
            <Forward15 />
          </Forward15SecButton>
        </WardButtonWrapper>
        <ProgressWrapper>
          <Time>{formatTime(currentTime)}</Time>
          <SliderWrapper>
            <SliderInput onChange={handleSliderChange} value={sliderValue}>
              <ProgressBackground as="div">
                <ProgressPlayed as="div" />
                <ProgressHandle as="div" />
              </ProgressBackground>
            </SliderInput>
          </SliderWrapper>
          <Time>-{formatTime(remainingTime)}</Time>
        </ProgressWrapper>
        <VolumeWrapper>
          <Menu>
            {/* @ts-ignore */}
            <VolumeButton
              type="button"
              as="button"
              title={t('audio.controls.adjustVolume')}
              aria-label={t('audio.controls.adjustVolume')}
            >
              <VolumeUp />
            </VolumeButton>
            <VolumeMenu as="div" portal={false}>
              <VolumeList>
                <VolumeSliderWrapper>
                  <SliderInput
                    orientation={SliderOrientation.Vertical}
                    onChange={handleVolumeSliderChange}
                    value={volumeValue}
                  >
                    <VolumeSliderBackground as="div">
                      <VolumeSliderSelected as="div" />
                      <VolumeSliderHandle as="div" />
                    </VolumeSliderBackground>
                  </SliderInput>
                </VolumeSliderWrapper>
              </VolumeList>
            </VolumeMenu>
          </Menu>
        </VolumeWrapper>
      </ControlsWrapper>
    </div>
  );
};

export default Controls;
