/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const getCurrentBreakpoint = () => {
  const body = document.querySelector("body");
  if (!body) {
    return "";
  }

  return window.getComputedStyle(body, ":before").getPropertyValue("content").replace(/"/g, "");
};

export default getCurrentBreakpoint;

export const breakpoints = {
  mobile: "mobile",
  tablet: "tablet",
  desktop: "desktop",
  wide: "wide",
};
