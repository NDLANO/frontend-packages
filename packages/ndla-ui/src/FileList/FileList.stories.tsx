/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from "@storybook/react";
import File from "./File";
import FileList from "./FileList";

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
    <FileList>
      <File {...args} />
    </FileList>
  ),
} as Meta<typeof File>;

export const FileNotFound: StoryObj<typeof File> = {
  args: { fileExists: false },
};

export const SeveralFiles: StoryObj<typeof File> = {
  render: () => (
    <FileList>
      <File title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" />
      <File title="Fil 2" url="https://ndla.no/2" fileExists={false} fileType="pdf" />
      <File title="Fil 3" url="https://ndla.no/3" fileExists fileType="docx" />
      <File title="Fil 4" url="https://ndla.no/4" fileExists fileType="docx" />
    </FileList>
  ),
};
