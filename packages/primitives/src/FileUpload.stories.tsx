/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryFn } from "@storybook/react";
import { Button, IconButton } from "./Button";
import {
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadRoot,
  FileUploadTrigger,
} from "./FileUpload";
import { DeleteForever } from "@ndla/icons/editor";
import { FileDocumentOutline } from "@ndla/icons/common";
import { useState } from "react";

const meta: Meta<typeof FileUploadRoot> = {
  title: "Primitives/FileUpload",
  tags: ["autodocs"],
  component: FileUploadRoot,
  args: {},
};

export default meta;

export const Default: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args}>
    <FileUploadLabel>Fileupload</FileUploadLabel>
    <FileUploadDropzone>
      <FileUploadLabel textStyle="label.medium" fontWeight="light">
        Drop your files here or click to upload
      </FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <DeleteForever />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={file.name} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type="^(?!image\/.*).*">
                <FileDocumentOutline />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild forwardCssProp>
                <IconButton variant="secondary">
                  <DeleteForever />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export const WithoutFileList: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args}>
    <FileUploadLabel>Fileupload</FileUploadLabel>
    <FileUploadDropzone>
      <FileUploadLabel textStyle="label.medium" fontWeight="light">
        Drop your files here or click to upload
      </FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <DeleteForever />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
  </FileUploadRoot>
);

export const MaxThreeFiles: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} maxFiles={3}>
    <FileUploadLabel>Fileupload</FileUploadLabel>
    <FileUploadDropzone>
      <FileUploadLabel textStyle="label.medium" fontWeight="light">
        Drop your files here or click to upload
      </FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <DeleteForever />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={file.name} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type="^(?!image\/.*).*">
                <FileDocumentOutline />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild forwardCssProp>
                <IconButton variant="secondary">
                  <DeleteForever />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export const OnlyImages: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} accept="image/*">
    <FileUploadLabel>Fileupload</FileUploadLabel>
    <FileUploadDropzone>
      <FileUploadLabel textStyle="label.medium" fontWeight="light">
        Drop your files here or click to upload
      </FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <DeleteForever />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={file.name} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type="^(?!image\/.*).*">
                <FileDocumentOutline />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild forwardCssProp>
                <IconButton variant="secondary">
                  <DeleteForever />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export const OnlyFilesBetweenSizes: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} minFileSize={1000000} maxFileSize={4000000} maxFiles={3}>
    <FileUploadLabel>Fileupload</FileUploadLabel>
    <FileUploadDropzone>
      <FileUploadLabel textStyle="label.medium" fontWeight="light">
        Drop your files here or click to upload
      </FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <DeleteForever />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={file.name} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type="^(?!image\/.*).*">
                <FileDocumentOutline />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild forwardCssProp>
                <IconButton variant="secondary">
                  <DeleteForever />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export const Disabled: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} disabled={true}>
    <FileUploadLabel>Fileupload</FileUploadLabel>
    <FileUploadDropzone>
      <FileUploadLabel textStyle="label.medium" fontWeight="light">
        Drop your files here or click to upload
      </FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <DeleteForever />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={file.name} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type="^(?!image\/.*).*">
                <FileDocumentOutline />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild forwardCssProp>
                <IconButton variant="secondary">
                  <DeleteForever />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUploadRoot>
);

export const WithField: StoryFn<typeof FileUploadRoot> = (args) => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploadRoot {...args} disabled={true}>
      <FileUploadLabel>Fileupload</FileUploadLabel>
      <FileUploadDropzone>
        <FileUploadLabel textStyle="label.medium" fontWeight="light">
          Drop your files here or click to upload
        </FileUploadLabel>
        <FileUploadTrigger asChild>
          <Button>
            <DeleteForever />
            Open Dialog
          </Button>
        </FileUploadTrigger>
      </FileUploadDropzone>
      <FileUploadItemGroup>
        <FileUploadContext>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUploadItem key={file.name} file={file}>
                <FileUploadItemPreview type="image/*">
                  <FileUploadItemPreviewImage />
                </FileUploadItemPreview>
                <FileUploadItemPreview type="^(?!image\/.*).*">
                  <FileDocumentOutline />
                </FileUploadItemPreview>
                <FileUploadItemName />
                <FileUploadItemSizeText />
                <FileUploadItemDeleteTrigger asChild forwardCssProp>
                  <IconButton variant="secondary">
                    <DeleteForever />
                  </IconButton>
                </FileUploadItemDeleteTrigger>
              </FileUploadItem>
            ))
          }
        </FileUploadContext>
      </FileUploadItemGroup>
    </FileUploadRoot>
  );
};
