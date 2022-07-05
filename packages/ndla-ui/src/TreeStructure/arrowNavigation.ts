/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent } from 'react';

const navigateUp = (openFolders: string[], folderId: string, setFocusedFolderId: (id: string) => void) => {
  const currentIndex = openFolders.findIndex((id) => id === folderId);
  const target = openFolders[currentIndex - 1];
  if (target) {
    setFocusedFolderId(target);
  }
};

const navigateDown = (openFolders: string[], folderId: string, setFocusedFolderId: (id: string) => void) => {
  const currentIndex = openFolders.findIndex((id) => id === folderId);
  const target = openFolders[currentIndex + 1];
  if (target) {
    setFocusedFolderId(target);
  }
};

export const arrowNavigation = (
  e: KeyboardEvent<HTMLElement>,
  id: string,
  openFolders: string[],
  setFocusedFolderId: (id: string) => void,
  onOpen: (id: string) => void,
  onClose: (id: string) => void,
) => {
  if (e.key === 'ArrowUp') {
    e.preventDefault();
    e.stopPropagation();
    return navigateUp(openFolders, id, setFocusedFolderId);
  }
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    e.stopPropagation();

    return navigateDown(openFolders, id, setFocusedFolderId);
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
