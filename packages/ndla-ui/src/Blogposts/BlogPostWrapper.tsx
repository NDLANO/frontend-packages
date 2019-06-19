/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';

const StyledGrid = styled.section`
  background: red;
`;

interface Props {
  children: React.ReactNode[];
}

export const BlogPostWrapper: React.FunctionComponent<Props> = ({
  children,
}) => (
  <StyledGrid>
    {children}
  </StyledGrid>
);

export default BlogPostWrapper;
