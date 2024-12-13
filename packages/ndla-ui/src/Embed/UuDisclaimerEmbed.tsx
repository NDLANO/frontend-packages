/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode } from "react";
import { Portal } from "@ark-ui/react";
import { AccesibilityLine } from "@ndla/icons";
import { Text, IconButton, PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { UuDisclaimerMetaData } from "@ndla/types-embed";

interface Props {
  embed: UuDisclaimerMetaData;
  children?: ReactNode;
}

const DisclaimerWrapper = styled("div", {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "3xsmall",
    clear: "both",
  },
});

const StyledIconButton = styled(IconButton, {
  base: {
    alignSelf: "flex-end",
  },
});

const UuDisclaimerEmbed = ({ embed, children }: Props) => {
  if (embed.status === "error") {
    return null;
  }

  const { embedData } = embed;

  return (
    <DisclaimerWrapper role="region" data-embed-type="uu-disclaimer">
      <PopoverRoot>
        <PopoverTrigger asChild>
          <StyledIconButton size="small" variant="secondary">
            <AccesibilityLine />
          </StyledIconButton>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <Text>{embedData.disclaimer}</Text>
          </PopoverContent>
        </Portal>
      </PopoverRoot>
      <div data-uu-content="">{children}</div>
    </DisclaimerWrapper>
  );
};

export default UuDisclaimerEmbed;
