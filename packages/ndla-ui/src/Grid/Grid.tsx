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
  border?: 'none' | 'lightBlue';
  background?: 'transparent' | 'white';
  children?: ReactNode[];
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  grid-gap: ${spacing.large};
  border-radius: ${misc.borderRadius};

  &[data-border='lightBlue'] {
    border: 1px solid ${colors.brand.light};
    padding: ${spacing.medium};
  }

  &[data-background='white'] {
    background-color: ${colors.white};
  }

  &[data-columns='2'] {
    grid-template-columns: repeat(2, 1fr);

    ${mq.range({ from: breakpoints.mobileWide })} {
      grid-template-columns: 1fr;
    }
  }

  ${mq.range({ from: breakpoints.mobileWide, until: breakpoints.desktop })} {
    > div:nth-child(3):last-child {
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      grid-column: span 2;
    }
  }

  ${mq.range({ from: breakpoints.tablet })} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${mq.range({ from: breakpoints.desktop })} {
    &[data-columns='4'] {
      grid-template-columns: repeat(4, 1fr);
    }

    &[data-columns='3'] {
      grid-template-columns: repeat(3, 1fr);
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

const OuterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Grid = ({ border, children, background, columns }: GridProps) => {
  return (
    <OuterContainer>
      <GridContainer data-border={border} data-columns={children?.length ?? columns} data-background={background}>
        {children}
      </GridContainer>
    </OuterContainer>
  );
};

export default Grid;
