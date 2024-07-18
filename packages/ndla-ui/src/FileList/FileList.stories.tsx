/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import { Pencil } from "@ndla/icons/action";
import { DeleteForever, DragVertical } from "@ndla/icons/editor";
import { IconButton } from "@ndla/primitives";
import { Flex, styled } from "@ndla/styled-system/jsx";
import File from "./File";
import { FileListEmbed, FileListItem, FileListRoot } from "./FileList";
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

export const FileNotFound: StoryObj<typeof File> = {
  args: { fileExists: false },
  render: (args) => (
    <FileListRoot>
      <ul>
        <FileListItem>
          <File {...args} />
        </FileListItem>
      </ul>
    </FileListRoot>
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

export const NoHeader: StoryObj<typeof File> = {
  render: () => (
    <FileListRoot>
      <ul>
        <FileListItem>
          <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
        </FileListItem>
        <FileListItem>
          <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
        </FileListItem>
      </ul>
    </FileListRoot>
  ),
};

const StyledIconButton = styled(IconButton, {
  base: {
    height: "small",
  },
});
const StyledFlex = styled(Flex, { base: { paddingInlineStart: "medium" } });

export const FilesWithButtons: StoryObj<typeof File> = {
  render: () => (
    <FileListRoot>
      <ul>
        <FileListItem>
          <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb">
            <StyledFlex>
              <StyledIconButton variant="clear">
                <Pencil />
              </StyledIconButton>
              <StyledIconButton variant="clear">
                <DeleteForever />
              </StyledIconButton>
            </StyledFlex>
          </File>
        </FileListItem>
        <FileListItem>
          <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb">
            <StyledFlex>
              <StyledIconButton variant="clear">
                <Pencil />
              </StyledIconButton>
              <StyledIconButton variant="clear">
                <DeleteForever />
              </StyledIconButton>
            </StyledFlex>
          </File>
        </FileListItem>
      </ul>
    </FileListRoot>
  ),
};

const StyledFileListItem = styled(FileListItem, {
  base: {
    paddingInlineStart: "xxsmall",
    display: "flex",
    gap: "xxsmall",
  },
});

export const FilesWithDragHandle: StoryObj<typeof FileListRoot> = {
  render: () => (
    <FileListRoot>
      <ul>
        <StyledFileListItem>
          <StyledIconButton variant="clear">
            <DragVertical />
          </StyledIconButton>
          <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" fileSize="100 mb" />
        </StyledFileListItem>
      </ul>
    </FileListRoot>
  ),
};
