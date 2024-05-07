/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { breakpoints, colors, mq, spacing, stackOrder } from "@ndla/core";

export const FooterBlock = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.large};
  color: ${colors.white};
  z-index: ${stackOrder.offsetSingle};
  padding: ${spacing.large} ${spacing.large} ${spacing.xlarge};
  background: ${colors.brand.dark};
  ${mq.range({ from: breakpoints.wide })} {
    padding: ${spacing.large} 170px ${spacing.xlarge};
  }
  > * {
    max-width: 1100px;
  }
`;

export default FooterBlock;
