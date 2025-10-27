/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type Breakpoint = "mobile" | "mobileWide" | "tablet" | "tabletWide" | "desktop" | "wide" | "ultraWide";

export type Breakpoints = { [key in Breakpoint]: string };

export const breakpoints: Breakpoints = {
  mobile: "20em",
  mobileWide: "29.75em",
  tablet: "37.5625em",
  tabletWide: "48em",
  desktop: "61.3125em",
  wide: "81.3125em",
  ultraWide: "100.0625em",
};
