/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { colors, spacing, stackOrder } from "@ndla/core";
import { Heading } from "@ndla/typography";
import FooterLinks from "./FooterLinks";
import { OneColumn } from "../Layout";
import { Locale } from "../types";

type Props = {
  children: ReactNode;
  lang: Locale;
  commonLinks?: {
    to: string;
    text: string;
    external: boolean;
  }[];
  links?: {
    to: string;
    text: string;
    icon: ReactNode;
  }[];
  privacyLinks?: {
    url: string;
    label: string;
  }[];
  auth?: ReactNode;
};

const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.normal};
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const StyledDiv = styled.div`
  color: ${colors.white};
  position: relative;
  background: ${colors.brand.dark};
  overflow: hidden;
  z-index: ${stackOrder.base};
`;

const StyledOneColumn = styled(OneColumn)`
  z-index: ${stackOrder.offsetSingle};
  position: relative;
  padding: ${spacing.large} ${spacing.large} ${spacing.xlarge};
  max-width: 1196px;
`;

const StyledBackground = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${colors.brand.dark};
`;

const Footer = ({ children, commonLinks, links, auth, privacyLinks }: Props) => {
  const { t } = useTranslation();

  const mainContent = <>{children}</>;

  const footerContent =
    links || commonLinks ? (
      <>
        <StyledColumns>
          <StyledHeading element="h2" headingStyle="h2" margin="none">
            {t("footer.vision")}
          </StyledHeading>
          <FooterLinks commonLinks={commonLinks} links={links} privacyLinks={privacyLinks} />
        </StyledColumns>
        {mainContent}
      </>
    ) : (
      mainContent
    );

  return (
    <>
      <footer>
        <StyledDiv>
          <StyledOneColumn>{footerContent}</StyledOneColumn>
          <StyledBackground />
        </StyledDiv>
        {auth}
      </footer>
    </>
  );
};

export default Footer;
