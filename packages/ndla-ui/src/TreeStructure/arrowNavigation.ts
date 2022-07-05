/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent } from 'react';

const navigateUp = (visibleFolders: string[], folderId: string, setFocusedFolderId: (id: string) => void) => {
  const currentIndex = visibleFolders.findIndex((id) => id === folderId);
  const target = visibleFolders[currentIndex - 1];
  if (target) {
    setFocusedFolderId(target);
  }
};

const navigateDown = (visibleFolders: string[], folderId: string, setFocusedFolderId: (id: string) => void) => {
  const currentIndex = visibleFolders.findIndex((id) => id === folderId);
  const target = visibleFolders[currentIndex + 1];
  if (target) {
    setFocusedFolderId(target);
  }
};

export const arrowNavigation = (
  e: KeyboardEvent<HTMLElement>,
  id: string,
  visibleFolders: string[],
  setFocusedFolderId: (id: string) => void,
  onOpen: (id: string) => void,
  onClose: (id: string) => void,
) => {
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'arrowRight'].includes(e.key)) {
    e.preventDefault();
    e.stopPropagation();
  }
  switch (e.key) {
    case 'ArrowUp':
      return navigateUp(visibleFolders, id, setFocusedFolderId);
    case 'ArrowDown':
      return navigateDown(visibleFolders, id, setFocusedFolderId);
    case 'ArrowLeft':
      return onClose(id);
    case 'ArrowRight':
      return onOpen(id);
    default:
      return;
  }
};
