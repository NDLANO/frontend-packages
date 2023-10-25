/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useCallback, useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UploadDropZone from './UploadDropZone';
import { defaultParameters } from '../../../stories/defaults';

export default {
  title: 'Components/UploadDropZone',
  tags: ['autodocs'],
  component: UploadDropZone,
  parameters: {
    inlineStories: true,
    ...defaultParameters,
  },
  args: {
    allowedFiles: ['application/pdf', 'image/gif', 'image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', '.js'],
    multiple: true,
    ariaLabel: 'Upload example',
    children: 'Dra og slipp eller trykk for å laste opp fil(er)',
    loading: false,
  },
  argTypes: {
    onAddedFiles: { control: false },
  },
} as Meta<typeof UploadDropZone>;

export const Default: StoryFn<typeof UploadDropZone> = ({ loading, ...args }) => {
  const [addedFiles, setAddedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading]);

  const onAddFiles = useCallback((files: File[]) => {
    setIsLoading(true);
    setTimeout(() => {
      setAddedFiles((prev) => prev.concat(files));
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div>
      <UploadDropZone {...args} onAddedFiles={onAddFiles} loading={isLoading} />
      <ul>
        {addedFiles.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
};
