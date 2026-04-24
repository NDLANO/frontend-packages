/**
 * Copyright (c) 2026-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { SliderValueChangeDetails } from "@ark-ui/react";
import {
  SliderControl,
  SliderRoot,
  SliderLabel,
  SliderTrack,
  SliderRange,
  SliderHiddenInput,
  SliderThumb,
} from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { t } from "i18next";

const StyledSliderControl = styled(SliderControl, {
  base: {
    height: "surface.3xsmall",
    minWidth: "small",
  },
});

interface Props {
  value: number;
  onValueChange: (value: SliderValueChangeDetails) => void;
}

export const VolumeSlider = ({ value, onValueChange }: Props) => {
  return (
    <SliderRoot
      orientation="vertical"
      value={[value]}
      min={0}
      max={100}
      defaultValue={[100]}
      step={1}
      onValueChange={onValueChange}
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
  );
};
