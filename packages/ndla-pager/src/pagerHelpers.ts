/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export function getRange(current: number, last: number): number[] {
  let r1 = current - 2;
  let r2 = current + 2;

  if (r1 < 1) {
    r2 -= r1 - 1;
  }

  if (r2 > last) {
    r1 -= r2 - last;
  }

  return [Math.max(r1, 1), Math.min(r2, last)];
}

export function stepNumbers(currentStep: number, lastStep: number): number[] {
  const [llim, rlim] = getRange(currentStep, lastStep);

  const offset = llim;
  const length = rlim - llim + 1;

  const indexToStep = (i: number) => i + offset;
  return Array(length)
    .fill(0)
    .map((_, i) => indexToStep(i));
}
