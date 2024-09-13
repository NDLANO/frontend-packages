/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { misc, colors, spacing } from "@ndla/core";

export const Spinner = styled.div`
  border-radius: ${misc.borderRadiusLarge};
  animation: spinnerAnimation 0.7s linear infinite;
  display: block;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: ${colors.brand.primary};
  margin: ${spacing.normal} auto;
  border-width: calc(${spacing.large} / 6.5);
  height: ${spacing.large};
  width: ${spacing.large};
  &[data-size="normal"] {
    border-width: calc(${spacing.normal} / 6.5);
    height: ${spacing.normal};
    width: ${spacing.normal};
  }
  @keyframes spinnerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
