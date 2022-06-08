import { FolderStructureProps, SetOpenFolderProp, SetKeyNavigationId } from './TreeStructure.types';

export const KEYBOARD_KEYS_OF_INTEREST = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];

interface Props {
  e: React.KeyboardEvent<HTMLElement>;
  data: FolderStructureProps[];
  setKeyNavigationId: SetKeyNavigationId;
  openFolders: Set<string>;
  setOpenFolders: SetOpenFolderProp;
  keyNavigationId: { id: string; isFolder?: boolean } | undefined;
  editable?: boolean;
}

const keyboardNavigation = ({
  e,
  data,
  setOpenFolders,
  setKeyNavigationId,
  keyNavigationId,
  openFolders,
  editable,
}: Props): string | undefined => {
  const { id, isFolder } = keyNavigationId || {};
  // on up or down key press we want to move focus to the next folder
  if (e.key === 'ArrowRight') {
    if (id) {
      setOpenFolders((prev) => {
        prev.add(id);
        return new Set(prev);
      });
    }
    return;
  }
  if (e.key === 'ArrowLeft') {
    if (id) {
      setOpenFolders((prev) => {
        prev.delete(id);
        return new Set(prev);
      });
    }
    return;
  }
  const direction = e.key === 'ArrowUp' ? -1 : 1;
  e.preventDefault();
  e.stopPropagation();

  if (!id && direction === 1) {
    setKeyNavigationId({ id: data[0].id, isFolder: false });
    return;
  }
  if (!id) {
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
    data.some(({ data: childData, id: dataId }, _index) => {
      if (dataId === id) {
        elementWithkeyFocus.paths = paths;
        elementWithkeyFocus.index = _index;
        elementWithkeyFocus.isOpen = openFolders.has(dataId);
        elementWithkeyFocus.data = childData;
        elementWithkeyFocus.parent = parent;
        elementWithkeyFocus.parentId = parentId;
        return true;
      }
      return childData ? getPaths(childData, [...paths, _index], [...childData], dataId) : false;
    });
  const locatedPosition = getPaths(data, [], data);
  if (!locatedPosition) {
    // Could find its location in the tree.
    // This should not happen, reset its value to root.
    setKeyNavigationId({ id: data[0].id });
    return;
  }
  // Move up
  if (direction === -1) {
    if (isFolder) {
      setKeyNavigationId({
        id,
      });
    } else if (elementWithkeyFocus.index > 0) {
      // Move upwards to the parent folder
      setKeyNavigationId(
        elementWithkeyFocus.parent
          ? {
              id: elementWithkeyFocus.parent[elementWithkeyFocus.index - 1].id,
            }
          : undefined,
      );
    } else if (elementWithkeyFocus.paths.length > 0) {
      elementWithkeyFocus.paths.pop();
      let findParent = data;
      elementWithkeyFocus.paths.forEach((index) => {
        findParent = findParent[index].data as FolderStructureProps[];
      });
      const parentsCurrentIndex = findParent.findIndex(({ id }) => id === elementWithkeyFocus.parentId);
      setKeyNavigationId({
        id: findParent[parentsCurrentIndex].id,
        isFolder: editable,
      });
    } else if (editable) {
      // Move to the root
      setKeyNavigationId(undefined);
    }
    return;
  }

  if (elementWithkeyFocus.isOpen) {
    // Move to add folder OR its first child in sub tree if isFolder === false or already in isFolder mode
    if (!isFolder && editable) {
      setKeyNavigationId({ id, isFolder: true });
    } else if (elementWithkeyFocus.data?.length) {
      setKeyNavigationId({ id: elementWithkeyFocus.data[0].id });
    }
    return;
  }
  if (elementWithkeyFocus.parent && elementWithkeyFocus.index < elementWithkeyFocus.parent?.length - 1) {
    // Move downwards to the next child
    setKeyNavigationId({ id: elementWithkeyFocus.parent[elementWithkeyFocus.index + 1].id });
    return;
  }
  elementWithkeyFocus.paths.pop();
  let findParent = data;
  elementWithkeyFocus.paths.forEach((index) => {
    findParent = findParent[index].data as FolderStructureProps[];
  });
  const parentsCurrentIndex = findParent.findIndex(({ id }) => id === elementWithkeyFocus.parentId);
  if (parentsCurrentIndex < findParent.length - 1) {
    setKeyNavigationId({ id: findParent[parentsCurrentIndex + 1].id });
  }
};

export default keyboardNavigation;
