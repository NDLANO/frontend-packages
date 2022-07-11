/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { IFolder } from '@ndla/types-learningpath-api';

export interface Folder extends IFolder {
  icon?: ReactNode;
}

export interface CommonTreeStructureProps {
  loading?: boolean;
  onSelectFolder?: (id: string) => void;
  openOnFolderClick?: boolean;
  folderChild?: FolderChildFuncType;
}

export interface CommonFolderItemsProps extends CommonTreeStructureProps {
  focusedFolderId?: string;
  icon?: React.ReactNode;
  level: number;
  selectedFolder?: Folder;
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  setFocusedId: (id: string) => void;
  setSelectedFolder: (id: Folder) => void;
  visibleFolders: string[];
}

export type FolderChildFuncType = (id: string, tabIndex: number) => ReactNode;
