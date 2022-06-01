import type { TreeStructureItem } from './TreeStructure';

export const getOpenedFolders = (structure: TreeStructureItem[]): string[] => {
  const openedFolders: string[] = [];
  const flatten = (structure: TreeStructureItem[]) => {
    structure.forEach(({ id, isOpen, children }) => {
      if (isOpen) {
        openedFolders.push(id);
        if (children) {
          flatten(children);
        }
      }
    });
  };
  flatten(structure);
  return openedFolders;
};
