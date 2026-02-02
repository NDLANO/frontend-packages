/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type SliderValueChangeDetails, createListCollection } from "@ark-ui/react";
import { Replay15Line, Forward15Line, PlayFill, PauseLine, VolumeUpFill, CheckLine } from "@ndla/icons";
import {
  Button,
  FieldRoot,
  IconButton,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
  SelectContent,
  SelectControl,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SliderControl,
  SliderHiddenInput,
  SliderLabel,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  Text,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const ControlsWrapper = styled("div", {
  base: {
    borderBlockStart: "1px solid",
    borderColor: "stroke.default",
    borderBottomRadius: "xsmall",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "background.default",
    gap: "xsmall",
    paddingBlock: "xsmall",
    paddingInline: "medium",
    tabletWideDown: {
      display: "grid",
      paddingBlock: "xsmall",
      paddingInline: "xsmall",
      gridTemplateColumns: "1fr repeat(5, auto) 1fr",
      gridTemplateAreas: `
  "track  track track     track track     track   track"
  ".      speed backwards play  forwards  volume  ."
`,
    },
    mobileWideDown: {
      columnGap: "3xsmall",
    },
  },
});

const PlayButton = styled(IconButton, {
  base: {
    gridArea: "play",
  },
});

const Forward15SecButton = styled(IconButton, {
  base: {
    gridArea: "forwards",
  },
});

const Back15SecButton = styled(IconButton, {
  base: {
    gridArea: "backwards",
  },
});

const ProgressWrapper = styled("div", {
  base: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    gap: "xxsmall",
    gridArea: "track",
    paddingBlock: "xsmall",
    mobileDown: {
      paddingInline: "xsmall",
    },
  },
});

const StyledText = styled(Text, {
  base: {
    minWidth: "xxlarge",
    flexShrink: "0",
    textAlign: "center",
  },
});

const VolumeButton = styled(IconButton, {
  base: {
    gridArea: "volume",
  },
});

const SpeedButton = styled(Button, {
  base: {
    paddingBlock: "auto",
    paddingInline: "auto",
    maxWidth: "xxlarge",
    maxHeight: "xxlarge",
    minWidth: "xxlarge",
    minHeight: "xxlarge",
    "& span": {
      flex: "1",
    },
  },
});

const StyledSelectRoot = styled(SelectRoot<string>, {
  base: {
    gridArea: "speed",
  },
});

const StyledSliderControl = styled(SliderControl, {
  base: {
    height: "surface.3xsmall",
    minWidth: "small",
  },
});

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    paddingInline: "small",
  },
});

const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const currentSeconds = seconds % 60;

  const formattedSeconds = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
  return `${minutes}:${formattedSeconds}`;
};

const speedValues = createListCollection({ items: ["0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"] });

interface Props {
  src: string;
  title: string;
}

