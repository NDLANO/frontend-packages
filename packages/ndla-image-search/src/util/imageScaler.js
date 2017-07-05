/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export function scaleImage(imageUrl) {
  const newImageWidth = window.innerWidth > 400
    ? window.innerWidth / 4
    : window.innerWidth;
  return `${imageUrl}?width=${newImageWidth}`;
}
