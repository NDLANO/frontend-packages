/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { mq, breakpoints, colors, spacing } from '@ndla/core';

const StyledContent = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
    border-top: 1px solid ${colors.brand.greyLight};
    margin-top: ${spacing.small};
    padding-top: ${spacing.spacingUnit * 0.75}px;
  }
  .c-article {
    margin-top: 0;
  }
`;

interface Props {
  children: React.ReactNode;
}

export const LearningPathContent: React.FunctionComponent<Props> = ({
  children,
}) => (
  <StyledContent>{children}</StyledContent>
);