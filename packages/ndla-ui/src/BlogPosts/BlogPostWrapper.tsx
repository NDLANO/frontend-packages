/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';

type StyledGridProps = {
  oneColumn?: boolean;
};
const StyledGrid = styled.div<StyledGridProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: -${spacing.normal};
  > * {
    width: calc(50% - ${spacing.xsmall});
    margin-bottom: ${spacing.normal};
  }
  ${(props) =>
    props.oneColumn &&
    `
    flex-direction: column;
    > * {
      width: 100%;
    }`}
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    > * {
      width: 100%;
    }
  }
`;

interface Props {
  children: ReactNode;
  oneColumn?: boolean;
}

export const BlogPostWrapper = ({ children, oneColumn }: Props) => (
  <StyledGrid oneColumn={oneColumn}>{children}</StyledGrid>
);

export default BlogPostWrapper;
