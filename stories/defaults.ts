/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const customViewports = {
  small: {
    name: "Liten - 390px",
    styles: {
      width: "390px",
      height: "1000px",
    },
    type: "mobile",
  },
  medium: {
    name: "Medium - 760px",
    styles: {
      width: "760px",
      height: "1000px",
    },
    type: "tablet",
  },
  large: {
    name: "Stor - 1440px",
    styles: {
      width: "1440px",
      height: "1000px",
    },
    type: "desktop",
  },
  iphone5: {
    name: "iPhone 5",
    styles: {
      height: "568px",
      width: "320px",
    },
    type: "mobile",
  },
  iphone6: {
    name: "iPhone 6",
    styles: {
      height: "667px",
      width: "375px",
    },
    type: "mobile",
  },
  iphone6p: {
    name: "iPhone 6 Plus",
    styles: {
      height: "736px",
      width: "414px",
    },
    type: "mobile",
  },
  iphone8p: {
    name: "iPhone 8 Plus",
    styles: {
      height: "736px",
      width: "414px",
    },
    type: "mobile",
  },
  iphonex: {
    name: "iPhone X",
    styles: {
      height: "812px",
      width: "375px",
    },
    type: "mobile",
  },
  iphonexr: {
    name: "iPhone XR",
    styles: {
      height: "896px",
      width: "414px",
    },
    type: "mobile",
  },
  iphonexsmax: {
    name: "iPhone XS Max",
    styles: {
      height: "896px",
      width: "414px",
    },
    type: "mobile",
  },
  iphonese2: {
    name: "iPhone SE (2nd generation)",
    styles: {
      height: "667px",
      width: "375px",
    },
    type: "mobile",
  },
  iphone12mini: {
    name: "iPhone 12 mini",
    styles: {
      height: "812px",
      width: "375px",
    },
    type: "mobile",
  },
  iphone12: {
    name: "iPhone 12",
    styles: {
      height: "844px",
      width: "390px",
    },
    type: "mobile",
  },
  iphone12promax: {
    name: "iPhone 12 Pro Max",
    styles: {
      height: "926px",
      width: "428px",
    },
    type: "mobile",
  },
  ipad: {
    name: "iPad",
    styles: {
      height: "1024px",
      width: "768px",
    },
    type: "tablet",
  },
  ipad10p: {
    name: "iPad Pro 10.5-in",
    styles: {
      height: "1112px",
      width: "834px",
    },
    type: "tablet",
  },
  ipad12p: {
    name: "iPad Pro 12.9-in",
    styles: {
      height: "1366px",
      width: "1024px",
    },
    type: "tablet",
  },
  galaxys5: {
    name: "Galaxy S5",
    styles: {
      height: "640px",
      width: "360px",
    },
    type: "mobile",
  },
  galaxys9: {
    name: "Galaxy S9",
    styles: {
      height: "740px",
      width: "360px",
    },
    type: "mobile",
  },
  nexus5x: {
    name: "Nexus 5X",
    styles: {
      height: "660px",
      width: "412px",
    },
    type: "mobile",
  },
  nexus6p: {
    name: "Nexus 6P",
    styles: {
      height: "732px",
      width: "412px",
    },
    type: "mobile",
  },
  pixel: {
    name: "Pixel",
    styles: {
      height: "960px",
      width: "540px",
    },
    type: "mobile",
  },
  pixelxl: {
    name: "Pixel XL",
    styles: {
      height: "1280px",
      width: "720px",
    },
    type: "mobile",
  },
};

export const defaultParameters = {
  viewMode: "docs",
  layout: "padded",
  docs: {
    page: undefined,
  },
  viewport: {
    viewports: customViewports,
  },
  previewTabs: {
    "storybook/docs/panel": { hidden: false },
  },
};
