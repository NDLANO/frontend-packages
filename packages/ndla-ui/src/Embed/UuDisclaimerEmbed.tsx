/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { type ReactNode } from "react";
import { InformationLine } from "@ndla/icons";
import { MessageBox } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import type { UuDisclaimerMetaData } from "@ndla/types-embed";

interface Props {
  embed: UuDisclaimerMetaData;
  children?: ReactNode;
}

const StyledMessageBox = styled(MessageBox, {
  base: {
    display: "flex",
    alignItems: "center",
    marginBlockEnd: "xsmall",
  },
});
const Disclaimer = styled("div", {
  base: {
    textStyle: "body.medium",
  },
});
const StyledSafeLink = styled(SafeLink, {
  base: {
    paddingInlineStart: "4xsmall",
    color: "text.link",
    textDecoration: "underline",
    whiteSpace: "nowrap",
    _hover: {
      textDecoration: "none",
    },
    _focusWithin: {
      textDecoration: "none",
    },
  },
});

const Wrapper = styled("div", {
  base: {
    clear: "both",
  },
});

const UuDisclaimerEmbed = ({ embed, children }: Props) => {
  if (embed.status === "error") {
    return null;
  }

  const { embedData, data } = embed;

  const disclaimerLink = data?.disclaimerLink ? (
    <StyledSafeLink to={data.disclaimerLink.href} target="_blank" rel="noopener noreferrer">
      {data.disclaimerLink.text}
    </StyledSafeLink>
  ) : null;

  return (
    <Wrapper role="region" data-embed-type="uu-disclaimer">
      <StyledMessageBox variant="warning" contentEditable={false}>
        <InformationLine />
        <Disclaimer>
          {embedData.disclaimer}
          {disclaimerLink}
        </Disclaimer>
      </StyledMessageBox>
      <div data-uu-content="">{children}</div>
    </Wrapper>
  );
};

export default UuDisclaimerEmbed;
