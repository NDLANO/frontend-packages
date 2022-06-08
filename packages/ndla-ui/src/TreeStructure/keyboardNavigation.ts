import { FolderStructureProps, SetOpenFolderProp, SetKeyNavigationId } from './TreeStructure.types';
import { MAX_LEVEL_FOR_FOLDERS } from './TreeStructure';

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

  // We are navigating in the tree.
  // We need to find the next folder in the tree
  const elementWithkeyFocus: {
    paths: number[];
    index: number;
    data?: FolderStructureProps[];
    parent?: FolderStructureProps[];
    parentId?: string;
    isOpen?: boolean;
    url?: string;
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
        elementWithkeyFocus.url = parent.find(({ id }) => id === dataId)?.url;
        return true;
      }
      return childData ? getPaths(childData, [...paths, _index], [...childData], dataId) : false;
    });
  const locatedPosition = getPaths(data, [], data);
  const direction = e.key === 'ArrowUp' ? -1 : 1;
  if (!locatedPosition) {
    // Could find its location in the tree.
    // This should not happen, reset its value to root.
    setKeyNavigationId(!editable || direction === 1 ? { id: data[0].id } : undefined);
    return;
  }
  // on up or down key press we want to move focus to the next folder
  if (e.key === 'ArrowRight') {
    if ((editable || elementWithkeyFocus.data?.length) && id && !elementWithkeyFocus.url && elementWithkeyFocus.paths.length < MAX_LEVEL_FOR_FOLDERS - 1) {
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
  
  e.preventDefault();
  e.stopPropagation();

  if (!id && direction === 1) {
    setKeyNavigationId({ id: data[0].id, isFolder: false });
    return;
  }
  if (!id) {
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

  // Traverse upwards, incase parent is last element of its parent..
  const traverseUpwards = (inital: FolderStructureProps[]) => {
    // elementWithkeyFocus.paths.pop();
    let findParent = inital;
    const parentNextIds: (string | false)[] = [];
    elementWithkeyFocus.paths.forEach((index) => {
      const nextParent = findParent[index + 1];
      parentNextIds.push(nextParent?.id || false);
      findParent = findParent[index].data as FolderStructureProps[];
    });
    // We use a reversed version of parentNextIds, filtered out falses, to find the next element
    // No newId? We are at the end of the tree so we wont update.
    const newId = parentNextIds.reverse().filter(id => id)[0];
    if (newId) {
      setKeyNavigationId({ id: newId });
    }
  };

  traverseUpwards(data);
  return;
};

export default keyboardNavigation;
