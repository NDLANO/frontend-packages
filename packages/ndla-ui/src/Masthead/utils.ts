/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const getMastheadHeight = (): number | undefined => {
  const masthead = document.getElementById('masthead');
  return masthead?.getBoundingClientRect().height;
};
