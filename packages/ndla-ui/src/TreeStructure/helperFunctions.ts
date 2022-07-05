import { FolderStructureProps } from './TreeStructure.types';

export const getPathOfFolder = (data: FolderStructureProps[], findId: string): string[] => {
  const paths = (dataChildren: FolderStructureProps[], path: string[]): string[] => {
    for (const { id, data: dataChildrenSub } of dataChildren) {
      if (id === findId) {
        return [...path, id];
      } else if (dataChildrenSub?.length) {
        return paths(dataChildrenSub, [...path, id]);
      }
    }
    return [];
  };
  return paths(data, []);
};

export const getIdPathsOfFolder = (data: FolderStructureProps[], findId: string): number[] => {
  let currentPath: number[] = [];
  const paths = (dataChildren: FolderStructureProps[], path: number[]) => {
    dataChildren.forEach(({ id, data: dataChildrenSub }, _index) => {
      if (id === findId) {
        currentPath = [...path, _index];
      } else if (dataChildrenSub?.length) {
        paths(dataChildrenSub, [...path, _index]);
      }
    });
  };
  paths(data, []);
  return currentPath;
};

export const getFolderName = (data: FolderStructureProps[], findId: string | undefined): string | undefined => {
  if (!findId) {
    return undefined;
  }
  let folderName: string | undefined;
  const paths = (dataChildren: FolderStructureProps[]) => {
    dataChildren.some(({ id, name, data: dataChildrenSub }, _index) => {
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
export const flattenFolders = (folders: FolderStructureProps[], openFolders?: string[]): string[] => {
  return folders.reduce((acc, { data, id }) => {
    if (openFolders && !openFolders?.includes(id)) {
      return [...acc, id];
    }
    if (!data) {
      return [...acc, id];
    }
    return [...acc, id, ...flattenFolders(data, openFolders)];
  }, [] as string[]);
};