export const Controls = ({ src, title }: Props) => {
  const { t } = useTranslation();
  const [speedValue, setSpeedValue] = useState(1);
  const [volumeValue, setVolumeValue] = useState(100);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      const audioElement = audioRef.current;
      const handleTimeUpdate = () => {
        const { currentTime, duration } = audioElement;
        setCurrentTime(Math.round(currentTime));
        setDuration(Math.round(duration));
      };

      const handleLoadedMetaData = () => {
        const { currentTime, duration } = audioElement;
        setCurrentTime(Math.round(currentTime));
        setDuration(Math.round(duration));
      };

      const handleTimeEnded = () => {
        setPlaying(false);
      };

      audioElement.addEventListener("timeupdate", handleTimeUpdate);
      audioElement.addEventListener("loadedmetadata", handleLoadedMetaData);
      audioElement.addEventListener("ended", handleTimeEnded);
      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
        audioElement.removeEventListener("loadedmetadata", handleLoadedMetaData);
        audioElement.removeEventListener("ended", handleTimeEnded);
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

  const onPlaybackRateChange = (rate: number) => {
    setSpeedValue(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  const onSeekSeconds = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const handleSliderChange = (details: SliderValueChangeDetails) => {
    const newValue = details.value[0];
    if (audioRef.current && newValue != null && !isNaN(newValue)) {
      audioRef.current.currentTime = details.value[0];
    }
  };

  const handleVolumeSliderChange = (details: SliderValueChangeDetails) => {
    if (audioRef.current) {
      audioRef.current.volume = details.value[0] / 100;
      setVolumeValue(details.value[0]);
    }
  };

  return (
    <div>
      {/* TODO: We should tie this up to the textual description somehow */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src={src} title={title} preload="metadata" />
      <ControlsWrapper>
        <Back15SecButton
          variant="tertiary"
          title={t("audio.controls.rewind15sec")}
          aria-label={t("audio.controls.rewind15sec")}
          onClick={() => onSeekSeconds(-15)}
        >
          <Replay15Line />
        </Back15SecButton>
        <PlayButton aria-label={t(playing ? t("audio.pause") : t("audio.play"))} variant="primary" onClick={togglePlay}>
          {playing ? <PauseLine /> : <PlayFill />}
        </PlayButton>
        <Forward15SecButton
          variant="tertiary"
          title={t("audio.controls.forward15sec")}
          aria-label={t("audio.controls.forward15sec")}
          onClick={() => onSeekSeconds(15)}
        >
          <Forward15Line />
        </Forward15SecButton>
        <ProgressWrapper>
          <StyledText textStyle="label.medium" asChild consumeCss>
            <div>{formatTime(currentTime)}</div>
          </StyledText>
          <SliderRoot
            value={[currentTime]}
            defaultValue={[0]}
            step={1}
            max={duration}
            onValueChange={handleSliderChange}
            getAriaValueText={(value) =>
              t("audio.valueText", {
                start: formatTime(Math.round(value.value)),
                end: formatTime(Math.round(duration)),
              })
            }
          >
            <SliderLabel srOnly>{t("audio.progressBar")}</SliderLabel>
            <SliderControl>
              <SliderTrack>
                <SliderRange />
              </SliderTrack>
              <SliderThumb index={0}>
                <SliderHiddenInput />
              </SliderThumb>
            </SliderControl>
          </SliderRoot>
          <StyledText textStyle="label.medium" asChild consumeCss>
            <div>-{formatTime(Math.round(duration - currentTime))}</div>
          </StyledText>
        </ProgressWrapper>
        <FieldRoot>
          <StyledSelectRoot
            collection={speedValues}
            value={[speedValue.toString()]}
            onValueChange={(details) => onPlaybackRateChange(parseFloat(details.value[0]))}
            positioning={{ placement: "top" }}
          >
            <SelectLabel srOnly>{t("audio.controls.selectSpeed")}</SelectLabel>
            <SelectControl>
              <SelectTrigger asChild>
                <SpeedButton
                  variant="tertiary"
                  title={t("audio.controls.selectSpeed")}
                  aria-label={t("audio.controls.selectSpeed")}
                >
                  <span>{`${speedValue}x`}</span>
                </SpeedButton>
              </SelectTrigger>
            </SelectControl>
            <SelectContent>
              {speedValues.items.map((speed) => (
                <SelectItem key={speed} item={speed}>
                  <SelectItemText>{speed}x</SelectItemText>
                  <SelectItemIndicator>
                    <CheckLine />
                  </SelectItemIndicator>
                </SelectItem>
              ))}
            </SelectContent>
          </StyledSelectRoot>
        </FieldRoot>
        <PopoverRoot positioning={{ placement: "top" }}>
          <PopoverTrigger asChild>
            <VolumeButton variant="tertiary" aria-label={t("audio.controls.adjustVolume")}>
              <VolumeUpFill />
            </VolumeButton>
          </PopoverTrigger>
          <StyledPopoverContent>
            <SliderRoot
              orientation="vertical"
              value={[volumeValue]}
              min={0}
              max={100}
              defaultValue={[100]}
              step={1}
              onValueChange={handleVolumeSliderChange}
            >
              <SliderLabel srOnly>{t("audio.controls.adjustVolume")}</SliderLabel>
              <StyledSliderControl>
                <SliderTrack>
                  <SliderRange />
                </SliderTrack>
                <SliderThumb index={0}>
                  <SliderHiddenInput />
                </SliderThumb>
              </StyledSliderControl>
            </SliderRoot>
          </StyledPopoverContent>
        </PopoverRoot>
      </ControlsWrapper>
    </div>
  );
};
