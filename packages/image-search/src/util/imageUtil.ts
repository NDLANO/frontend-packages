/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* - Source sets for gallery search is retina-display optimized
   - Based on: https://www.smashingmagazine.com/2014/05/responsive-images-done-right-guide-picture-srcset/ */

export const getSrcSets = (imageUrl: string) =>
  [
    `${imageUrl}?width=1440 1440w`,
    `${imageUrl}?width=1120 1120w`,
    `${imageUrl}?width=1000 1000w`,
    `${imageUrl}?width=960 960w`,
    `${imageUrl}?width=800 800w`,
    `${imageUrl}?width=640 640w`,
    `${imageUrl}?width=480 480w`,
    `${imageUrl}?width=320 320w`,
  ].join(", ");

export const getPreviewSrcSets = (imageUrl: string) =>
  [`${imageUrl}?width=480 3x`, `${imageUrl}?width=320 2x`, `${imageUrl}?width=160 1x`].join(", ");
