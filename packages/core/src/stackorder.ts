/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type StackOrderNames = {
  [key: string]: number;
};

const stackOrder: StackOrderNames = {
  bottom: 0,
  lower: 10,
  lowerMiddle: 20,
  upperMiddle: 30,
  upper: 40,
  top: 50,
};

export default stackOrder;
