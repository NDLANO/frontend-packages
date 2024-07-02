/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css } from "@emotion/react";
import { breakpoints, colors, misc, mq } from "@ndla/core";

export const figureActionIndicatorStyle = css`
  all: unset;
  cursor: pointer;
  position: absolute;
  padding: 0;
  bottom: 8px;
  right: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-out;
  // The 65 is added to alter the opacity.
  background-color: ${colors.background.default}65;
  border-radius: ${misc.borderRadiusLarge};
  border: 0;
  svg {
    transition: transform 0.4s ease-out;
    width: 18px;
    height: 18px;
    fill: ${colors.brand.primary};
    color: ${colors.brand.primary};
  }
  svg[data-expanded="true"] {
    transform: rotate(-45deg);
  }
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;
