/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// TODO: Remove this function. We can use the uuid package if we really need it
export function uuid(a?: number): string {
  if (a) {
    return (a ^ ((Math.random() * 16) >> (a / 4))).toString(16);
  }

  // @ts-expect-error - Magic
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, uuid);
}
