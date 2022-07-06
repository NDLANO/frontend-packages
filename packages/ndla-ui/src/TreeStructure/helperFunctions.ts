import { FolderStructureProps } from './TreeStructure.types';

export const getPathOfFolder = (data: FolderStructureProps[], findId: string): string[] => {
  const paths = (folders: FolderStructureProps[], path: string[]): string[] => {
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

export const getFolderName = (data: FolderStructureProps[], findId: string | undefined): string | undefined => {
  if (!findId) {
    return undefined;
  }
  let folderName: string | undefined;
  const paths = (dataChildren: FolderStructureProps[]) => {
    dataChildren.some(({ id, name, subfolders: dataChildrenSub }, _index) => {
      if (id === findId) {
        folderName = name;
        return true;
      } else if (dataChildrenSub?.length) {
        return paths(dataChildrenSub);
      }
      return false;
    });
  };
  paths(data);
  return folderName;
};

// Her må openFolders brukes. Må filtrere bort usynlige mapper

export const flattenFolders = (folders: FolderStructureProps[], openFolders?: string[]): FolderStructureProps[] => {
  return folders.reduce((acc, { subfolders: data, id, ...rest }) => {
    if (openFolders && !openFolders?.includes(id)) {
      return [...acc, { subfolders: data, id, ...rest }];
    }
    if (!data) {
      return [...acc, { subfolders: data, id, ...rest }];
    }
    return [...acc, { subfolders: data, id, ...rest }, ...flattenFolders(data, openFolders)];
  }, [] as FolderStructureProps[]);
};
