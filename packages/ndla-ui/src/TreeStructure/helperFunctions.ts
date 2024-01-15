/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IFolder } from "@ndla/types-backend/learningpath-api";
import { TreeStructureType } from "./types";

export const flattenFolders = (folders: IFolder[], openFolders?: string[]): IFolder[] => {
  return folders.reduce((acc, { subfolders, id, ...rest }) => {
    if (!subfolders || (openFolders && !openFolders.includes(id))) {
      return acc.concat({ subfolders, id, ...rest });
    }
    return acc.concat({ subfolders, id, ...rest }, flattenFolders(subfolders, openFolders));
  }, [] as IFolder[]);
};

export const treestructureId = (type: TreeStructureType, modifier: string) => {
  return `${type}-treestructure-${modifier}`;
};
