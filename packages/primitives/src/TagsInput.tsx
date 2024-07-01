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
export const TagsInputRoot = withProvider<HTMLDivElement, TagsInputRootProps>(TagsInput.Root, "root");

export const TagsInputClearTrigger = withContext<HTMLButtonElement, TagsInput.ClearTriggerProps & JsxStyleProps>(
  TagsInput.ClearTrigger,
  "clearTrigger",
);

export const TagsInputControl = withContext<HTMLDivElement, TagsInput.ControlProps & JsxStyleProps>(
  TagsInput.Control,
  "control",
);

export const TagsInputInput = withContext<HTMLInputElement, TagsInput.InputProps & JsxStyleProps>(
  TagsInput.Input,
  "input",
);

export const TagsInputItemDeleteTrigger = withContext<
  HTMLButtonElement,
  TagsInput.ItemDeleteTriggerProps & JsxStyleProps
>(TagsInput.ItemDeleteTrigger, "itemDeleteTrigger");

export const TagsInputItemInput = withContext<HTMLInputElement, TagsInput.ItemInputProps & JsxStyleProps>(
  TagsInput.ItemInput,
  "itemInput",
);

export const TagsInputItemPreview = withContext<HTMLDivElement, TagsInput.ItemPreviewProps & JsxStyleProps>(
  TagsInput.ItemPreview,
  "itemPreview",
);

export const TagsInputItem = withContext<HTMLDivElement, TagsInput.ItemProps & JsxStyleProps>(TagsInput.Item, "item");

export const TagsInputItemText = withContext<HTMLSpanElement, TagsInput.ItemTextProps & JsxStyleProps>(
  TagsInput.ItemText,
  "itemText",
);

// export const TagsInputItemText = forwardRef<HTMLSpanElement, TagsInput.ItemTextProps & JsxStyleProps & TextProps>(
//   ({ children, textStyle = "label.medium", ...props }, ref) => (
//     <InternalTagsInputItemText asChild forwardCssProp ref={ref} {...props}>
//       <Text textStyle={textStyle} asChild>
//         <div>{children}</div>
//       </Text>
//     </InternalTagsInputItemText>
//   ),
// );

const InternalTagsInputLabel = withContext<HTMLLabelElement, TagsInput.LabelProps & JsxStyleProps>(
  TagsInput.Label,
  "label",
);

export const TagsInputLabel = forwardRef<HTMLLabelElement, TagsInput.LabelProps & JsxStyleProps & TextProps>(
  ({ children, ...props }, ref) => (
    <InternalTagsInputLabel asChild forwardCssProp ref={ref} {...props}>
      <Label>{children}</Label>
    </InternalTagsInputLabel>
  ),
);
