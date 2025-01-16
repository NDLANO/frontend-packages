/**
 * Copyright (c) 2025-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export const marks = {
  strong: "bold",
  code: "code",
  em: "italic",
  u: "underlined",
  sup: "sup",
  sub: "sub",
} as const;

export type MarkType = keyof typeof marks;

export interface CustomText {
  text: string;
  bold?: boolean;
  code?: boolean;
  italic?: boolean;
  underlined?: boolean;
  sup?: boolean;
  sub?: boolean;
}
