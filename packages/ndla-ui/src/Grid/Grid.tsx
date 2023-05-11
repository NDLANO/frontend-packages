/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import styled from '@emotion/styled';
import { breakpoints, colors, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';

interface Props {
  columns: '2' | '4';
  children?: ReactNode[];
}

const StyledGrid = styled.div`
  display: flex;
  flex-flow: row wrap;

  left: ${spacing.xxsmall};
  border: 1px solid ${colors.brand.light};
  border-radius: 4px;
  min-width: 10%;
  &[data-columns='2'] {
    > div,
    > a {
      flex: 0 0 49%;
      border-right: 1px solid ${colors.brand.light};
    }
  }

  &[data-columns='4'] {
    > div,
    > a {
      flex: 0 0 49%;
      border-right: 1px solid ${colors.brand.light};
    }
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    &[data-columns='4'] {
      > div,
      > a {
        flex: 0 0 24%;
      }
    }
    &[data-columns='2'] {
      > div,
      > a {
        flex: 0 0 49%;
      }
    }
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Grid = ({ columns, children }: Props) => {
  return (
    <GridWrapper>
      <StyledGrid data-columns={columns}>{children}</StyledGrid>
    </GridWrapper>
  );
};

export default Grid;
