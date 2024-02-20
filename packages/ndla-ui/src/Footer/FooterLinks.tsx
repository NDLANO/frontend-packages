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
import SafeLink from "@ndla/safelink";
import { Heading } from "@ndla/typography";
import FooterPrivacy from "./FooterPrivacy";

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

const LinkWrapper = styled.div`
  padding-right: ${spacing.large};
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
    transform: translateY(-2px);
    margin-left: ${spacing.xsmall};
  }
`;

const StyledSocialMediaIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${spacing.small};
  svg {
    width: 20px;
    height: 20px;
    color: ${colors.white};
  }
`;

const StyledSocialMediaLinkWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const StyledLaunch = styled(Launch)`
  margin-left: ${spacing.xsmall};
`;

const FooterLinks = ({ links, commonLinks, privacyLinks }: FooterLinksProps) => {
  const { t } = useTranslation();
  return (
    <>
      <FooterLinkContainer>
        <LinkWrapper>
          <Heading id="otherLinks" element="span" headingStyle="list-title">
            {t("footer.followUs")}
          </Heading>
          <StyledNav aria-label={t("footer.socialMedia")}>
            {links?.map((link) => (
              <StyledSocialMediaLinkWrapper key={link.to}>
                <StyledSocialMediaIcon>{link.icon}</StyledSocialMediaIcon>
                <StyledSafeLink to={link.to}>{link.text}</StyledSafeLink>
              </StyledSocialMediaLinkWrapper>
            ))}
          </StyledNav>
        </LinkWrapper>
        <LinkWrapper>
          <Heading id="otherLinks" element="span" headingStyle="list-title">
            {t("footer.linksHeader")}
          </Heading>
          <StyledNav aria-labelledby="otherLinks">
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
        </LinkWrapper>
        {privacyLinks && <FooterPrivacy privacyLinks={privacyLinks} />}
      </FooterLinkContainer>
    </>
  );
};

export default FooterLinks;
