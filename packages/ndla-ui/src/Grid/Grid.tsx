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
  columns: '2' | '4' | '2x2';
  border?: 'none' | 'lightBlue';
  background?: 'transparent' | 'white';
  size?: boolean;
  children?: ReactNode[];
}

const GridContainer = styled.div`
  display: grid;
  justify-content: center;
  border-radius: ${misc.borderRadius};
  grid-template-columns: 1fr;
  grid-gap: ${spacing.normal};

  ${mq.range({ until: breakpoints.tabletWide })} {
    &[data-columns='2x2'],
    &[data-columns='3'],
    &[data-columns='4'] {
      padding: ${spacing.normal};
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: ${spacing.medium};

    &[data-columns='3'] {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    &[data-columns='4'] {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &[data-frontpage='true'] {
    grid-gap: ${spacing.large};
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

const Grid = ({ columns, border, children, background, size, ...rest }: GridProps) => {
  const amountOfColumns = children?.length === 3 ? '3' : columns;

  return (
    <OuterContainer>
      <GridContainer
        data-frontpage={size}
        data-border={border}
        data-columns={amountOfColumns}
        data-background={background}
        {...rest}
      >
        {children}
      </GridContainer>
    </OuterContainer>
  );
};

export default Grid;
