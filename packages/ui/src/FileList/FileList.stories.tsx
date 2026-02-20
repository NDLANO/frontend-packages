/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PencilFill, DeleteBinLine, Draggable } from "@ndla/icons";
import { IconButton } from "@ndla/primitives";
import { HStack, styled } from "@ndla/styled-system/jsx";
import type { Meta, StoryFn, StoryObj } from "@storybook/react";
import { File } from "./File";
import { FileListEmbed, FileListItem } from "./FileList";
import { PdfFile } from "./PdfFile";

export default {
  title: "Components/FileList",
  tags: ["autodocs"],
  component: File,
  parameters: {
    inlineStories: true,
  },
  args: {
    title: "Min fil",
    url: "https://www.ndla.no",
    fileExists: true,
    fileType: "pdf",
  },
  render: (args) => (
    <ul>
      <File {...args} />
    </ul>
  ),
} as Meta<typeof File>;

export const FileListStory: StoryFn<typeof File> = (args) => (
  <ul>
    <FileListItem>
      <File {...args} />
    </FileListItem>
    <FileListItem>
      <File {...args} />
    </FileListItem>
    <FileListItem>
      <File {...args} />
    </FileListItem>
  </ul>
);

export const FileNotFound: StoryObj<typeof File> = {
  args: { fileExists: false },
  render: (args) => (
    <ul>
      <FileListItem>
        <File {...args} />
      </FileListItem>
    </ul>
  ),
};

export const SeveralFiles: StoryObj<typeof File> = {
  render: () => (
    <FileListEmbed>
      <FileListItem>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
      </FileListItem>
      <FileListItem>
        <File title="Fil 2" url="https://ndla.no/2" fileExists={false} fileType="png" fileSize="100 mb" />
      </FileListItem>
      <FileListItem>
        <File title="Fil 3" url="https://ndla.no/3" fileExists fileType="docx" fileSize="100 mb" />
      </FileListItem>
      <FileListItem>
        <File title="Fil 4" url="https://ndla.no/4" fileExists fileType="docx" fileSize="100 mb" />
      </FileListItem>
    </FileListEmbed>
  ),
};

export const DifferentFiles: StoryObj<typeof File> = {
  render: () => (
    <FileListEmbed>
      <FileListItem>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
      </FileListItem>
      <PdfFile
        title="Fil 3"
        url="https://api.test.ndla.no/files/131789/krypteringsaktivitet_-_til_fiendegruppe_bm.pdf"
      />
      <FileListItem>
        <File title="Fil 3" url="https://ndla.no/3" fileExists fileType="docx" fileSize="100 mb" />
      </FileListItem>
    </FileListEmbed>
  ),
};

export const JustTheFileItems: StoryObj<typeof File> = {
  render: () => (
    <ul>
      <FileListItem>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
      </FileListItem>
      <FileListItem>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
      </FileListItem>
    </ul>
  ),
};

export const FileItemsWithButtons: StoryObj<typeof File> = {
  render: () => (
    <ul>
      <FileListItem>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
        <HStack>
          <IconButton variant="clear">
            <PencilFill />
          </IconButton>
          <IconButton variant="clear">
            <DeleteBinLine />
          </IconButton>
        </HStack>
      </FileListItem>
      <FileListItem>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
        <HStack>
          <IconButton variant="clear">
            <PencilFill />
          </IconButton>
          <IconButton variant="clear">
            <DeleteBinLine />
          </IconButton>
        </HStack>
      </FileListItem>
    </ul>
  ),
};

const StyledFileListItem = styled(FileListItem, {
  base: {
    paddingInlineStart: "xxsmall",
    display: "flex",
    gap: "xxsmall",
  },
});

export const FilesWithDragHandle: StoryObj<typeof File> = {
  render: () => (
    <ul>
      <StyledFileListItem>
        <IconButton variant="clear">
          <Draggable />
        </IconButton>
        <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
      </StyledFileListItem>
    </ul>
  ),
};
