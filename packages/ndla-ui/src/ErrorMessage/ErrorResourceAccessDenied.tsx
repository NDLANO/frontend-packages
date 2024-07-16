/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import { ButtonV2 } from "@ndla/button";
import { HumanMaleBoard, LogIn } from "@ndla/icons/common";
import { styled } from "@ndla/styled-system/jsx";
import ErrorMessage from "./ErrorMessage";

// TODO: This has not been redesignet yet. This is just a rewrite of the previous design in panda

const StyledLogInIconWrapper = styled("span", {
  base: {
    marginLeft: "3xsmall",
  },
});

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
      illustrationElement={<HumanMaleBoard size="medium" />}
      customElement={
        <ButtonV2 size="medium" onClick={onAuthenticateClick}>
          {t("user.buttonLogIn")}
          <StyledLogInIconWrapper aria-hidden>
            <LogIn size="medium" />
          </StyledLogInIconWrapper>
        </ButtonV2>
      }
    />
  );
};

export default ErrorResourceAccessDenied;
