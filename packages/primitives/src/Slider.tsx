/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { sliderAnatomy } from "@ark-ui/anatomy";
import { Slider } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Label } from "./Label";
import { TextProps } from "./Text";

const sliderRecipe = sva({
  slots: sliderAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "4xsmall",
      width: "100%",
    },
    control: {
      position: "relative",
      display: "flex",
      _vertical: {
        flexDirection: "column",
      },
      alignItems: "center",
      height: "medium",
    },
    track: {
      background: "surface.disabled",
      overflow: "hidden",
      flex: "1",
      _vertical: {
        width: "4xsmall",
      },
      _horizontal: {
        height: "4xsmall",
      },
    },
    range: {
      background: "surface.action",
      _vertical: {
        width: "4xsmall",
      },
      _horizontal: {
        height: "4xsmall",
      },
    },
    thumb: {
      background: "surface.action",
      borderRadius: "full",
      outline: "none",
      zIndex: "1",
      height: "medium",
      width: "medium",
      transitionDuration: "fast",
      transitionTimingFunction: "default",
      transitionProperty: "background",
      _hover: {
        background: "surface.action.hover",
      },
      _active: {
        background: "surface.action.active",
      },
      _focusVisible: {
        border: "2px solid",
        borderColor: "background.default",
        outline: "3px solid",
        outlineColor: "surface.action",
        outlineOffset: "0px",
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(sliderRecipe);

export type SliderRootProps = Slider.RootProps & JsxStyleProps;

export const SliderRoot = withProvider<HTMLDivElement, SliderRootProps>(Slider.Root, "root");

export const SliderControl = withContext<HTMLDivElement, JsxStyleProps & Slider.ControlProps>(
  Slider.Control,
  "control",
);

export const SliderTrack = withContext<HTMLDivElement, JsxStyleProps & Slider.TrackProps>(Slider.Track, "track");

export const SliderRange = withContext<HTMLDivElement, JsxStyleProps & Slider.RangeProps>(Slider.Range, "range");

export const SliderThumb = withContext<HTMLDivElement, JsxStyleProps & Slider.ThumbProps>(Slider.Thumb, "thumb");

const InternalSliderLabel = withContext<HTMLDivElement, JsxStyleProps & Slider.LabelProps>(Slider.Label, "label");

export const SliderLabel = ({
  textStyle = "label.medium",
  ...props
}: Slider.LabelProps & TextProps & JsxStyleProps) => (
  <InternalSliderLabel asChild forwardCssProp>
    <Label textStyle={textStyle} {...props} />
  </InternalSliderLabel>
);

export const SliderHiddenInput = Slider.HiddenInput;
