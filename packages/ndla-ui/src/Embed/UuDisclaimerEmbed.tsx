/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useRef, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Portal } from "@ark-ui/react";
import { AccessibilityFill, ErrorWarningFill } from "@ndla/icons";
import { Button, IconButton, PopoverContent, PopoverRoot, PopoverTrigger } from "@ndla/primitives";
import { styled } from "@ndla/styled-system/jsx";
import { visuallyHidden } from "@ndla/styled-system/patterns";
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

const StyledErrorWarningFill = styled(ErrorWarningFill, {
  base: {
    alignSelf: "flex-end",
    fill: "icon.subtle",
  },
});

const StyledPopoverContent = styled(PopoverContent, {
  base: {
    display: "flex",
    flexDirection: "column",
    gap: "xsmall",
    width: "surface.xlarge",
    maxHeight: "50vh",
    overflowY: "auto",
  },
});

const HiddenButton = styled(Button, {
  base: {
    "&:not(:focus)": {
      position: "absolute",
      width: "1px",
      height: "1px",
      padding: "0",
      margin: "-1px",
      overflow: "hidden",
      clip: "rect(0,0,0,0)",
      whiteSpace: "nowrap",
      borderWidth: "0",
    },
  },
});

const UuDisclaimerEmbed = ({ embed, transformedDisclaimer, children }: Props) => {
  const { t } = useTranslation();
  const skipRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  if (embed.status === "error") {
    return (
      <DisclaimerWrapper>
        <StyledErrorWarningFill
          aria-label={t("embed.embedError", { type: t("embed.type.disclaimer") })}
          title={t("embed.embedError", { type: t("embed.type.disclaimer") })}
        />
        {children}
      </DisclaimerWrapper>
    );
  }

  return (
    <DisclaimerWrapper role="region" data-embed-type="uu-disclaimer">
      <PopoverRoot initialFocusEl={() => contentRef.current}>
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
          <StyledPopoverContent ref={contentRef}>
            <div>{transformedDisclaimer}</div>
            {embed.embedData.skipContent === "true" && (
              <HiddenButton onClick={() => skipRef.current?.focus()}>{t("uuDisclaimer.skipContent")}</HiddenButton>
            )}
          </StyledPopoverContent>
        </Portal>
      </PopoverRoot>
      <div data-uu-content="">{children}</div>
      <div className={visuallyHidden()} tabIndex={-1} ref={skipRef}>
        {t("uuDisclaimer.contentCompleted")}
      </div>
    </DisclaimerWrapper>
  );
};

export default UuDisclaimerEmbed;
