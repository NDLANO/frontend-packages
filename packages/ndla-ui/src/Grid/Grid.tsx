/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';

interface Props {
  columns: 2 | 4;
  size: 'small' | 'medium' | 'large';
  children?: ReactNode[];
}

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  row-gap: ${spacing.medium};

  &[data-columns='2'] {
    div,
    a {
      flex: 0 1 50%;
    }
  }

  &[data-columns='4'] {
    div,
    a {
      flex: 0 1 50%;
    }
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    &[data-columns='4'] {
      div,
      a {
        flex: 0 1 25%;
      }
    }
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  &[data-size='small'] {
    max-width: 410px;
  }

  &[data-size='medium'] {
    max-width: 560px;
  }

  &[data-size='large'] {
    max-width: 100%;
  }
`;

const Grid = ({ columns, size, children }: Props) => {
  return (
    <GridWrapper data-size={size}>
      <StyledGrid data-columns={columns}>{children}</StyledGrid>
    </GridWrapper>
  );
};

export default Grid;
