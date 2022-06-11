/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';

export interface FolderStructureProps {
  id: string;
  name: string;
  isOpen?: boolean;
  data?: FolderStructureProps[];
  isFavorite?: boolean;
  status?: string;
  openAsDefault?: boolean;
  url?: string;
  icon?: React.ReactNode;
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
  label: string;
  folderIdMarkedByDefault?: string;
  onNewFolder: (props: { value: string; parentId?: string; idPaths: number[] }) => Promise<string>;
}

export type onCreateNewFolderProp = ({
  idPaths,
  parentId,
}: {
  idPaths: number[];
  parentId: string | undefined;
}) => void;
type onSaveNewFolderProp = ({ value, cancel }: { value: string; cancel: boolean }) => void;

export type SetOpenFolderProp = React.Dispatch<React.SetStateAction<Set<string>>>;
export type SetKeyNavigationId = React.Dispatch<
  React.SetStateAction<
    | {
        id: string;
        currentFocusIsCreateFolderButton?: boolean | undefined;
      }
    | undefined
  >
>;

export interface FolderItemsProps extends CommonFolderProps {
  onToggleOpen: (id: string) => void;
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
  newFolder: NewFolderProps | undefined;
  openFolders: Set<string>;
  markedFolderId?: string;
  onMarkFolder: (id: string) => void;
  idPaths: number[];
  keyNavigationId: string | undefined;
  setKeyNavigationId: SetKeyNavigationId;
  firstLevel: boolean;
  keyNavigationFocusIsCreateFolderButton?: boolean;
  icon?: React.ReactElement;
}

export interface NewFolderOptionProp {
  editing: boolean;
  loading?: boolean;
  parentId?: string;
  idPaths: number[];
  onSaveNewFolder: onSaveNewFolderProp;
  onCreateNewFolder: onCreateNewFolderProp;
  withPadding?: boolean;
  tabIndex?: 0 | -1;
  rootLevelId?: string;
}
