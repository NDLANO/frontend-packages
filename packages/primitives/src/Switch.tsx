/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { switchAnatomy } from "@ark-ui/anatomy";
import { Switch } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { useFormControl } from "./FormControl";
import { Text, TextProps } from "./Text";

const switchRecipe = sva({
  slots: switchAnatomy.keys(),
  base: {
    root: {
      display: "inline-flex",
      alignItems: "center",
      position: "relative",
      gap: "xxsmall",
      _focus: {
        outline: "2px solid",
        outlineOffset: "4xsmall",
        outlineColor: "stroke.default",
        borderRadius: "xsmall",
      },
    },
    control: {
      display: "inline-flex",
      alignItems: "center",
      background: "surface.disabled.strong",
      width: "xxlarge",
      padding: "1",
      borderRadius: "medium",
      cursor: "pointer",
      flexShrink: "0",
      transitionDuration: "fast",
      transitionProperty: "background",
      transitionTimingFunction: "default",
      _checked: {
        background: "surface.action.active",
      },
      _disabled: {
        background: "surface.disabled",
        cursor: "not-allowed",
      },
    },
    thumb: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "icon.onAction",
      borderRadius: "full",
      boxShadow: "xsmall",
      transitionDuration: "fast",
      transitionProperty: "transform",
      transitionTimingFunction: "default",
      width: "10",
      height: "10",
      textStyle: "label.xsmall",
      fontWeight: "bold",
      _hover: {
        transform: "translateX(20%)",
        _disabled: {
          transform: "translateX(0)",
        },
      },
      _checked: {
        transform: "translateX(120%)",
        _hover: {
          transform: "translateX(100%)",
          _disabled: {
            transform: "translateX(120%)",
          },
        },
      },
    },
    label: {
      color: "text.strong",
      transitionDuration: "fast",
      transitionProperty: "color",
      transitionTimingFunction: "default",
      _hover: {
        color: "text.action",
      },
      _disabled: {
        color: "text.disabled",
        _hover: {
          color: "text.disabled",
        },
      },
    },
  },
});

const { withProvider, withContext } = createStyleContext(switchRecipe);

export type SwitchVariantProps = RecipeVariantProps<typeof switchRecipe>;

export type SwitchRootProps = Switch.RootProps & JsxStyleProps & SwitchVariantProps;

const InternalSwitchRoot = withProvider<HTMLLabelElement, SwitchRootProps>(Switch.Root, "root");

export const SwitchRoot = forwardRef<HTMLLabelElement, SwitchRootProps>((props, ref) => {
  const field = useFormControl(props);
  return <InternalSwitchRoot invalid={field.invalid ?? !!field["aria-invalid"]} {...field} ref={ref} />;
});

export const SwitchControl = withContext<HTMLSpanElement, JsxStyleProps & Switch.ControlProps>(
  Switch.Control,
  "control",
);

export const SwitchThumb = withContext<HTMLSpanElement, JsxStyleProps & Switch.ThumbProps>(Switch.Thumb, "thumb");

const InternalSwitchLabel = withContext<HTMLSpanElement, JsxStyleProps & Switch.LabelProps>(Switch.Label, "label");

export const SwitchLabel = ({
  textStyle = "label.medium",
  ...props
}: Switch.LabelProps & TextProps & JsxStyleProps) => (
  <InternalSwitchLabel asChild>
    <Text as="span" textStyle={textStyle} {...props} />
  </InternalSwitchLabel>
);

export const SwitchHiddenInput = Switch.HiddenInput;
