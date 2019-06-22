/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';

const StyledGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -${spacing.normal};
  > * {
    display: flex-inline;
    width: calc(50% - ${spacing.xsmall});
    margin-bottom: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    > * {
      width: calc(50% - ${spacing.small});
    }
  }
  ${mq.range({ from: breakpoints.tablet, until: breakpoints.tabletWide })} {
    flex-direction: column;
    > * {
      width: 100%;
    }
  }
`;

interface Props {
  children: React.ReactNode;
}

export const BlogPostWrapper: React.FunctionComponent<Props> = ({
  children,
}) => (
  <StyledGrid>
    {children}
  </StyledGrid>
);

export default BlogPostWrapper;