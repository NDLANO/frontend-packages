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
  isOpen?: boolean;
  data?: FolderStructureProps[];
  isFavorite?: boolean;
  status?: string;
  openAsDefault?: boolean;
  url?: string;
  icon?: ReactNode;
}

export interface NewFolderProps {
  parentId?: string;
  idPaths: number[];
}

interface CommonFolderProps {
  data: FolderStructureProps[];
  editable?: boolean;
  loading?: boolean;
  openOnFolderClick?: boolean;
}

export interface TreeStructureProps extends CommonFolderProps {
  framed?: boolean;
  label?: string;
  folderIdMarkedByDefault?: string;
  onNewFolder: (props: { value: string; parentId?: string; idPaths: number[] }) => Promise<string>;
  defaultOpenFolders?: string[];
  folderChild?: FolderChildFuncType;
  maximumLevelsOfFoldersAllowed: number;
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
  subFolders: FolderStructureProps[];
  onCloseFolder: (id: string) => void;
  onOpenFolder: (id: string) => void;
  onSaveNewFolder: (value: string) => void;
  onCancelNewFolder: () => void;
  onCreateNewFolder: onCreateNewFolderProp;
  newFolder: NewFolderProps | undefined;
  visibleFolders: string[];
  openFolders: string[];
  markedFolderId?: string;
  onMarkFolder: (id: string) => void;
  idPaths: number[];
  focusedFolderId: string | undefined;
  setFocusedFolderId: SetFocusedFolderId;
  firstLevel: boolean;
  keyNavigationFocusIsCreateFolderButton?: boolean;
  icon?: ReactNode;
  folderChild?: FolderChildFuncType;
  maximumLevelsOfFoldersAllowed: number;
}
