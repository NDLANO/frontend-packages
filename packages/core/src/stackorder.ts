/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

type StackOrderNames = {
  hide: number;
  base: number;
  offsetSingle: number;
  offsetDouble: number;
  trigger: number;
  dropdown: number;
  banner: number;
  modal: number;
  drawer: number;
  popover: number;
  toast: number;
  tooltip: number;
};

const stackOrder: StackOrderNames = {
  hide: -1,
  base: 0,
  offsetSingle: 1,
  offsetDouble: 2,
  trigger: 10,
  banner: 100,
  dropdown: 200,
  drawer: 300,
  modal: 400,
  popover: 500,
  toast: 600,
  tooltip: 700,
};

export default stackOrder;
