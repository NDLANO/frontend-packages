/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';

export interface Props {
  columns: 2 | 4;
  children?: ReactNode[];
}

const GridContainer = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: auto;
  justify-content: center;
  align-items: center;
  gap: ${spacing.small};
  padding-top: ${spacing.medium};
  ${mq.range({ from: breakpoints.mobileWide })} {
    grid-template-columns: auto auto;
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    &[data-columns='4'] {
      grid-template-columns: auto auto auto auto;
    }
    &[data-columns='2'] {
      grid-template-columns: auto auto;
    }
  }

  p {
    word-break: break-word;
  }
`;

const Grid = ({ columns, children }: Props) => {
  return <GridContainer data-columns={columns}>{children}</GridContainer>;
};

export default Grid;
