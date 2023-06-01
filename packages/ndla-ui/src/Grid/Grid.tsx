/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';

export interface GridProps {
  columns: 2 | 4;
  border: 'none' | 'lightBlue';
  children?: ReactNode[];
}

const GridContainer = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: auto;
  justify-content: center;
  gap: ${spacing.large};
  padding-top: ${spacing.medium};

  border-radius: ${misc.borderRadius};

  &[data-border='lightBlue'] {
    border: 1px solid ${colors.brand.light};
  }

  ${mq.range({ from: breakpoints.mobileWide })} {
    grid-template-columns: auto auto;
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    &[data-columns='4'] {
      grid-template-columns: repeat(4, auto);
    }
  }

  p {
    word-break: break-word;
  }

  /** The styling here is to handle figures/text until a new figure element is developed */
  figure,
  iframe {
    inset: 0;
    width: 100% !important;
    padding: 0;
  }
`;

const Grid = ({ columns, border, children, ...rest }: GridProps) => {
  return (
    <GridContainer data-border={border} data-columns={columns} {...rest}>
      {children}
    </GridContainer>
  );
};

export default Grid;
