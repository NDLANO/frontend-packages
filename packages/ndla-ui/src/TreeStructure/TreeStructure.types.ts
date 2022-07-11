/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';

export interface Folder {
  icon?: ReactNode;
  id: string;
  isFavorite?: boolean;
  name: string;
  openAsDefault?: boolean;
  status?: string;
  subfolders: Folder[];
}

interface CommonFolderProps {
  editable?: boolean;
  loading?: boolean;
  onSelectFolder?: (id: string) => void;
  openOnFolderClick?: boolean;
}

export interface TreeStructureProps extends CommonFolderProps {
  defaultOpenFolders?: string[];
  folderChild?: FolderChildFuncType;
  folders: Folder[];
  framed?: boolean;
  label?: string;
  maximumLevelsOfFoldersAllowed?: number;
  onNewFolder: (name: string, parentId: string) => Promise<string>;
}

export type onCreateNewFolderProp = ({
  idPaths,
  parentId,
}: {
  idPaths: number[];
  parentId: string | undefined;
}) => void;

export type FolderChildFuncType = (id: string, tabIndex: number) => ReactNode;

export interface FolderItemsProps extends CommonFolderProps {
  focusedFolderId: string | undefined;
  folderChild?: FolderChildFuncType;
  folders: Folder[];
  icon?: ReactNode;
  keyNavigationFocusIsCreateFolderButton?: boolean;
  level: number;
  markedFolderId?: string;
  maximumLevelsOfFoldersAllowed: number;
  newFolderParentId: string | undefined;
  onCancelNewFolder: () => void;
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  onSaveNewFolder: (name: string, parentId: string) => void;
  openFolders: string[];
  setFocusedId: (id: string) => void;
  setSelectedId: (id: string) => void;
  visibleFolders: string[];
}
