/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const getClosestEditor = (el: HTMLElement | null): HTMLElement | null => {
  return el?.closest("[data-slate-editor]") as HTMLElement | null;
};
