/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2 } from "@ndla/button";
import { spacing } from "@ndla/core";
import { HumanMaleBoard, LogIn } from "@ndla/icons/common";

import ErrorMessage from "./ErrorMessage";

const StyledLogInIconWrapper = styled.span`
  margin-left: ${spacing.xsmall};
`;

type Props = {
  onAuthenticateClick: () => void;
};
const ErrorResourceAccessDenied = ({ onAuthenticateClick }: Props) => {
  const { t } = useTranslation();
  return (
    <ErrorMessage
      messages={{
        title: t("user.resource.accessDenied"),
        back: t("errorMessage.back"),
        goToFrontPage: t("errorMessage.goToFrontPage"),
      }}
      illustrationElement={<HumanMaleBoard size="large" />}
      customElement={
        <ButtonV2 size="medium" onClick={onAuthenticateClick}>
          {t("user.buttonLogIn")}
          <StyledLogInIconWrapper aria-hidden>
            <LogIn size="normal" />
          </StyledLogInIconWrapper>
        </ButtonV2>
      }
    />
  );
};

export default ErrorResourceAccessDenied;
