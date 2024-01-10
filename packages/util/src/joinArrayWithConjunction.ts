/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

type OptionsProps = {
  separator?: string;
  conjunction?: string;
};
const joinArrayWithConjunction = (list: string[], { separator = ", ", conjunction = "og" }: OptionsProps) => {
  if (list.length === 1) {
    return list[0];
  }
  return list.reduce(
    (currentValue, listElement, i, array) =>
      currentValue + (i < array.length - 1 ? separator : conjunction) + listElement,
  );
};

export default joinArrayWithConjunction;
