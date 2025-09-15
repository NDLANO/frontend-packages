/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { TagsInput, tagsInputAnatomy } from "@ark-ui/react";
import { sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Label } from "./Label";
import { type TextProps } from "./Text";

const tagsInputRecipe = sva({
  slots: tagsInputAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "xxsmall",
      width: "full",
    },
    control: {
      display: "inline-flex",
      gap: "xxsmall",
      alignItems: "center",
      flexWrap: "wrap",
    },
    item: {
      paddingBlock: "3xsmall",
    },
    itemPreview: {
      display: "flex",
      gap: "1",
      paddingBlock: "4xsmall",
      paddingInlineEnd: "3xsmall",
      paddingInlineStart: "xsmall",
      cursor: "initial",
      borderRadius: "large",
      outline: "1px solid",
      outlineColor: "transparent",
      backgroundColor: "surface.action.selected",
      color: "text.onAction",
      transitionDuration: "normal",
      transitionProperty: "background, outline-color, color",
      transitionTimingFunction: "default",
      textStyle: "label.medium",
      _hover: {
        backgroundColor: "surface.actionSubtle.hover",
        outlineColor: "stroke.hover",
        color: "text.default",
        "& svg": {
          color: "stroke.hover",
        },
        _motionReduce: {
          transition: "none",
          transitionDuration: "0s",
        },
      },
      _highlighted: {
        backgroundColor: "surface.actionSubtle.hover",
        outlineWidth: "3px",
        outlineOffset: "-1px",
        outlineColor: "stroke.hover",
        color: "text.default",
        "& svg": {
          color: "stroke.hover",
        },
        _motionReduce: {
          transition: "none",
          transitionDuration: "0s",
        },
      },
    },
    input: {
      flex: "1",
    },
    itemDeleteTrigger: {
      paddingBottom: "1",
      cursor: "pointer",
      "& span": {
        display: "inline-block",
      },
      "& svg": {
        marginInline: "0",
        marginBlock: "0",
        width: "medium",
        height: "medium",
      },
    },
    itemText: {
      paddingBottom: "1",
    },
    itemInput: {
      outline: "none",
      background: "transparent",
    },
  },
});
const { withProvider, withContext } = createStyleContext(tagsInputRecipe);

export interface TagsInputRootProps extends TagsInput.RootProps, StyledProps {
  translations: TagsInput.RootProps["translations"];
}

export const TagsInputRoot = withProvider(TagsInput.Root, "root", {
  baseComponent: true,
});

export interface TagsInputClearTriggerProps extends TagsInput.ClearTriggerProps, StyledProps {}

export const TagsInputClearTrigger = withContext(TagsInput.ClearTrigger, "clearTrigger", { baseComponent: true });

export interface TagsInputControlProps extends TagsInput.ControlProps, StyledProps {}

export const TagsInputControl = withContext(TagsInput.Control, "control", { baseComponent: true });

export interface TagsInputInputProps extends TagsInput.InputProps, StyledProps {}

export const TagsInputInput = withContext(TagsInput.Input, "input", { baseComponent: true });

export interface TagsInputItemDeleteTriggerProps extends TagsInput.ItemDeleteTriggerProps, StyledProps {}

export const TagsInputItemDeleteTrigger = withContext(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger", {
  baseComponent: true,
});

export interface TagsInputItemInputProps extends TagsInput.ItemInputProps, StyledProps {}

export const TagsInputItemInput = withContext(TagsInput.ItemInput, "itemInput", { baseComponent: true });

export interface TagsInputItemPreviewProps extends TagsInput.ItemPreviewProps, StyledProps {}

export const TagsInputItemPreview = withContext(TagsInput.ItemPreview, "itemPreview", { baseComponent: true });

export interface TagsInputItemProps extends TagsInput.ItemProps, StyledProps {}

export const TagsInputItem = withContext(TagsInput.Item, "item", { baseComponent: true });

export interface TagsInputItemTextProps extends TagsInput.ItemTextProps, StyledProps {}

export const TagsInputItemText = withContext(TagsInput.ItemText, "itemText", { baseComponent: true });

const InternalTagsInputLabel = withContext(TagsInput.Label, "label");

export interface TagsInputLabelProps extends Omit<TagsInput.LabelProps, "color">, StyledProps, TextProps {}

export const TagsInputLabel = forwardRef<HTMLLabelElement, TagsInputLabelProps>(({ children, ...props }, ref) => (
  <InternalTagsInputLabel asChild ref={ref} {...props}>
    <Label>{children}</Label>
  </InternalTagsInputLabel>
));
