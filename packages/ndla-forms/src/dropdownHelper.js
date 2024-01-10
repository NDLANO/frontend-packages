/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const checkIfItemIsSelected = (item, selectedItem, selectedItems, multiSelect, idField) => {
  if (idField) {
    if (multiSelect) {
      return !!selectedItems.find((selectedItem) => selectedItem[idField] === item[idField]);
    }
    if (selectedItem) {
      return selectedItem[idField] === item[idField];
    }
  } else {
    if (multiSelect) {
      return selectedItems.includes(item);
    }
    if (typeof selectedItem === "string") {
      return selectedItem === item;
    }
  }
  return false;
};

export const getFieldValue = (value, field = undefined) => {
  if (!field) {
    return value;
  }
  return value && value[field] ? value[field] : "";
};
