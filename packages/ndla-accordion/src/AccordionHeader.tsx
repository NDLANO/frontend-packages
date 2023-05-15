/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, fonts, spacing } from '@ndla/core';
import { ChevronDown } from '@ndla/icons/common';
import { HeadingLevel } from '@ndla/ui';
import { Header, Trigger } from '@radix-ui/react-accordion';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';

const StyledHeader = styled(Header)`
  display: flex;
  margin: 0;
`;

const StyledTrigger = styled(Trigger)`
  display: flex;
  background-color: transparent;
  flex: 1;
  padding: ${spacing.normal};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: none;
  color: ${colors.brand.primary};
  font-weight: ${fonts.weight.semibold};
  transition: all 200ms ease-in-out;
  &[data-state='open'] {
    background-color: ${colors.brand.lighter};
    border-bottom: 1px solid ${colors.brand.primary};
  }
  &:hover,
  &:focus-visible {
    text-decoration: underline;
    text-underline-offset: ${spacing.xxsmall};
  }
  &:focus-visible {
    outline: 2px solid ${colors.brand.primary};
  }
`;

const StyledChevron = styled(ChevronDown)`
  color: ${colors.brand.primary};
  transition: all 200ms ease-in-out;
  ${StyledTrigger}[data-state='open'] > & {
    transform: rotate(180deg);
  }
  width: 24px;
  height: 24px;
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  indicator?: ReactNode;
  headerCSS?: SerializedStyles;
  headingLevel?: HeadingLevel;
}

const AccordionHeader = forwardRef<HTMLButtonElement, Props>(
  ({ indicator, headingLevel: Heading = 'h3', headerCSS, children, ...rest }, ref) => {
    return (
      <StyledHeader css={headerCSS} asChild>
        <Heading>
          <StyledTrigger ref={ref} {...rest}>
            {children}
            {indicator ?? <StyledChevron />}
          </StyledTrigger>
        </Heading>
      </StyledHeader>
    );
  },
);

export default AccordionHeader;
