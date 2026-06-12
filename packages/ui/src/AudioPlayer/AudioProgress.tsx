/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { SliderValueChangeDetails } from "@ark-ui/react/slider";
import {
  SliderRoot,
  SliderLabel,
  SliderControl,
  SliderTrack,
  SliderRange,
  SliderThumb,
  SliderHiddenInput,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { useTranslation } from "react-i18next";
import { formatTime } from "./audioUtils";

interface Props {
  currentTime: number;
  duration: number;
  onValueChange: (details: SliderValueChangeDetails) => void;
  variant?: "simple" | "standard";
}

const StyledSliderThumb = styled(SliderThumb, {
  variants: {
    variant: {
      standard: {},
      simple: {
        marginBlockStart: "-4xsmall",
        transitionProperty: "background, border-radius, width, height",
        width: "4xsmall",
        height: "4xsmall",
        borderRadius: "sharp",
      },
    },
  },
});

const StyledSliderTrack = styled(SliderTrack, {
  variants: {
    variant: {
      standard: {},
      simple: {
        marginBlockStart: "-4xsmall",
        background: "unset",
      },
    },
  },
});

const StyledSliderRoot = styled(SliderRoot, {
  variants: {
    variant: {
      standard: {},
      simple: {
        position: "relative",
        marginBlockEnd: "-xsmall",
      },
    },
  },
});

export const AudioProgress = ({ currentTime, duration, onValueChange, variant }: Props) => {
  const { t } = useTranslation();
  return (
    <StyledSliderRoot
      value={[currentTime]}
      defaultValue={[0]}
      step={1}
      max={duration}
      onValueChange={onValueChange}
      variant={variant}
      getAriaValueText={(value) =>
        t("audio.valueText", {
          start: formatTime(Math.round(value.value)),
          end: formatTime(Math.round(duration)),
        })
      }
    >
      <SliderLabel srOnly>{t("audio.progressBar")}</SliderLabel>
      <SliderControl>
        <StyledSliderTrack variant={variant}>
          <SliderRange />
        </StyledSliderTrack>
        <StyledSliderThumb index={0} variant={variant}>
          <SliderHiddenInput />
        </StyledSliderThumb>
      </SliderControl>
    </StyledSliderRoot>
  );
};
