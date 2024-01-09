/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import styled from "@emotion/styled";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { colors, fonts, misc, spacing } from "@ndla/core";

const StyledContent = styled(RadixTooltip.Content)`
  color: #fff;
  z-index: 99999;
  border: 0;
  background: ${colors.text.primary};
  border-radius: ${misc.borderRadius};
  padding: ${spacing.xsmall} ${spacing.small};
  font-family: ${fonts.sans};
  ${fonts.sizes("16px", "18px")};
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
}

const Tooltip = ({ children, tooltip, className }: Props) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger data-trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <StyledContent className={className} side={"bottom"} align={"start"} sideOffset={10}>
            {tooltip}
          </StyledContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default Tooltip;
