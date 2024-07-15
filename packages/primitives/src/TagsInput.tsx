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
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Label } from "./Label";
import { TextProps } from "./Text";

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
      backgroundColor: "surface.actionSubtle.selected",
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

export type TagsInputRootProps = TagsInput.RootProps & JsxStyleProps;
export const TagsInputRoot = withProvider<HTMLDivElement, TagsInputRootProps>(TagsInput.Root, "root", {
  baseComponent: true,
});

export type TagsInputClearTriggerProps = TagsInput.ClearTriggerProps & JsxStyleProps;

export const TagsInputClearTrigger = withContext<HTMLButtonElement, TagsInputClearTriggerProps>(
  TagsInput.ClearTrigger,
  "clearTrigger",
  { baseComponent: true },
);

export type TagsInputControlProps = TagsInput.ControlProps & JsxStyleProps;

export const TagsInputControl = withContext<HTMLDivElement, TagsInputControlProps>(TagsInput.Control, "control", {
  baseComponent: true,
});

export type TagsInputInputProps = TagsInput.InputProps & JsxStyleProps;

export const TagsInputInput = withContext<HTMLInputElement, TagsInputInputProps>(TagsInput.Input, "input", {
  baseComponent: true,
});

export type TagsInputItemDeleteTriggerProps = TagsInput.ItemDeleteTriggerProps & JsxStyleProps;

export const TagsInputItemDeleteTrigger = withContext<HTMLButtonElement, TagsInputItemDeleteTriggerProps>(
  TagsInput.ItemDeleteTrigger,
  "itemDeleteTrigger",
  { baseComponent: true },
);

export type TagsInputItemInputProps = TagsInput.ItemInputProps & JsxStyleProps;

export const TagsInputItemInput = withContext<HTMLInputElement, TagsInputItemInputProps>(
  TagsInput.ItemInput,
  "itemInput",
  { baseComponent: true },
);

export type TagsInputItemPreviewProps = TagsInput.ItemPreviewProps & JsxStyleProps;

export const TagsInputItemPreview = withContext<HTMLDivElement, TagsInputItemPreviewProps>(
  TagsInput.ItemPreview,
  "itemPreview",
  { baseComponent: true },
);

export type TagsInputItemProps = TagsInput.ItemProps & JsxStyleProps;

export const TagsInputItem = withContext<HTMLDivElement, TagsInputItemProps>(TagsInput.Item, "item", {
  baseComponent: true,
});

export type TagsInputItemTextProps = TagsInput.ItemTextProps & JsxStyleProps;

export const TagsInputItemText = withContext<HTMLSpanElement, TagsInputItemTextProps>(TagsInput.ItemText, "itemText", {
  baseComponent: true,
});

const InternalTagsInputLabel = withContext<HTMLLabelElement, TagsInput.LabelProps & JsxStyleProps>(
  TagsInput.Label,
  "label",
);

export type TagsInputLabelProps = TagsInput.LabelProps & JsxStyleProps & TextProps;

export const TagsInputLabel = forwardRef<HTMLLabelElement, TagsInputLabelProps>(({ children, ...props }, ref) => (
  <InternalTagsInputLabel asChild ref={ref} {...props}>
    <Label>{children}</Label>
  </InternalTagsInputLabel>
));
