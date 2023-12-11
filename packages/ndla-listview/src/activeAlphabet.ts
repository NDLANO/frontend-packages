/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ListItemType } from './ListView';

const activeAlphabet = (items: ListItemType[]) => {
  const letters: Record<string, boolean> = {};
  'abcdefghijklmnopqrstuvxyzæøå'.split('').forEach((letter) => {
    letters[letter] = false;
  });
  items.forEach((item) => {
    letters[item.name.charAt(0).toLowerCase()] = true;
  });
  return letters;
};

export { activeAlphabet as default };
