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
      _hover: {
        borderStyle: "dashed",
        borderColor: "stroke.hover",
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
    },
    itemSizeText: {
      gridArea: "size",
    },
    itemDeleteTrigger: {
      gridArea: "delete",
      alignSelf: "center",
    },
  },
});

const { withProvider, withContext } = createStyleContext(fileUploadRecipe);

export type FileUploadVariantProps = RecipeVariantProps<typeof fileUploadRecipe>;

export type FileUploadRootProps = FileUpload.RootProps & FileUploadVariantProps;

export const FileUploadHiddenInput = FileUpload.HiddenInput;
export const FileUploadContext = FileUpload.Context;

export const FileUploadRoot = withProvider<HTMLDivElement, FileUploadRootProps>(FileUpload.Root, "root", {
  baseComponent: true,
});

export const FileUploadDropzone = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.DropzoneProps>>(
  FileUpload.Dropzone,
  "dropzone",
  { baseComponent: true },
);

export const FileUploadTrigger = withContext<HTMLButtonElement, Assign<JsxStyleProps, FileUpload.TriggerProps>>(
  FileUpload.Trigger,
  "trigger",
  { baseComponent: true },
);

export const FileUploadItemGroup = withContext<HTMLUListElement, Assign<JsxStyleProps, FileUpload.ItemGroupProps>>(
  FileUpload.ItemGroup,
  "itemGroup",
  { baseComponent: true },
);

export const FileUploadItemPreview = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemPreviewProps>>(
  FileUpload.ItemPreview,
  "itemPreview",
  { baseComponent: true },
);

export const FileUploadItem = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemProps>>(
  FileUpload.Item,
  "item",
  { baseComponent: true },
);

export const FileUploadItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, FileUpload.ItemDeleteTriggerProps>
>(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger", { baseComponent: true });

export const FileUploadItemPreviewImage = withContext<
  HTMLImageElement,
  Assign<JsxStyleProps, FileUpload.ItemPreviewImageProps>
>(FileUpload.ItemPreviewImage, "itemPreviewImage", { baseComponent: true });

const InternalFileUploadItemName = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemNameProps>>(
  FileUpload.ItemName,
  "itemName",
);

export const FileUploadItemName = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: FileUpload.ItemNameProps & TextProps & JsxStyleProps) => (
  <Text textStyle={textStyle} fontWeight={fontWeight} asChild consumeCss>
    <InternalFileUploadItemName {...props} />
  </Text>
);

const InternalFileUploadItemSizeText = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemSizeTextProps>>(
  FileUpload.ItemSizeText,
  "itemSizeText",
);

export const FileUploadItemSizeText = ({
  textStyle = "label.small",
  ...props
}: FileUpload.ItemSizeTextProps & TextProps & JsxStyleProps) => (
  <Text textStyle={textStyle} asChild consumeCss>
    <InternalFileUploadItemSizeText {...props} />
  </Text>
);

const InternalFileUploadLabel = withContext<HTMLLabelElement, Assign<JsxStyleProps, FileUpload.LabelProps>>(
  FileUpload.Label,
  "label",
);

export const FileUploadLabel = forwardRef<HTMLLabelElement, FileUpload.LabelProps & TextProps>(
  ({ textStyle = "label.medium", fontWeight = "light", ...props }, ref) => (
    <InternalFileUploadLabel asChild>
      <Label textStyle={textStyle} fontWeight={fontWeight} ref={ref} {...props} />
    </InternalFileUploadLabel>
  ),
);
