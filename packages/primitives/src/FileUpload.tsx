/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef } from "react";
import { Assign, FileUpload, fileUploadAnatomy } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { createStyleContext } from "./createStyleContext";
import { Label } from "./Label";
import { TextProps, Text } from "./Text";

const fileUploadRecipe = sva({
  slots: fileUploadAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100%",
    },
    dropzone: {
      display: "flex",
      gap: "small",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "4xlarge",
      borderRadius: "xsmall",
      border: "1px solid",
      borderColor: "stroke.subtle",
      transitionProperty: "border, border-color",
      transitionTimingFunction: "default",
      transitionDuration: "normal",
      _hover: {
        borderStyle: "dashed",
        borderColor: "stroke.hover",
        _disabled: {
          borderStyle: "solid",
          borderColor: "stroke.subtle",
        },
      },
    },
    itemGroup: {
      paddingBlockStart: "medium",
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
    },
    item: {
      width: "100%",
      display: "grid",
      gridTemplateAreas: `
      "preview name delete" 
      "preview size delete"`,
      gridTemplateColumns: "auto 1fr auto",
      gridColumnGap: "small",
      border: "1px solid",
      borderColor: "stroke.subtle",
      borderRadius: "xsmall",
      padding: "xsmall",
    },
    itemPreview: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "xxlarge",
      height: "xxlarge",
      gridArea: "preview",
    },
    itemName: {
      gridArea: "name",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    itemSizeText: {
      gridArea: "size",
    },
    itemDeleteTrigger: {
      gridArea: "delete",
      alignSelf: "center",
    },
    itemPreviewImage: {
      borderRadius: "xsmall",
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },
});

const { withProvider, withContext } = createStyleContext(fileUploadRecipe);

export type FileUploadVariantProps = RecipeVariantProps<typeof fileUploadRecipe>;

export type FileUploadRootProps = FileUpload.RootProps & FileUploadVariantProps;

export const FileUploadHiddenInput = FileUpload.HiddenInput;
export const FileUploadContext = FileUpload.Context;

export const FileUploadRoot = withProvider<HTMLDivElement, Assign<FileUploadRootProps, JsxStyleProps>>(
  FileUpload.Root,
  "root",
  {
    baseComponent: true,
  },
);

export const FileUploadDropzone = withContext<HTMLDivElement, Assign<FileUpload.DropzoneProps, JsxStyleProps>>(
  FileUpload.Dropzone,
  "dropzone",
  { baseComponent: true },
);

export const FileUploadTrigger = withContext<HTMLButtonElement, Assign<FileUpload.TriggerProps, JsxStyleProps>>(
  FileUpload.Trigger,
  "trigger",
  { baseComponent: true },
);

export const FileUploadItemGroup = withContext<HTMLUListElement, Assign<FileUpload.ItemGroupProps, JsxStyleProps>>(
  FileUpload.ItemGroup,
  "itemGroup",
  { baseComponent: true },
);

export const FileUploadItemPreview = withContext<HTMLDivElement, Assign<FileUpload.ItemPreviewProps, JsxStyleProps>>(
  FileUpload.ItemPreview,
  "itemPreview",
  { baseComponent: true },
);

export const FileUploadItem = withContext<HTMLDivElement, Assign<FileUpload.ItemProps, JsxStyleProps>>(
  FileUpload.Item,
  "item",
  { baseComponent: true },
);

export const FileUploadItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<FileUpload.ItemDeleteTriggerProps, JsxStyleProps>
>(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger", { baseComponent: true });

export const FileUploadItemPreviewImage = withContext<
  HTMLImageElement,
  Assign<FileUpload.ItemPreviewImageProps, JsxStyleProps>
>(FileUpload.ItemPreviewImage, "itemPreviewImage", { baseComponent: true });

const InternalFileUploadItemName = withContext<HTMLDivElement, Assign<FileUpload.ItemNameProps, JsxStyleProps>>(
  FileUpload.ItemName,
  "itemName",
  { baseComponent: true },
);

export const FileUploadItemName = forwardRef<
  HTMLDivElement,
  Assign<FileUpload.ItemNameProps, TextProps & JsxStyleProps>
>(({ textStyle = "label.medium", fontWeight = "bold", ...props }, ref) => (
  <Text textStyle={textStyle} fontWeight={fontWeight} asChild {...props} ref={ref}>
    {/* Do not use children here whatsoever. The component falls back to the file name only if no children are passed in. It should be up to the consumer if they want to pass in children. */}
    <InternalFileUploadItemName />
  </Text>
));

const InternalFileUploadItemSizeText = withContext<HTMLDivElement, Assign<FileUpload.ItemSizeTextProps, JsxStyleProps>>(
  FileUpload.ItemSizeText,
  "itemSizeText",
  { baseComponent: true },
);

export const FileUploadItemSizeText = forwardRef<
  HTMLDivElement,
  Assign<FileUpload.ItemSizeTextProps, TextProps & JsxStyleProps>
>(({ textStyle = "label.small", ...props }, ref) => (
  <Text textStyle={textStyle} ref={ref} asChild {...props}>
    <InternalFileUploadItemSizeText />
  </Text>
));

const InternalFileUploadLabel = withContext<HTMLLabelElement, Assign<FileUpload.LabelProps, JsxStyleProps>>(
  FileUpload.Label,
  "label",
);

export const FileUploadLabel = forwardRef<HTMLLabelElement, Assign<FileUpload.LabelProps, JsxStyleProps & TextProps>>(
  ({ textStyle = "label.medium", fontWeight = "light", children, ...props }, ref) => (
    <InternalFileUploadLabel asChild>
      <Label textStyle={textStyle} fontWeight={fontWeight} ref={ref} {...props}>
        {children}
      </Label>
    </InternalFileUploadLabel>
  ),
);
