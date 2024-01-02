/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { breakpoints, colors, fonts, mq, spacing } from "@ndla/core";

export const ListItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  ${fonts.sizes("22px", "32px")};
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
  }
`;

export const GoalItem = styled.li`
  margin: ${spacing.medium} 0;
  border-bottom: 1px solid ${colors.brand.neutral7};
`;

export const GoalsHeading = styled.h3`
  margin-top: 0;
`;

export const GoalList = styled.ul`
  padding: 0;
`;

export const GoalText = styled.p`
  margin: 0;
`;
