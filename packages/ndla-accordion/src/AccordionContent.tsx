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

  &[data-wide='true'] {
    display: flex;
    flex-flow: column;

    justify-content: center;
    align-items: center;
  }
`;

const StyledContent = styled.div`
  padding: ${spacing.normal};
  &[data-wide='true'] {
    width: 1200px !important;
    left: 0 !important;
  }
`;

interface Props extends HTMLAttributes<HTMLDivElement> {
  disableAnimation?: boolean;
  children: ReactNode;
  forceMount?: boolean;
  wide?: boolean;
}

const AccordionContent = ({ disableAnimation, children, wide, ...rest }: Props) => {
  return (
    <AnimationWrapper data-wide={wide} data-disable-animate={disableAnimation}>
      <StyledContent data-wide={wide} {...rest}>
        {children}
      </StyledContent>
    </AnimationWrapper>
  );
};

export default AccordionContent;
