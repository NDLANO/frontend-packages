/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { Menu, MenuButton, MenuItem, MenuPopover, MenuItems } from '@reach/menu-button';
import {
  SliderInput,
  SliderTrack,
  SliderRange,
  SliderHandle,
  SliderOrientation,
} from '@reach/slider';
import { Play, Pause } from '@ndla/icons/common';
import { breakpoints, colors, fonts, misc, mq, spacing } from '@ndla/core';
import { injectT, tType } from '@ndla/i18n';

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
  background-image: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19.8358 20.8769C17.7849 22.6711 15.1504 23.6564 12.4254 23.6482C9.70049 23.6401 7.07191 22.6391 5.03176 20.8326C2.99161 19.0262 1.67975 16.5381 1.34176 13.8342C1.00377 11.1303 1.66282 8.39585 3.19553 6.1428C4.72825 3.88975 7.02955 2.27253 9.66866 1.59387C12.3078 0.915214 15.1037 1.22165 17.5332 2.45581C19.9627 3.68998 21.8591 5.76726 22.8674 8.2988M23.5676 1.29649L23.5676 8.2988L16.5653 8.2988' stroke='%23184673' stroke-width='1.52778' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  ${mq.range({ until: breakpoints.tabletWide })} {
    order: 3;
  }
`;
const Back15SecButton = styled(ForwardRewindButton)`
  background-image: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.19004 21.3306C7.24095 23.1248 9.87547 24.11 12.6004 24.1019C15.3254 24.0937 17.954 23.0927 19.9941 21.2863C22.0343 19.4798 23.3461 16.9918 23.6841 14.2879C24.0221 11.5839 23.3631 8.84951 21.8303 6.59646C20.2976 4.3434 17.9963 2.72618 15.3572 2.04753C12.7181 1.36887 9.92213 1.67531 7.49267 2.90947C5.0632 4.14363 3.16681 6.22092 2.15848 8.75246M1.45825 1.75015L1.45825 8.75246L8.46057 8.75246' stroke='%23184673' stroke-width='1.52778' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
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

type SpeedValueButtonProps = {
  selected?: boolean;
};
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
  ${props =>
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

const VolumeButton = styled(MenuButton)`
  background-color: inherit;
  background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10.6667C20.828 11.2877 21.5 12.0929 21.9628 13.0186C22.4257 13.9443 22.6667 14.9651 22.6667 16C22.6667 17.035 22.4257 18.0557 21.9628 18.9814C21.5 19.9071 20.828 20.7124 20 21.3334' stroke='%23184673' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M23.5999 6.66669C24.9918 7.79155 26.1145 9.21352 26.8858 10.8284C27.6571 12.4434 28.0574 14.2104 28.0574 16C28.0574 17.7897 27.6571 19.5567 26.8858 21.1716C26.1145 22.7865 24.9918 24.2085 23.5999 25.3334' stroke='%23184673' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 20H5.33333C4.97971 20 4.64057 19.8595 4.39052 19.6095C4.14048 19.3594 4 19.0203 4 18.6666V13.3333C4 12.9797 4.14048 12.6406 4.39052 12.3905C4.64057 12.1405 4.97971 12 5.33333 12H8L12.6667 5.99998C12.7832 5.77362 12.9769 5.59641 13.2127 5.50037C13.4484 5.40433 13.7108 5.3958 13.9523 5.47631C14.1939 5.55682 14.3986 5.72107 14.5296 5.93937C14.6607 6.15768 14.7093 6.41564 14.6667 6.66665V25.3333C14.7093 25.5843 14.6607 25.8423 14.5296 26.0606C14.3986 26.2789 14.1939 26.4431 13.9523 26.5237C13.7108 26.6042 13.4484 26.5956 13.2127 26.4996C12.9769 26.4036 12.7832 26.2263 12.6667 26L8 20Z' stroke='%23184673' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 0;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;

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

const Controls = ({ src, title, t }: Props & tType) => {
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
    <>
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <ControlsWrapper>
        <PlayButton type="button" onClick={togglePlay} title="play" aria-label="play">
          <span aria-hidden>
            {playing ? (
              <Pause role="img" aria-label="pause" title="play" />
            ) : (
              <Play role="img" aria-label="play" title="play" />
            )}
          </span>
        </PlayButton>
        <Forward15SecButton
          type="button"
          title={t('audio.controls.forward15sec')}
          aria-label={t('audio.controls.forward15sec')}
          onClick={() => {
            onSeekSeconds(15);
          }}>
          15
        </Forward15SecButton>
        <SpeedWrapper>
          <Menu>
            <SpeedButton
              type="button"
              as="button"
              title={t('audio.controls.selectSpeed')}
              aria-label={t('audio.controls.selectSpeed')}>
              {speedValue}x
            </SpeedButton>
            <SpeedMenu as="div" portal={false}>
              <div>
                <SpeedList as="div">
                  {speedValues.map(speed => (
                    <SpeedValueButton
                      type="button"
                      as="button"
                      key={speed}
                      selected={speed === speedValue}
                      onSelect={() => {
                        setSpeedValue(speed);
                      }}>
                      {speed}x{speed === speedValue && <SpeedSelectedMark />}
                    </SpeedValueButton>
                  ))}
                </SpeedList>
              </div>
            </SpeedMenu>
          </Menu>
        </SpeedWrapper>
        <Back15SecButton
          type="button"
          title={t('audio.controls.rewind15sec')}
          aria-label={t('audio.controls.rewind15sec')}
          onClick={() => {
            onSeekSeconds(-15);
          }}>
          15
        </Back15SecButton>
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
            />
            <VolumeMenu as="div" portal={false}>
              <VolumeList>
                <VolumeSliderWrapper>
                  <SliderInput
                    orientation={SliderOrientation.Vertical}
                    onChange={handleVolumeSliderChange}
                    value={volumeValue}>
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
    </>
  );
};

export default injectT(Controls);
