import { FolderType, TreeStructureType } from './types';

export const flattenFolders = (folders: FolderType[], openFolders?: string[]): FolderType[] => {
  return folders.reduce((acc, { subfolders, id, ...rest }) => {
    if (!subfolders || (openFolders && !openFolders.includes(id))) {
      return acc.concat({ subfolders, id, ...rest });
    }
    return acc.concat({ subfolders, id, ...rest }, flattenFolders(subfolders, openFolders));
  }, [] as FolderType[]);
};

export const treestructureId = (type: TreeStructureType, modifier: string) => {
  return `${type}-treestructure-${modifier}`;
};
