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
import { mq, spacing, grid, breakpoints } from '@ndla/core';

type Props = {
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  reverse?: boolean | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full'
};

const sizes = [
  'xxl',
  'xl',
  'lg',
  'md',
  'sm',
  'xs',
  'xxs',
];

type keyProps = 'ultraWide' | 'wide' | 'desktop' | 'tabletWide' | 'tablet' | 'mobileWide' | 'mobile';

const getKey = (size?: string): keyProps => {
  if (size === 'xxl') {
    return 'ultraWide';
  } else if (size === 'xl') {
    return 'wide';
  } else if (size === 'lg') {
    return 'desktop';
  } else if (size === 'md') {
    return 'tabletWide';
  } else if (size === 'sm') {
    return 'tablet';
  } else if (size === 'xs') {
    return 'mobileWide';
  } else if (size === 'xxs') {
    return 'mobile';
  }
  return 'desktop';
};

const StyledGrid = styled.div<Props>`
  display: flex;
  align-item: center;
  flex-direction: column;
  width: calc(100% - ${spacing.large});
  max-width: ${props => props.size === 'full' ? '100%' : grid[getKey(props.size)]};
  margin: 0 auto;
  ${props => {
    if (typeof props.reverse === 'boolean') {
      return 'flex-direction: column-reverse;';
    } else if (typeof props.reverse === 'string') {
      return css`
        ${mq.range({ from: breakpoints[getKey(props.reverse)] })} {
          flex-direction: column-reverse;
        }
      `;
    }
  }}
`;

const Grid: React.FunctionComponent<Props> = ({
  size, reverse, children
}) => (
  <StyledGrid size={size || 'lg'} reverse={reverse}>
    {children}
  </StyledGrid>
);

export default Grid;
