/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
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
  max-width: calc(100vw - #{${spacing.normal}});
`;

interface CoreProps {
  children?: ReactNode;
  tooltip: ReactNode;
  className?: string;
  innerHTML?: string;
}

const CoreTooltip = ({ children, tooltip, className, innerHTML }: CoreProps) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div data-inner-html dangerouslySetInnerHTML={innerHTML ? { __html: innerHTML } : undefined}>
            {children}
          </div>
        </RadixTooltip.Trigger>
        <StyledContent className={className} side={'bottom'} align={'start'} sideOffset={10}>
          {tooltip}
        </StyledContent>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

interface Props extends CoreProps {
  hydrate?: boolean;
}

const Tooltip = ({ children, tooltip, className, innerHTML, hydrate }: Props) => {
  const tooltipString = typeof tooltip === 'string' ? tooltip : undefined;

  if (hydrate) {
    return (
      <CoreTooltip className={className} innerHTML={innerHTML} tooltip={tooltip}>
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
