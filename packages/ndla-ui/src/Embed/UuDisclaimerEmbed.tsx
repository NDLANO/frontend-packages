/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Portal } from "@ark-ui/react";
import { AccessibilityFill } from "@ndla/icons";
import { IconButton, PopoverContent, PopoverRoot, PopoverTrigger, PopoverTitle } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import type { UuDisclaimerMetaData } from "@ndla/types-embed";

interface Props {
  embed: UuDisclaimerMetaData;
  transformedDisclaimer: ReactNode;
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

const UuDisclaimerEmbed = ({ embed, transformedDisclaimer, children }: Props) => {
  const { t } = useTranslation();
  if (embed.status === "error") {
    return null;
  }

  return (
    <DisclaimerWrapper role="region" data-embed-type="uu-disclaimer">
      <PopoverRoot>
        <PopoverTrigger asChild>
          <StyledIconButton
            size="small"
            variant="secondary"
            aria-label={t("uuDisclaimer.title")}
            title={t("uuDisclaimer.title")}
          >
            <AccessibilityFill />
          </StyledIconButton>
        </PopoverTrigger>
        <Portal>
          <PopoverContent>
            <PopoverTitle>{t("uuDisclaimer.title")}</PopoverTitle>
            <div>{transformedDisclaimer}</div>
          </PopoverContent>
        </Portal>
      </PopoverRoot>
      <div data-uu-content="">{children}</div>
    </DisclaimerWrapper>
  );
};

export default UuDisclaimerEmbed;
