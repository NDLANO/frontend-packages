/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { VolumeUpFill } from "@ndla/icons";
import { PopoverRoot, PopoverTrigger, IconButton, PopoverContent, Text, PopoverTitle } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { useTranslation } from "react-i18next";
import { AudioElement } from "./AudioElement";
import { AudioProgress } from "./AudioProgress";
import { formatTime } from "./audioUtils";
import { PlayButton } from "./PlayButton";
import { useAudioControls } from "./useAudioControls";
import { VolumeSlider } from "./VolumeSlider";

const AudioContainer = styled("div", {
  base: {
    display: "flex",
    gap: "xxsmall",
    flexDirection: "column",
    padding: "xsmall",
    paddingBlockEnd: "0",
    borderRadius: "xsmall",
    boxShadow: "xsmall",
    background: "surface.brand.1.subtle",
  },
});

const ControlsContainer = styled("div", {
  base: {
    display: "flex",
    gap: "xsmall",
    alignItems: "center",
  },
});

interface Props {
  src: string;
  title: string;
}

const StyledText = styled(Text, {
  base: {
    minWidth: "4xlarge",
    flexShrink: "0",
    textAlign: "center",
  },
});

const StyledIconButton = styled(IconButton, {
  base: {
    marginInlineStart: "auto",
  },
});

const EllipsedText = styled(Text, {
  base: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

export const CompactAudioPlayer = ({ src, title }: Props) => {
  const { t } = useTranslation();
  const {
    audioRef,
    playing,
    togglePlay,
    currentTime,
    duration,
    handleSliderChange,
    volumeValue,
    handleVolumeSliderChange,
    onEnded,
    onHandleTime,
  } = useAudioControls();
  return (
    <AudioContainer>
      <AudioElement
        ref={audioRef}
        src={src}
        title={title}
        onEnded={onEnded}
        onLoadedMetadata={onHandleTime}
        onTimeUpdate={onHandleTime}
      />
      <ControlsContainer>
        <PlayButton playing={playing} onClick={togglePlay} />
        <StyledText>
          <Text textStyle="label.medium" asChild consumeCss>
            <span>{formatTime(currentTime)}</span>
          </Text>
          {"/ "}
          <Text textStyle="label.medium" color="text.subtle" asChild consumeCss>
            <span>{formatTime(duration)}</span>
          </Text>
        </StyledText>
        <EllipsedText textStyle="title.medium">{title}</EllipsedText>
        <PopoverRoot positioning={{ placement: "top" }}>
          <PopoverTrigger asChild>
            <StyledIconButton variant="tertiary">
              <VolumeUpFill />
            </StyledIconButton>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverTitle srOnly>{t("audio.controls.adjustVolume")}</PopoverTitle>
            <VolumeSlider value={volumeValue} onValueChange={handleVolumeSliderChange} />
          </PopoverContent>
        </PopoverRoot>
      </ControlsContainer>
      <AudioProgress
        currentTime={currentTime}
        duration={duration}
        onValueChange={handleSliderChange}
        variant="simple"
      />
    </AudioContainer>
  );
};
