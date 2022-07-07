/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { KeyboardEvent } from 'react';

const navigateVertical = (
  visibleFolders: string[],
  folderId: string,
  setFocusedFolderId: (id: string) => void,
  direction: 1 | -1,
) => {
  const currentIndex = visibleFolders.findIndex((id) => id === folderId);
  const target = visibleFolders[currentIndex + direction];
  if (target !== undefined) {
    setFocusedFolderId(target);
  }
};

const arrowKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

export const arrowNavigation = (
  e: KeyboardEvent<HTMLElement>,
  id: string,
  visibleFolders: string[],
  setFocusedFolderId: (id: string) => void,
  onOpen: (id: string) => void,
  onClose: (id: string) => void,
) => {
  if (!arrowKeys.includes(e.key)) {
    return;
  }

  e.preventDefault();
  e.stopPropagation();

  switch (e.key) {
    case 'ArrowUp':
      return navigateVertical(visibleFolders, id, setFocusedFolderId, -1);
    case 'ArrowDown':
      return navigateVertical(visibleFolders, id, setFocusedFolderId, 1);
    case 'ArrowLeft':
      return onClose(id);
    case 'ArrowRight':
      return onOpen(id);
    default:
      return;
  }
};
