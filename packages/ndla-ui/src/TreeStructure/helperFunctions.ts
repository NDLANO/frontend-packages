import { Folder } from './TreeStructure.types';

export const flattenFolders = (folders: Folder[], openFolders?: string[]): Folder[] => {
  return folders.reduce((acc, { subfolders, id, ...rest }) => {
    if (!subfolders || (openFolders && !openFolders.includes(id))) {
      return acc.concat({ subfolders, id, ...rest });
    }
    return acc.concat({ subfolders, id, ...rest }, flattenFolders(subfolders, openFolders));
  }, [] as Folder[]);
};
