/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import parse from 'html-react-parser';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { Content, Root, Trigger } from '@radix-ui/react-popover';

const StyledContent = styled(Content)`
  color: ${colors.white};
  border: 0;
  background: ${colors.text.primary};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes('16px', '18px')};
  line-height: 1.2;
  font-weight: ${fonts.weight.normal};
  text-align: center;
  white-space: normal;
  max-width: calc(100vw - #{${spacing.normal}});
`;

interface Props {
  children?: ReactNode;
  popover: ReactNode;
  className?: string;
  /** outerHTML of Trigger. Only used when hydrating tooltips */
  hydrateHTML?: string;
}

const CorePopover = ({ children, popover, className, hydrateHTML }: Props) => {
  return (
    <Root>
      <Trigger data-trigger asChild>
        {hydrateHTML ? parse(hydrateHTML) : children}
      </Trigger>
      <StyledContent className={className} side={'bottom'} align={'start'} sideOffset={10}>
        {popover}
      </StyledContent>
    </Root>
  );
};

const Popover = ({ children, popover, className, hydrateHTML }: Props) => {
  const popoverString = typeof popover === 'string' ? popover : undefined;

  if (hydrateHTML) {
    return (
      <CorePopover className={className} hydrateHTML={hydrateHTML} popover={popover}>
        {children}
      </CorePopover>
    );
  }

  return (
    <div data-popover-container data-popover={popoverString}>
      <CorePopover className={className} popover={popover}>
        {children}
      </CorePopover>
    </div>
  );
};

export default Popover;
