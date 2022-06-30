/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FolderStructureProps, SetFocusedFolderId } from '../TreeStructure.types';

export interface KeyboardNavigationProps {
  e: React.KeyboardEvent<HTMLElement>;
  data: FolderStructureProps[];
  setFocusedFolderId: SetFocusedFolderId;
  openFolders: string[];
  onToggleOpen: (id: string) => void;
  focusedFolderId: string | undefined;
}

export interface ElementWithKeyFocusProps {
  paths: number[];
  index: number;
  data?: FolderStructureProps[];
  parent?: FolderStructureProps[];
  parentId?: string;
  isOpen?: boolean;
  url?: string;
}
