/**
 * Copyright (c) 2017-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

 export const getSrcSets = imageUrl =>
   [
     `${imageUrl}?width=1440 1440w`,
     `${imageUrl}?width=1120 1120w`,
     `${imageUrl}?width=1000 1000w`,
     `${imageUrl}?width=960 960w`,
     `${imageUrl}?width=800 800w`,
     `${imageUrl}?width=640 640w`,
     `${imageUrl}?width=480 480w`,
     `${imageUrl}?width=320 320w`,
     `${imageUrl}?width=320 320w`,
   ].join(', ');
