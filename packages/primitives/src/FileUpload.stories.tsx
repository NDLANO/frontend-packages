/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FileDocumentOutline } from "@ndla/icons/common";
import { DeleteForever } from "@ndla/icons/editor";
import { Button, IconButton } from "./Button";
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
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

const meta: Meta<typeof FileUploadRoot> = {
  title: "Primitives/FileUpload",
  tags: ["autodocs"],
  component: FileUploadRoot,
  args: {
    maxFiles: Infinity,
  },
};

export default meta;

export const Default: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args}>
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
              <FileUploadItemDeleteTrigger asChild>
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
              <FileUploadItemDeleteTrigger asChild>
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
              <FileUploadItemDeleteTrigger asChild>
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

export const OnlyFilesBetween1MbAnd4Mb: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} minFileSize={1000000} maxFileSize={4000000}>
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
              <FileUploadItemDeleteTrigger asChild>
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
              <FileUploadItemDeleteTrigger asChild>
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
  const [invalid, setInvalid] = useState(false);

  return (
    <FieldRoot invalid={invalid}>
      <FileUploadRoot
        {...args}
        onFileReject={(details) => {
          details.files?.find(({ errors }) => errors.length && errors.length >= 1) ? setInvalid(true) : null;
        }}
        accept="image/*"
      >
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
                  <FileUploadItemName />
                  <FileUploadItemSizeText />
                  <FileUploadItemDeleteTrigger asChild>
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
      <FieldErrorMessage>That file can't be uploaded</FieldErrorMessage>
    </FieldRoot>
  );
};
