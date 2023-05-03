/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { Content } from '@radix-ui/react-accordion';
import { HTMLAttributes, ReactNode } from 'react';

const slideDown = keyframes`
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
`;
const slideUp = keyframes`
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
`;

const AnimationWrapper = styled(Content)`
  overflow: hidden;

  &[data-state='open'] {
    animation: ${slideDown} 300ms ease-out;
  }
  &[data-state='closed'] {
    animation: ${slideUp} 300ms ease-out;
  }

  &[data-disable-animate='true'] {
    animation: none;
  }
`;

const StyledContent = styled.div`
  padding: ${spacing.xsmall} ${spacing.small};
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  disableAnimation?: boolean;
  children: ReactNode;
  forceMount?: boolean;
}

const AccordionContent = ({ disableAnimation, children, ...rest }: Props) => {
  return (
    <AnimationWrapper data-disable-animate={disableAnimation}>
      <StyledContent {...rest}>{children}</StyledContent>
    </AnimationWrapper>
  );
};

export default AccordionContent;
