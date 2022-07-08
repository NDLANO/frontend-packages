/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';

export interface FolderStructureProps {
  id: string;
  name: string;
  subfolders: FolderStructureProps[];
  isFavorite?: boolean;
  status?: string;
  openAsDefault?: boolean;
  icon?: ReactNode;
}

interface CommonFolderProps {
  editable?: boolean;
  loading?: boolean;
  openOnFolderClick?: boolean;
  onSelectFolder?: (id: string) => void;
}

export interface TreeStructureProps extends CommonFolderProps {
  folders: FolderStructureProps[];
  framed?: boolean;
  label?: string;
  onNewFolder: (name: string, parentId: string) => Promise<string>;
  defaultOpenFolders?: string[];
  folderChild?: FolderChildFuncType;
  maximumLevelsOfFoldersAllowed?: number;
}

export type onCreateNewFolderProp = ({
  idPaths,
  parentId,
}: {
  idPaths: number[];
  parentId: string | undefined;
}) => void;

export type SetOpenFolderProp = React.Dispatch<React.SetStateAction<string[]>>;
export type SetFocusedFolderId = React.Dispatch<React.SetStateAction<string | undefined>>;

export type FolderChildFuncType = (id: string, tabIndex: number) => ReactNode;

export interface FolderItemsProps extends CommonFolderProps {
  folders: FolderStructureProps[];
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  onSaveNewFolder: (name: string, parentId: string) => void;
  onCancelNewFolder: () => void;
  onCreateNewFolder: (parentId: string) => void;
  newFolderParentId: string | undefined;
  visibleFolders: string[];
  openFolders: string[];
  markedFolderId?: string;
  onMarkFolder: (id: string) => void;
  level: number;
  focusedFolderId: string | undefined;
  setFocusedFolderId: SetFocusedFolderId;
  keyNavigationFocusIsCreateFolderButton?: boolean;
  icon?: ReactNode;
  folderChild?: FolderChildFuncType;
  maximumLevelsOfFoldersAllowed: number;
}
