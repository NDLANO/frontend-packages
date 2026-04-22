/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { SliderValueChangeDetails } from "@ark-ui/react";
import { useCallback, useRef, useState, type ReactEventHandler } from "react";

export const useAudioControls = () => {
  const [speedValue, setSpeedValue] = useState(1);
  const [volumeValue, setVolumeValue] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = useCallback(() => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
    setPlaying((p) => !p);
  }, []);

  const onPlaybackRateChange = useCallback((rate: number) => {
    setSpeedValue(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  }, []);

  const onSeekSeconds = useCallback((seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  }, []);

  const handleSliderChange = useCallback((details: SliderValueChangeDetails) => {
    const newValue = details.value[0];
    if (audioRef.current && newValue != null && !isNaN(newValue)) {
      audioRef.current.currentTime = details.value[0];
    }
  }, []);

  const handleVolumeSliderChange = useCallback((details: SliderValueChangeDetails) => {
    if (audioRef.current) {
      audioRef.current.volume = details.value[0] / 100;
      setVolumeValue(details.value[0]);
    }
  }, []);

  const onEnded = useCallback(() => setPlaying(false), []);

  const onHandleTime: ReactEventHandler<HTMLAudioElement> = useCallback((meta) => {
    const target = meta.currentTarget;
    setCurrentTime(Math.round(target.currentTime));
    setDuration(Math.round(target.duration));
  }, []);

  return {
    togglePlay,
    onPlaybackRateChange,
    onSeekSeconds,
    handleVolumeSliderChange,
    handleSliderChange,
    onEnded,
    onHandleTime,
    speedValue,
    volumeValue,
    currentTime,
    duration,
    playing,
    audioRef,
  };
};
