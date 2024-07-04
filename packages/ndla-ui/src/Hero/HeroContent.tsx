/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { breakpoints, mq, spacing, stackOrder } from "@ndla/core";

export const HeroContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  padding: ${spacing.small} 0 ${spacing.small};
  z-index: ${stackOrder.trigger};

  ${mq.range({ from: breakpoints.tablet })} {
    min-height: 90px;
    padding-bottom: ${spacing.xxsmall};

    &[data-image="true"] {
      min-height: 190px;
      @media (min-height: 720px) {
        min-height: 240px;
      }
      @media (min-height: 1020px) {
        min-height: 290px;
      }
    }
  }
`;
