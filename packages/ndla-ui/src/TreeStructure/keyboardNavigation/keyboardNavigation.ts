/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FolderStructureProps, SetKeyNavigationId } from '../TreeStructure.types';
import { KeyboardNavigationProps, ElementWithKeyFocusProps } from './keyboardNavigation.types';
import { MAX_LEVEL_FOR_FOLDERS } from '../TreeStructure';

export const KEYBOARD_KEYS_OF_INTEREST = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'];

// Traverse upwards, incase parent is last element of its parent..
const traverseUpwards = (
  inital: FolderStructureProps[],
  setKeyNavigationId: SetKeyNavigationId,
  paths: number[],
  index: number,
) => {
  let findParent = inital;
  const parentNextIds: (string | false)[] = [];
  paths.forEach((pathIndex) => {
    const nextParent = findParent[pathIndex + 1];
    parentNextIds.push(nextParent?.id || false);
    findParent = findParent[pathIndex].data as FolderStructureProps[];
  });
  if (!parentNextIds.length) {
    parentNextIds.push(findParent[index + 1]?.id || false);
  }
  // We use a reversed version of parentNextIds, filtered out falses, to find the next element
  // No newId? We are at the end of the tree so we wont update.
  const newId = parentNextIds.reverse().filter((id) => id)[0];
  if (newId) {
    setKeyNavigationId({ id: newId });
  }
};

const keyboardNavigation = ({
  e,
  data,
  onToggleOpen,
  setKeyNavigationId,
  keyNavigationId,
  openFolders,
}: KeyboardNavigationProps): string | undefined => {
  const { id } = keyNavigationId || {};

  // We are navigating in the tree.
  // We need to find the next folder in the tree
  const elementWithKeyFocus: ElementWithKeyFocusProps = {
    paths: [],
    index: 0,
  };

  const updatePathToElementWithKeyFocus = (
    data: FolderStructureProps[],
    paths: number[],
    parent: FolderStructureProps[],
    parentId?: string,
  ): boolean =>
    data.some(({ data: childData, id: dataId }, _index) => {
      if (dataId === id) {
        elementWithKeyFocus.paths = paths;
        elementWithKeyFocus.index = _index;
        elementWithKeyFocus.isOpen = openFolders.has(dataId) && childData && childData.length > 0;
        elementWithKeyFocus.data = childData;
        elementWithKeyFocus.parent = parent;
        elementWithKeyFocus.parentId = parentId;
        return true;
      }
      return childData ? updatePathToElementWithKeyFocus(childData, [...paths, _index], [...childData], dataId) : false;
    });
  if (!updatePathToElementWithKeyFocus(data, [], data)) {
    // Could find its location in the tree.
    // This should not happen, reset its value to root.
    setKeyNavigationId(e.key === 'ArrowDown' ? { id: data[0].id } : undefined);
    return;
  }
  e.preventDefault();
  e.stopPropagation();
  const direction = e.key === 'ArrowUp' ? -1 : 1;
  // on up or down key press we want to move focus to the next folder
  if (e.key === 'ArrowRight') {
    if (
      !elementWithKeyFocus.isOpen &&
      elementWithKeyFocus.data?.length &&
      id &&
      elementWithKeyFocus.paths.length < MAX_LEVEL_FOR_FOLDERS - 1
    ) {
      onToggleOpen(id);
    }
    return;
  }
  if (e.key === 'ArrowLeft') {
    if (id && elementWithKeyFocus.isOpen) {
      onToggleOpen(id);
    }
    return;
  }

  if (!id && direction === 1) {
    setKeyNavigationId({ id: data[0].id });
    return;
  }
  if (!id) {
    return;
  }
  // Move up
  if (direction === -1) {
    if (elementWithKeyFocus.index > 0) {
      // Move upwards to the parent folder
      setKeyNavigationId(
        elementWithKeyFocus.parent
          ? {
              id: elementWithKeyFocus.parent[elementWithKeyFocus.index - 1].id,
            }
          : undefined,
      );
    } else if (elementWithKeyFocus.paths.length > 0) {
      elementWithKeyFocus.paths.pop();
      let findParent = data;
      elementWithKeyFocus.paths.forEach((index) => {
        findParent = findParent[index].data as FolderStructureProps[];
      });
      const parentsCurrentIndex = findParent.findIndex(({ id }) => id === elementWithKeyFocus.parentId);
      setKeyNavigationId({
        id: findParent[parentsCurrentIndex].id,
      });
    }
    return;
  }

  if (elementWithKeyFocus.isOpen) {
    if (elementWithKeyFocus.data?.length) {
      setKeyNavigationId({ id: elementWithKeyFocus.data[0].id });
    } else {
      // move to next child of parent if any... need new traverse :-/
      traverseUpwards(data, setKeyNavigationId, elementWithKeyFocus.paths, elementWithKeyFocus.index);
    }
    return;
  }

  if (elementWithKeyFocus.parent && elementWithKeyFocus.index < elementWithKeyFocus.parent?.length - 1) {
    // Move downwards to the next child
    setKeyNavigationId({ id: elementWithKeyFocus.parent[elementWithKeyFocus.index + 1].id });
    return;
  }

  traverseUpwards(data, setKeyNavigationId, elementWithKeyFocus.paths, elementWithKeyFocus.index);
  return;
};

export default keyboardNavigation;
