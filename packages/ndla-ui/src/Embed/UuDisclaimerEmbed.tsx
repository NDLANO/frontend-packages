/**
 * Copyright (c) 2024-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { spacing } from "@ndla/core";
import { InformationOutline } from "@ndla/icons/common";
import SafeLink from "@ndla/safelink";
import { UuDisclaimerMetaData } from "@ndla/types-embed";
import { MessageBox } from "../Messages";
interface Props {
  embed: UuDisclaimerMetaData;
  children?: ReactNode;
}

const MessageBoxWrapper = styled.div`
  margin-bottom: ${spacing.xsmall};
`;

const StyledMessageBox = styled(MessageBox)`
  display: flex;
  flex-align: center;
`;

const Disclaimer = styled.div`
  display: flow;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

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
      <MessageBoxWrapper>
        <StyledMessageBox type="info">
          <InformationOutline />
          <Disclaimer>
            {embedData.disclaimer}
            {disclaimerLink}
          </Disclaimer>
        </StyledMessageBox>
      </MessageBoxWrapper>
      {children}
    </div>
  );
};

export default UuDisclaimerEmbed;
