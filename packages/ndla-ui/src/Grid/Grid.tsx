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
  border?: boolean;
  children?: ReactNode[];
}

const GridContainer = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
  grid-template-columns: 1fr;

  ${mq.range({ from: breakpoints.mobileWide })} {
    grid-template-columns: 1fr 1fr;
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    &[data-columns='4'] {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    &[data-columns='2'] {
      grid-template-columns: 1fr 1fr;
    }
  }

  &[data-border='true'] {
    border: 1px solid ${colors.brand.light};
    border-radius: 4px;
  }
`;

const Grid = ({ columns, border = false, children }: Props) => {
  return (
    <GridContainer data-border={border} data-columns={columns}>
      {children}
    </GridContainer>
  );
};

export default Grid;
