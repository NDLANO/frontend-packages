/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { fonts, colors, spacing, mq, breakpoints } from '@ndla/core';

type Props = {
  fluid?: boolean;
  size?: 'full' | 'lg' | 'md';
};

const cssFull = css`
  width: 100%;
`;

const StyledGrid = styled.div<Props>`
  display: flex;
  align-item: center;
  flex-direction: column;
  ${props => !props.size || props.size === 'full' && cssFull}
  padding: 0 ${spacing.medium};
  max-width: ${breakpoints.desktop};
  margin: 0 auto;
`;

const Grid: React.FunctionComponent<Props> = ({
  fluid, children
}) => (
  <StyledGrid fluid={fluid}>
    {children}
  </StyledGrid>
);

export default Grid;
