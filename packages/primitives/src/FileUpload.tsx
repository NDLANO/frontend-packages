/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { forwardRef, type RefAttributes } from "react";
import { FileUpload, fileUploadAnatomy } from "@ark-ui/react";
import { type RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { createStyleContext } from "@ndla/styled-system/jsx";
import type { StyledProps } from "@ndla/styled-system/types";
import { Label } from "./Label";
import { type TextProps, Text } from "./Text";

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

export type FileUploadVariantProps = NonNullable<RecipeVariantProps<typeof fileUploadRecipe>>;

export interface FileUploadRootProps extends FileUpload.RootProps, FileUploadVariantProps {}

export const FileUploadHiddenInput = FileUpload.HiddenInput;
export const FileUploadContext = FileUpload.Context;

export const FileUploadRoot = withProvider(FileUpload.Root, "root", { baseComponent: true });

export const FileUploadDropzone = withContext(FileUpload.Dropzone, "dropzone", { baseComponent: true });

export const FileUploadTrigger = withContext(FileUpload.Trigger, "trigger", { baseComponent: true });

export const FileUploadItemGroup = withContext(FileUpload.ItemGroup, "itemGroup", { baseComponent: true });

export const FileUploadItemPreview = withContext(FileUpload.ItemPreview, "itemPreview", { baseComponent: true });

export const FileUploadItem = withContext(FileUpload.Item, "item", { baseComponent: true });

export const FileUploadItemDeleteTrigger = withContext(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger", {
  baseComponent: true,
});

export const FileUploadItemPreviewImage = withContext(FileUpload.ItemPreviewImage, "itemPreviewImage", {
  baseComponent: true,
});

const InternalFileUploadItemName = withContext(FileUpload.ItemName, "itemName", { baseComponent: true });

interface FileUploadItemNameProps
  extends Omit<FileUpload.ItemNameProps, "color">, TextProps, StyledProps, RefAttributes<HTMLParagraphElement> {}

export const FileUploadItemName = forwardRef<HTMLDivElement, FileUploadItemNameProps>(
  ({ textStyle = "label.medium", fontWeight = "bold", ...props }, ref) => (
    <Text textStyle={textStyle} fontWeight={fontWeight} asChild {...props} ref={ref}>
      {/* Do not use children here whatsoever. The component falls back to the file name only if no children are passed in. It should be up to the consumer if they want to pass in children. */}
      <InternalFileUploadItemName />
    </Text>
  ),
);

const InternalFileUploadItemSizeText = withContext(FileUpload.ItemSizeText, "itemSizeText", { baseComponent: true });

interface FileUploadItemSizeTextProps
  extends Omit<FileUpload.ItemSizeTextProps, "color">, TextProps, StyledProps, RefAttributes<HTMLParagraphElement> {}

export const FileUploadItemSizeText = forwardRef<HTMLDivElement, FileUploadItemSizeTextProps>(
  ({ textStyle = "label.small", ...props }, ref) => (
    <Text textStyle={textStyle} ref={ref} asChild {...props}>
      <InternalFileUploadItemSizeText />
    </Text>
  ),
);

const InternalFileUploadLabel = withContext(FileUpload.Label, "label");

interface FileUploadLabelProps
  extends Omit<FileUpload.LabelProps, "color">, StyledProps, TextProps, RefAttributes<HTMLLabelElement> {}

export const FileUploadLabel = forwardRef<HTMLLabelElement, FileUploadLabelProps>(
  ({ textStyle = "label.medium", fontWeight = "light", children, ...props }, ref) => (
    <InternalFileUploadLabel ref={ref} asChild>
      <Label textStyle={textStyle} fontWeight={fontWeight} {...props}>
        {children}
      </Label>
    </InternalFileUploadLabel>
  ),
);
