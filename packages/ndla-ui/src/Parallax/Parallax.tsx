/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree. *
 */

import styled from '@emotion/styled';
import { breakpoints, mq, spacing } from '@ndla/core';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode[];
  right?: boolean;
}

const ParallaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing.large};
  margin-bottom: ${spacing.large};
  width: 100%;
  align-items: flex-start;
  h2 {
    display: block;
    width: 100%;
    margin-top: 0;
  }
  > * {
    flex: 1;
  }

  ${mq.range({ from: breakpoints.tablet })} {
    flex-direction: row;
    gap: ${spacing.large};
    &[data-right='true'] {
      flex-direction: row-reverse;
    }
  }
`;

const Parallaxed = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  ${mq.range({ from: breakpoints.tablet })} {
    top: 0px;
    position: sticky;
    padding-bottom: ${spacing.large};
  }
  > * {
    flex: 1;
  }
`;

const Parallax = ({ children, right }: Props) => {
  const [parallaxLeft, parallaxRight] = children;
  return (
    <ParallaxContainer data-right={right}>
      <Parallaxed>{parallaxLeft}</Parallaxed>
      {parallaxRight}
    </ParallaxContainer>
  );
};

export default Parallax;
