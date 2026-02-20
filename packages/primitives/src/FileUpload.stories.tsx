/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DeleteBinLine, FileTextLine, UploadCloudLine } from "@ndla/icons";
import type { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import { Button, IconButton } from "./Button";
import { FieldRoot } from "./Field";
import { FieldErrorMessage } from "./FieldErrorMessage";
import {
  FileUploadContext,
  FileUploadDropzone,
  FileUploadHiddenInput,
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
    maxFiles: 3,
  },
};

export default meta;

export const Default: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args}>
    <FileUploadDropzone>
      <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <UploadCloudLine />
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
                <FileTextLine />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild>
                <IconButton variant="secondary">
                  <DeleteBinLine />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export const WithoutFileList: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args}>
    <FileUploadDropzone>
      <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <UploadCloudLine />
          Open Dialog
        </Button>
      </FileUploadTrigger>
    </FileUploadDropzone>
    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export const MaxThreeFiles: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} maxFiles={3}>
    <FileUploadDropzone>
      <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <UploadCloudLine />
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
                <FileTextLine />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild>
                <IconButton variant="secondary">
                  <DeleteBinLine />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export const OnlyImages: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} accept="image/*">
    <FileUploadDropzone>
      <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <UploadCloudLine />
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
                <FileTextLine />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild>
                <IconButton variant="secondary">
                  <DeleteBinLine />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export const OnlyFilesBetween1MbAnd4Mb: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} minFileSize={1000000} maxFileSize={4000000}>
    <FileUploadDropzone>
      <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <UploadCloudLine />
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
                <FileTextLine />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild>
                <IconButton variant="secondary">
                  <DeleteBinLine />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export const Disabled: StoryFn<typeof FileUploadRoot> = (args) => (
  <FileUploadRoot {...args} disabled={true}>
    <FileUploadDropzone>
      <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
      <FileUploadTrigger asChild>
        <Button>
          <UploadCloudLine />
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
                <FileTextLine />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
              <FileUploadItemDeleteTrigger asChild>
                <IconButton variant="secondary">
                  <DeleteBinLine />
                </IconButton>
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
    <FileUploadHiddenInput />
  </FileUploadRoot>
);

export const WithField: StoryFn<typeof FileUploadRoot> = (args) => {
  const [invalid, setInvalid] = useState(false);

  return (
    <FieldRoot invalid={invalid}>
      <FileUploadRoot
        {...args}
        onFileReject={(details) =>
          details.files?.find(({ errors }) => errors.length && errors.length >= 1) ? setInvalid(true) : null
        }
        accept="image/*"
      >
        <FileUploadDropzone>
          <FileUploadLabel>Drop your files here or click to upload</FileUploadLabel>
          <FileUploadTrigger asChild>
            <Button>
              <UploadCloudLine />
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
                    <FileTextLine />
                  </FileUploadItemPreview>
                  <FileUploadItemName />
                  <FileUploadItemSizeText />
                  <FileUploadItemDeleteTrigger asChild>
                    <IconButton variant="secondary">
                      <DeleteBinLine />
                    </IconButton>
                  </FileUploadItemDeleteTrigger>
                </FileUploadItem>
              ))
            }
          </FileUploadContext>
        </FileUploadItemGroup>
        <FileUploadHiddenInput />
      </FileUploadRoot>
      <FieldErrorMessage>That file can't be uploaded</FieldErrorMessage>
    </FieldRoot>
  );
};
