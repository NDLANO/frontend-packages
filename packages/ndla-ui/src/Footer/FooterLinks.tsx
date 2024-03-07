/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { spacing, fonts, colors, mq, breakpoints } from "@ndla/core";
import { Launch } from "@ndla/icons/common";
import { SafeLink } from "@ndla/safelink";
import { Heading } from "@ndla/typography";

type FooterLinksProps = {
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
};

const FooterLinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    flex-wrap: nowrap;
    align-self: flex-start;
  }
  width: 100%;
`;

const LinkColumnWrapper = styled.div`
  padding-right: ${spacing.large};
  padding-top: ${spacing.normal};
`;

const LastLinkColumnWrapper = styled.div`
  padding-top: ${spacing.normal};
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  color: ${colors.white};
  gap: ${spacing.xsmall};
  padding-top: ${spacing.small};
`;

const StyledSafeLink = styled(SafeLink)`
  color: ${colors.white};
  ${fonts.size.text.content};
  svg {
    margin-left: ${spacing.xsmall};
  }
`;

const StyledSocialMediaIcon = styled.span`
  margin-right: ${spacing.small};
  svg {
    width: 20px;
    height: 20px;
    color: ${colors.white};
  }
`;

const StyledLaunch = styled(Launch)`
  margin-left: ${spacing.xsmall};
`;

const FooterLinks = ({ links, commonLinks, privacyLinks }: FooterLinksProps) => {
  const { t } = useTranslation();
  return (
    <>
      <FooterLinkContainer>
        <LinkColumnWrapper>
          <Heading element="span" headingStyle="list-title">
            {t("footer.followUs")}
          </Heading>
          <StyledNav aria-label={t("footer.socialMedia")}>
            {links?.map((link) => (
              <div key={link.to}>
                <StyledSocialMediaIcon>{link.icon}</StyledSocialMediaIcon>
                <StyledSafeLink key={link.to} to={link.to}>
                  {link.text}
                </StyledSafeLink>
              </div>
            ))}
          </StyledNav>
        </LinkColumnWrapper>
        <LinkColumnWrapper>
          <Heading element="span" headingStyle="list-title">
            {t("footer.linksHeader")}
          </Heading>
          <StyledNav aria-label={t("footer.linksHeader")}>
            {commonLinks?.map((link) => (
              <div key={link.to}>
                <StyledSafeLink
                  key={link.text}
                  aria-label={link.text}
                  to={link.to}
                  target={link.external ? "_blank" : ""}
                  rel="noopener noreferrer"
                >
                  {link.text}
                </StyledSafeLink>
                {link.external && <StyledLaunch />}
              </div>
            ))}
          </StyledNav>
        </LinkColumnWrapper>
        <LastLinkColumnWrapper>
          <Heading element="span" headingStyle="list-title">
            {t("footer.aboutWebsite")}
          </Heading>
          <StyledNav aria-label={t("footer.aboutWebsite")}>
            {privacyLinks &&
              privacyLinks.map((link) => (
                <div key={link.label}>
                  <StyledSafeLink to={link.url}>{link.label}</StyledSafeLink>
                </div>
              ))}
          </StyledNav>
        </LastLinkColumnWrapper>
      </FooterLinkContainer>
    </>
  );
};

export default FooterLinks;
