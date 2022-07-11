/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEvent, ReactNode } from 'react';
import { IFolder } from '@ndla/types-learningpath-api';
import { MenuItemProps } from '@ndla/button/src';

export interface FolderType extends IFolder {
  icon?: ReactNode;
}

export interface TreeStructureMenuProps extends Omit<MenuItemProps, 'onClick'> {
  onClick: (e: MouseEvent<HTMLDivElement> | undefined, folder: FolderType) => void;
}

export interface CommonTreeStructureProps {
  loading?: boolean;
  onSelectFolder?: (id: string) => void;
  openOnFolderClick?: boolean;
  menuItems?: TreeStructureMenuProps[];
}

export interface CommonFolderItemsProps extends CommonTreeStructureProps {
  focusedFolderId?: string;
  icon?: React.ReactNode;
  level: number;
  selectedFolder?: FolderType;
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  setFocusedId: (id: string) => void;
  setSelectedFolder: (id: FolderType) => void;
  visibleFolders: string[];
}
