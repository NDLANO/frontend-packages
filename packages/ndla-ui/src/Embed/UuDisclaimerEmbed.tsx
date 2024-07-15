/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { InformationOutline } from "@ndla/icons/common";
import { MessageBox } from "@ndla/primitives";
import { SafeLink } from "@ndla/safelink";
import { styled } from "@ndla/styled-system/jsx";
import { UuDisclaimerMetaData } from "@ndla/types-embed";

interface Props {
  embed: UuDisclaimerMetaData;
  children?: ReactNode;
}

const StyledMessageBox = styled(MessageBox, {
  base: {
    display: "flex",
    alignItems: "center",
  },
});
const Disclaimer = styled("div", {
  base: {
    textStyle: "body.medium",
  },
});

const UuDisclaimerEmbed = ({ embed, children }: Props) => {
  const { t } = useTranslation();

  if (embed.status === "error") {
    return null;
  }

  const { embedData, data } = embed;

  const disclaimerLink = data?.disclaimerLink ? (
    <>
      {` ${t("uuDisclaimer.alternative")} `}
      <SafeLink to={data.disclaimerLink.href} target="_blank" rel="noopener noreferrer">
        {data.disclaimerLink.text}
      </SafeLink>
    </>
  ) : null;

  return (
    <div role="region">
      <StyledMessageBox variant="warning" contentEditable={false}>
        <InformationOutline />
        <Disclaimer>
          {embedData.disclaimer}
          {disclaimerLink}
        </Disclaimer>
      </StyledMessageBox>
      {children}
    </div>
  );
};

export default UuDisclaimerEmbed;
