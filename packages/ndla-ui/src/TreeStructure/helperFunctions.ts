import { IFolder } from '@ndla/types-backend/learningpath-api';
import { TreeStructureType } from './types';

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
