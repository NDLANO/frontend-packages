/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type SingleValue = Option | null;
export type MultiValue = readonly Option[];

export type Option = {
  value: string;
  label: string;
};

export type Color = "blue" | "white";

export interface GroupBase<Option> {
  readonly options: readonly Option[];
  readonly label?: string;
}
