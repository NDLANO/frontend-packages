/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import colors from "./colors";
import spacing from "./spacing";

const utils = {
  restoreOutline: `
    outline: 1px dotted #212121;
    outline: -webkit-focus-ring-color auto 5px;
`,
  visuallyHidden: `
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip: rect(0, 0, 0, 0);
  position: absolute;
`,
  scrollbar: `
  ::-webkit-scrollbar {
    width: ${spacing.small};
  }
  ::-webkit-scrollbar-thumb {
    border: 4px solid transparent;
    border-radius: 14px;
    background-clip: padding-box;
    padding: 0 4px;
    background-color: ${colors.brand.neutral7};
  }
  `,
  labelHidden: `
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  `,
};

export default utils;
