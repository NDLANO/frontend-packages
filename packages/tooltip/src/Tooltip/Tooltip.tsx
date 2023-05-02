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
import * as RadixTooltip from '@radix-ui/react-tooltip';

const StyledContent = styled(RadixTooltip.Content)`
  color: #fff;
  z-index: 99999;
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
  max-width: calc(100vw - ${spacing.normal});
`;

interface Props {
  children?: ReactNode;
  tooltip: ReactNode;
  className?: string;
  /** outerHTML of Trigger. Only used when hydrating tooltips */
  hydrateHTML?: string;
}

const CoreTooltip = ({ children, tooltip, className, hydrateHTML }: Props) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger data-trigger asChild>
          {hydrateHTML ? parse(hydrateHTML) : children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <StyledContent className={className} side={'bottom'} align={'start'} sideOffset={10}>
            {tooltip}
          </StyledContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

const Tooltip = ({ children, tooltip, className, hydrateHTML }: Props) => {
  const tooltipString = typeof tooltip === 'string' ? tooltip : undefined;

  if (hydrateHTML) {
    return (
      <CoreTooltip className={className} hydrateHTML={hydrateHTML} tooltip={tooltip}>
        {children}
      </CoreTooltip>
    );
  }

  return (
    <div data-tooltip-container data-tooltip={tooltipString}>
      <CoreTooltip className={className} tooltip={tooltip}>
        {children}
      </CoreTooltip>
    </div>
  );
};

export default Tooltip;
