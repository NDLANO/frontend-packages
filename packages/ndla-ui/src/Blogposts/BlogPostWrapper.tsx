/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';

const StyledGrid = styled.section`
  display: flex;
  justify-content: space-between;
  > * {
    width: calc(50% - ${spacing.small});
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
