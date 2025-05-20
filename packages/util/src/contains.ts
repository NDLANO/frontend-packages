/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

type Target = HTMLElement | EventTarget | null | undefined;

export const isHTMLElement = (v: any): v is HTMLElement =>
  typeof v === "object" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === "string";

export const contains = (parent: Target, child: Target): boolean => {
  if (!parent || !child) return false;
  if (!isHTMLElement(parent) || !isHTMLElement(child)) return false;
  return parent === child || parent.contains(child);
};
