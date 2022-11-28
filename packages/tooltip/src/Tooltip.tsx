/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import * as RadixTooltip from '@radix-ui/react-tooltip';

import React, { cloneElement, ReactElement, ReactNode } from 'react';

const StyledContent = styled(RadixTooltip.Content)`
  color: #fff;
  z-index: 99999;
  border: 0;
  background: ${colors.text.primary};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  font-size: 14;
  line-height: 1.2;
  font-weight: ${fonts.weight.normal};
  text-align: center;
  white-space: normal;
  max-width: calc(100vw - #{${spacing.normal}});
`;

interface Props {
  ariaLabel?: string;
  children?: ReactNode;
  tooltip: string;
  className?: string;
  dangerous?: string;
}

const Tooltip = ({ children, tooltip, className, dangerous, ariaLabel }: Props) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          <div
            aria-label={ariaLabel || tooltip}
            data-aria-label={ariaLabel}
            data-tooltip-container
            data-tooltip={tooltip}
            dangerouslySetInnerHTML={dangerous ? { __html: dangerous } : undefined}>
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

export default Tooltip;
