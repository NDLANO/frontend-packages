/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createListCollection } from "@ark-ui/react";
import { Replay15Line, Forward15Line, VolumeUpFill, CheckLine } from "@ndla/icons";
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
  Text,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { useTranslation } from "react-i18next";
import { AudioElement } from "./AudioElement";
import { AudioProgress } from "./AudioProgress";
import { formatTime } from "./audioUtils";
import { PlayButton } from "./PlayButton";
import { useAudioControls } from "./useAudioControls";
import { VolumeSlider } from "./VolumeSlider";

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

const StyledPlayButton = styled(PlayButton, {
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

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    paddingInline: "small",
  },
});

const speedValues = createListCollection({ items: ["0.5", "0.75", "1", "1.25", "1.5", "1.75", "2"] });

interface Props {
  src: string;
  title: string;
  variant?: "full" | "simplified";
}

export const Controls = ({ src, title }: Props) => {
  const { t } = useTranslation();
  const {
    audioRef,
    onEnded,
    onHandleTime,
    onSeekSeconds,
    playing,
    togglePlay,
    handleSliderChange,
    handleVolumeSliderChange,
    currentTime,
    duration,
    speedValue,
    onPlaybackRateChange,
    volumeValue,
  } = useAudioControls();

  return (
    <div>
      <AudioElement
        src={src}
        title={title}
        ref={audioRef}
        onEnded={onEnded}
        onLoadedMetadata={onHandleTime}
        onTimeUpdate={onHandleTime}
      />
      <ControlsWrapper>
        <Back15SecButton
          variant="tertiary"
          title={t("audio.controls.rewind15sec")}
          aria-label={t("audio.controls.rewind15sec")}
          onClick={() => onSeekSeconds(-15)}
        >
          <Replay15Line />
        </Back15SecButton>
        <StyledPlayButton playing={playing} onClick={togglePlay} />
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
          <AudioProgress currentTime={currentTime} duration={duration} onValueChange={handleSliderChange} />
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
            <VolumeSlider value={volumeValue} onValueChange={handleVolumeSliderChange} />
          </StyledPopoverContent>
        </PopoverRoot>
      </ControlsWrapper>
    </div>
  );
};
