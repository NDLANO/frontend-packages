import { FolderStructureProps } from './TreeStructure.types';

export const KEYBOARD_KEYS_OF_INTEREST = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', ' ', 'Enter'];

interface Props {
  e: React.KeyboardEvent<HTMLElement>;
  data: FolderStructureProps[];
  setKeyNavigationId: (id: string | undefined) => void;
  openFolders: Set<string>;
  setOpenFolders: React.Dispatch<React.SetStateAction<Set<string>>>;
  onMarkFolder: (id: string) => void;
  keyNavigationId: string | undefined;
}

const keyboardNavigation = ({
  e,
  data,
  setOpenFolders,
  onMarkFolder,
  setKeyNavigationId,
  keyNavigationId,
  openFolders,
}: Props): string | undefined => {
  // on up or down key press we want to move focus to the next folder
  if (e.key === 'ArrowRight') {
    if (keyNavigationId) {
      setOpenFolders((prev) => {
        prev.add(keyNavigationId);
        return new Set(prev);
      });
    }
    return;
  }
  if (e.key === 'ArrowLeft') {
    if (keyNavigationId) {
      setOpenFolders((prev) => {
        prev.delete(keyNavigationId);
        return new Set(prev);
      });
    }
    return;
  }
  if ((e.key === ' ' || e.key === 'Enter') && keyNavigationId) {
    onMarkFolder(keyNavigationId);
    e.preventDefault();
    e.stopPropagation();
    return;
  }
  if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') {
    return;
  }
  const direction = e.key === 'ArrowUp' ? -1 : 1;
  e.preventDefault();
  e.stopPropagation();
  if (!keyNavigationId && direction) {
    setKeyNavigationId(data[0].id || undefined);
    return;
  }
  if (!keyNavigationId) {
    return;
  }
  // We are navigating in the tree.
  // We need to find the next folder in the tree
  const elementWithkeyFocus: {
    paths: number[];
    index: number;
    data?: FolderStructureProps[];
    parent?: FolderStructureProps[];
    parentId?: string;
    isOpen?: boolean;
  } = {
    paths: [],
    index: 0,
  };
  const getPaths = (
    data: FolderStructureProps[],
    paths: number[],
    parent: FolderStructureProps[],
    parentId?: string,
  ): boolean =>
    data.some(({ data: childData, id }, _index) => {
      if (id === keyNavigationId) {
        elementWithkeyFocus.paths = paths;
        elementWithkeyFocus.index = _index;
        elementWithkeyFocus.isOpen = openFolders.has(id);
        elementWithkeyFocus.data = childData;
        elementWithkeyFocus.parent = parent;
        elementWithkeyFocus.parentId = parentId;
        return true;
      }
      return childData ? getPaths(childData, [...paths, _index], [...childData], id) : false;
    });
  const locatedPosition = getPaths(data, [], data);
  if (!locatedPosition) {
    // Could find its location in the tree.
    // This should not happen, reset its value to root.
    setKeyNavigationId(data[0].id);
    return;
  }
  // Move up
  if (direction === -1) {
    if (elementWithkeyFocus.index > 0) {
      // Move upwards to the parent folder
      setKeyNavigationId(
        elementWithkeyFocus.parent ? elementWithkeyFocus.parent[elementWithkeyFocus.index - 1].id : undefined,
      );
    } else if (elementWithkeyFocus.paths.length > 0) {
      elementWithkeyFocus.paths.pop();
      let findParent = data;
      elementWithkeyFocus.paths.forEach((index) => {
        findParent = findParent[index].data as FolderStructureProps[];
      });
      const parentsCurrentIndex = findParent.findIndex(({ id }) => id === elementWithkeyFocus.parentId);
      setKeyNavigationId(findParent[parentsCurrentIndex].id);
    } else {
      // Move to the root
      setKeyNavigationId(undefined);
    }
    return;
  }

  if (elementWithkeyFocus.isOpen && elementWithkeyFocus.data && elementWithkeyFocus.data.length) {
    // Move to its first child in sub tree
    setKeyNavigationId(elementWithkeyFocus.data[0].id);
    return;
  }
  if (elementWithkeyFocus.parent && elementWithkeyFocus.index < elementWithkeyFocus.parent?.length - 1) {
    // Move downwards to the next child
    setKeyNavigationId(elementWithkeyFocus.parent[elementWithkeyFocus.index + 1].id);
    return;
  }
  elementWithkeyFocus.paths.pop();
  let findParent = data;
  elementWithkeyFocus.paths.forEach((index) => {
    findParent = findParent[index].data as FolderStructureProps[];
  });
  const parentsCurrentIndex = findParent.findIndex(({ id }) => id === elementWithkeyFocus.parentId);
  if (parentsCurrentIndex < findParent.length - 1) {
    setKeyNavigationId(findParent[parentsCurrentIndex + 1].id);
  }
};

export default keyboardNavigation;
