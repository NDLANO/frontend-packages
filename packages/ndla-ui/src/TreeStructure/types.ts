/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { IFolder, IResource } from '@ndla/types-learningpath-api';

export interface FolderType extends IFolder {}

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

export interface CommonTreeStructureProps {
  loading?: boolean;
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
  setFocusedFolder: (folder: FolderType) => void;
  setSelectedFolder: (folder: FolderType) => void;
  visibleFolders: FolderType[];
  closeTree: () => void;
}
