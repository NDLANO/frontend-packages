import { Folder } from './TreeStructure.types';

export const getPathOfFolder = (data: Folder[], findId: string): string[] => {
  const paths = (folders: Folder[], path: string[]): string[] => {
    for (const { id, subfolders } of folders) {
      if (id === findId) {
        return [...path, id];
      } else if (subfolders?.length) {
        return paths(subfolders, [...path, id]);
      }
    }
    return [];
  };
  return paths(data, []);
};

export const flattenFolders = (folders: Folder[], openFolders?: string[]): Folder[] => {
  return folders.reduce((acc, { subfolders, id, ...rest }) => {
    if (!subfolders || (openFolders && !openFolders.includes(id))) {
      return acc.concat({ subfolders, id, ...rest });
    }
    return acc.concat({ subfolders, id, ...rest }, flattenFolders(subfolders, openFolders));
  }, [] as Folder[]);
};
