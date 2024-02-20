/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { spacing, fonts, colors } from "@ndla/core";
import { Heading } from "@ndla/typography";

type FooterPrivacyProps = {
  privacyLinks: {
    label: string;
    url: string;
  }[];
};

const StyledFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding-top: ${spacing.normal};
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xsmall};
  ${fonts.size.text.content};
  padding-top: ${spacing.small};
`;

const StyledHeading = styled(Heading)`
  margin-bottom: ${spacing.xsmall};
`;

const StyledPrivacyLink = styled.a`
  color: ${colors.white};
  box-shadow: none;
  text-decoration: underline;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const FooterPrivacy = ({ privacyLinks }: FooterPrivacyProps) => {
  const { t } = useTranslation();
  return (
    <StyledFooterWrapper>
      <StyledHeading element="span" headingStyle="list-title" margin="none">
        {t("footer.aboutWebsite")}
      </StyledHeading>
      <LinkWrapper>
        {privacyLinks.map((link) => (
          <div key={link.label}>
            <StyledPrivacyLink href={link.url}>{link.label}</StyledPrivacyLink>
          </div>
        ))}
      </LinkWrapper>
    </StyledFooterWrapper>
  );
};

export default FooterPrivacy;
