/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FolderStructureProps, SetOpenFolderProp, SetKeyNavigationId } from '../TreeStructure.types';

export interface KeyboardNavigationProps {
  e: React.KeyboardEvent<HTMLElement>;
  data: FolderStructureProps[];
  setKeyNavigationId: SetKeyNavigationId;
  openFolders: Set<string>;
  setOpenFolders: SetOpenFolderProp;
  keyNavigationId: { id: string; currentFocusIsCreateFolderButton?: boolean } | undefined;
  editable?: boolean;
}

export interface ElementWithKeyFocusProps {
  paths: number[];
  index: number;
  data?: FolderStructureProps[];
  parent?: FolderStructureProps[];
  parentId?: string;
  isOpen?: boolean;
}
