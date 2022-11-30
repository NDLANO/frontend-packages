/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { AccordionContentProps, Content } from '@radix-ui/react-accordion';
import { ReactNode } from 'react';

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

interface AnimationProps {
  animate: boolean;
}

const AnimationWrapper = styled(Content)<AnimationProps>`
  overflow: hidden;
  ${({ animate }) =>
    animate &&
    css`
      &[data-state='open'] {
        animation: ${slideDown} 300ms ease-out;
      }
      &[data-state='closed'] {
        animation: ${slideUp} 300ms ease-out;
      }
    `}
`;

const ContentMargin = styled.div`
  padding: ${spacing.xsmall} ${spacing.small};
`;

interface Props {
  disableAnimation?: boolean;
  className: string;
  children: ReactNode;
}

const AccordionContent = ({ className, disableAnimation, children }: Props) => {
  return (
    <AnimationWrapper animate={!disableAnimation}>
      <ContentMargin className={className}>{children}</ContentMargin>
    </AnimationWrapper>
  );
};

export default AccordionContent;
