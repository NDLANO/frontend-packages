/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { breakpoints, colors, misc, mq, spacing } from '@ndla/core';
import { HTMLAttributes, ReactNode } from 'react';

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  columns: '2' | '4' | '2x2';
  border?: 'none' | 'lightBlue';
  background?: 'transparent' | 'white';
  children?: ReactNode[];
}

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  border-radius: ${misc.borderRadius};
  grid-template-columns: 1fr;

  &[data-columns='2x2'],
  &[data-columns='3'],
  &[data-columns='4'] {
    grid-gap: unset;
    padding: ${spacing.normal};
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.range({ until: breakpoints.desktop })} {
    > div:nth-child(3):last-child {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      grid-column: span 2;
    }
  }

  ${mq.range({ from: breakpoints.tabletWide })} {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-gap: ${spacing.large} !important;
    padding: ${spacing.medium} !important;

    &[data-columns='3'] {
      grid-template-columns: repeat(3, 1fr);
    }

    &[data-columns='4'] {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &[data-border='lightBlue'] {
    border: 1px solid ${colors.brand.light};
  }

  &[data-background='white'] {
    background-color: ${colors.white};
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

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  &[data-columns='2x2'] {
    justify-content: center;
  }
`;

const Grid = ({ border, children, background, columns, ...rest }: GridProps) => {
  const amountOfColumns = children?.length === 3 ? '3' : columns;

  return (
    <OuterContainer {...rest}>
      <GridContainer data-border={border} data-columns={amountOfColumns} data-background={background}>
        {children}
      </GridContainer>
    </OuterContainer>
  );
};

export default Grid;
