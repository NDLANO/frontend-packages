/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Meta, StoryObj } from '@storybook/react';
import FileV2 from './FileV2';
import { defaultParameters } from '../../../../stories/defaults';
import FileListV2 from './FileListV2';

export default {
  title: 'Components/FileList',
  tags: ['autodocs'],
  component: FileV2,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    title: 'Min fil',
    url: 'https://www.ndla.no',
    fileExists: true,
    fileType: 'pdf',
  },
  render: (args) => (
    <FileListV2>
      <FileV2 {...args} />
    </FileListV2>
  ),
} as Meta<typeof FileV2>;

export const FileNotFound: StoryObj<typeof FileV2> = {
  args: { fileExists: false },
};

export const SeveralFiles: StoryObj<typeof FileV2> = {
  render: () => (
    <FileListV2>
      <FileV2 title="Fil 1" url="https://ndla.no/1" fileExists fileType="mp4" />
      <FileV2 title="Fil 2" url="https://ndla.no/2" fileExists={false} fileType="pdf" />
      <FileV2 title="Fil 3" url="https://ndla.no/3" fileExists fileType="docx" />
      <FileV2 title="Fil 4" url="https://ndla.no/4" fileExists fileType="docx" />
    </FileListV2>
  ),
};
