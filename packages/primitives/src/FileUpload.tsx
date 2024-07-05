/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Assign, FileUpload, FileUploadHiddenInput, fileUploadAnatomy } from "@ark-ui/react";
import { RecipeVariantProps, sva } from "@ndla/styled-system/css";
import { JsxStyleProps } from "@ndla/styled-system/types";
import { IconButton } from "./Button";
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
      padding: "xxlarge",
      textStyle: "label.medium",
      marginBottom: "medium",
      borderRadius: "xsmall",
      border: "1px solid",
      borderColor: "stroke.subtle",
      _hover: {
        borderStyle: "dashed",
      },
    },
    itemGroup: {
      display: "flex",
      flexDirection: "column",
      gap: "xsmall",
    },
    item: {
      width: "100%",
      display: "grid",
      gridTemplateAreas: '"preview name delete"\n "preview size delete"',
      gridTemplateColumns: "auto 1fr auto",
      gridColumnGap: "small",
      border: "1px solid",
      borderColor: "stroke.subtle",
      borderRadius: "xsmall",
      padding: "xsmall",
    },
    itemPreview: {
      display: "flex",
      alignSelf: "center",
      justifySelf: "center",
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
      justifySelf: "end",
    },
  },
});

const { withProvider, withContext } = createStyleContext(fileUploadRecipe);

export type FileUploadVariantProps = RecipeVariantProps<typeof fileUploadRecipe>;

export type FileUploadRootProps = FileUpload.RootProps & FileUploadVariantProps;

const InternalFileUploadRoot = withProvider<HTMLDivElement, FileUploadRootProps>(FileUpload.Root, "root");

export const FileUploadRoot = ({ children, ...props }: FileUploadRootProps) => {
  return (
    <InternalFileUploadRoot {...props}>
      {children}
      <FileUploadHiddenInput />
    </InternalFileUploadRoot>
  );
};

const InternalFileUploadLabel = withContext<HTMLLabelElement, Assign<JsxStyleProps, FileUpload.LabelProps>>(
  FileUpload.Label,
  "label",
);

export const FileUploadLabel = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: FileUpload.LabelProps & TextProps) => {
  return (
    <InternalFileUploadLabel asChild forwardCssProp>
      <Label textStyle={textStyle} fontWeight={fontWeight} {...props} />
    </InternalFileUploadLabel>
  );
};

export const FileUploadDropzone = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.DropzoneProps>>(
  FileUpload.Dropzone,
  "dropzone",
);

export const FileUploadTrigger = FileUpload.Trigger;

export const FileUploadContext = FileUpload.Context;

export const FileUploadItemGroup = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemGroupProps>>(
  FileUpload.ItemGroup,
  "itemGroup",
);
export const FileUploadItemPreview = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemPreviewProps>>(
  FileUpload.ItemPreview,
  "itemPreview",
);
export const FileUploadItemPreviewImage = FileUpload.ItemPreviewImage;
const InternalFileUploadItemName = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemNameProps>>(
  FileUpload.ItemName,
  "itemName",
);
export const FileUploadItemName = ({
  textStyle = "label.medium",
  fontWeight = "bold",
  ...props
}: FileUpload.ItemNameProps & TextProps & JsxStyleProps) => (
  <InternalFileUploadItemName asChild>
    <Text textStyle={textStyle} fontWeight={fontWeight} asChild forwardCssProp>
      <div {...props} />
    </Text>
  </InternalFileUploadItemName>
);

export const FileUploadItem = withContext<HTMLDivElement, Assign<JsxStyleProps, FileUpload.ItemProps>>(
  FileUpload.Item,
  "item",
);

export const InternalFileUploadItemSizeText = withContext<
  HTMLDivElement,
  Assign<JsxStyleProps, FileUpload.ItemSizeTextProps>
>(FileUpload.ItemSizeText, "itemSizeText");

export const FileUploadItemSizeText = ({
  textStyle = "label.small",
  fontWeight = "light",
  ...props
}: FileUpload.ItemSizeTextProps & TextProps & JsxStyleProps) => (
  <InternalFileUploadItemSizeText asChild forwardCssProp>
    <Text textStyle={textStyle} fontWeight={fontWeight} asChild forwardCssProp>
      <div {...props} />
    </Text>
  </InternalFileUploadItemSizeText>
);

const InternalFileUploadItemDeleteTrigger = withContext<
  HTMLButtonElement,
  Assign<JsxStyleProps, FileUpload.ItemDeleteTriggerProps>
>(FileUpload.ItemDeleteTrigger, "itemDeleteTrigger");

export const FileUploadItemDeleteTrigger = InternalFileUploadItemDeleteTrigger;
