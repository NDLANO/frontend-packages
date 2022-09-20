/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { MouseEvent, ReactNode } from 'react';
import { IFolder, IResource } from '@ndla/types-learningpath-api';
import { MenuItemProps } from '@ndla/button';

export interface FolderType extends IFolder {
  icon?: ReactNode;
  isNavigation?: boolean;
}

export type TreeStructureType = 'navigation' | 'picker';

export type OnCreatedFunc = (folder: IFolder | undefined, parentId: string) => void;

export type NewFolderInputFunc = ({
  onClose,
  parentId,
  onCreate,
}: {
  onClose: () => void;
  parentId: string;
  onCreate: OnCreatedFunc;
}) => ReactNode;

export interface TreeStructureMenuProps extends Omit<MenuItemProps, 'onClick'> {
  onClick: (e: MouseEvent<HTMLDivElement> | undefined, folder: FolderType) => void;
}

export interface CommonTreeStructureProps {
  loading?: boolean;
  onSelectFolder?: (id: string) => void;
  targetResource?: IResource;
  type: TreeStructureType;
}

export interface CommonFolderItemsProps extends CommonTreeStructureProps {
  focusedFolder?: FolderType;
  level: number;
  maxLevel: number;
  selectedFolder?: FolderType;
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  setFocusedFolder: (folder: FolderType, focus?: boolean) => void;
  setSelectedFolder: (folder: FolderType) => void;
  visibleFolders: FolderType[];
  closeTree: () => void;
}
