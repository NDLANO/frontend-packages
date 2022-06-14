import { FolderStructureProps } from './TreeStructure.types';

const getDefaultOpenFolders = (data: FolderStructureProps[], getAll?: boolean): string[] => {
  const openFolders: string[] = [];
  const getOpen = (children: FolderStructureProps[], collectAll?: boolean) => {
    children.forEach((folder: FolderStructureProps) => {
      if (folder.openAsDefault || collectAll) {
        openFolders.push(folder.id);
      }
      if (folder.data && folder.data?.length > 0) {
        getOpen(folder.data, collectAll);
      }
    });
  };
  getOpen(data, getAll);
  return openFolders;
};

const getPathOfFolder = (data: FolderStructureProps[], findId: string): string[] => {
  let currentPath: string[] = [];
  const paths = (dataChildren: FolderStructureProps[], path: string[]) => {
    dataChildren.forEach(({ id, data: dataChildrenSub }) => {
      if (id === findId) {
        currentPath = [...path, id];
      } else if (dataChildrenSub?.length) {
        paths(dataChildrenSub, [...path, id]);
      }
    });
  };
  paths(data, []);
  return currentPath;
};

const getIdPathsOfFolder = (data: FolderStructureProps[], findId: string): number[] => {
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

const getFolderName = (data: FolderStructureProps[], findId: string | undefined): string | undefined => {
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
    });
  };
  paths(data);
  return folderName;
};

export { getPathOfFolder, getDefaultOpenFolders, getIdPathsOfFolder, getFolderName };
