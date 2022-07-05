/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent } from 'react';
import { FolderStructureProps } from './TreeStructure.types';

const flattenFolders = (folders: FolderStructureProps[]): string[] => {
  return folders.reduce((acc, { data, id }) => {
    if (!data) {
      return [...acc, id];
    }
    return [...acc, id, ...flattenFolders(data)];
  }, [] as string[]);
};

const navigateUp = (folders: FolderStructureProps[], folderId: string, setFocusedFolderId: (id: string) => void) => {
  const folderIds = flattenFolders(folders);
  const currentIndex = folderIds.findIndex((id) => id === folderId);
  const target = folderIds[currentIndex - 1];
  if (target) {
    setFocusedFolderId(target);
  }
};

const navigateDown = (element: HTMLElement) => {
  console.log('down');
};

export const arrowNavigation = (
  e: KeyboardEvent<HTMLElement>,
  id: string,
  data: FolderStructureProps[],
  setFocusedFolderId: (id: string) => void,
  onOpen: (id: string) => void,
  onClose: (id: string) => void,
) => {
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    e.stopPropagation();
    return navigateUp(data, id, setFocusedFolderId);
  }
  if (e.key === 'ArrowLeft') {
    e.preventDefault();
    e.stopPropagation();
    return onClose(id);
  }
  if (e.key === 'ArrowRight') {
    e.preventDefault();
    e.stopPropagation();
    return onOpen(id);
  }
};
