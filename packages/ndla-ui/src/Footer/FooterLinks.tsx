import React from 'react';
import styled from '@emotion/styled';
import { LinkProps } from 'react-router-dom';
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
import {
  EmailOutline,
  Facebook,
  Twitter,
  Share,
  Forward,
  Launch,
  // @ts-ignore
} from '@ndla/icons/common';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import SafeLink from '../common/SafeLink';

const StyledLinksWrapper = styled.div`
  display: flex;
  flex-direction: columns;
  align-items: flex-start;
  section:first-child {
    margin-right: ${spacing.large};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    section:first-child {
      margin-right: ${spacing.spacingUnit * 4}px;
    }
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    > section {
      margin-top: ${spacing.large};
    }
  }
`;

type FooterLinksProps = {
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  links: {
    email: string;
    facebook: string;
    twitter: string;
    share?: string;
  };
};

const commonLinks = [
  'om.ndla.no',
  'about.ndla.no',
  'blogg.ndla.no',
  'blogg.ndla.no/elever',
  'fyr.ndla.no',
  'deling.ndla.no',
];

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  color: #fff;
  div {
    margin: ${spacing.xsmall} 0;
  }
`;

const StyledSafeLink = styled(SafeLink)<LinkProps>`
  color: #fff;
  ${fonts.sizes(16, 1.5)};
  svg {
    transform: translateY(-2px);
    margin-left: ${spacing.xsmall};
  }
`;

const StyledSocialMediaIcon = styled.span`
  background: ${colors.brand.primary};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${spacing.large};
  height: ${spacing.large};
  margin-right: ${spacing.small};
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StyledSocialMediaLinkWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHeaderLinks = styled.h1`
  ${fonts.sizes(16, 1.5)};
  font-weight: ${fonts.weight.semibold};
  margin: ${spacing.xsmall} 0;
`;

const FooterLinks: React.FunctionComponent<FooterLinksProps> = ({
  t,
  links,
}) => (
  <StyledLinksWrapper>
    <section>
      <StyledHeaderLinks>
        {t('footer.footerLinksHeader')} <Launch />
      </StyledHeaderLinks>
      <StyledNav>
        {commonLinks.map(link => (
          <div>
            <StyledSafeLink
              key={link}
              aria-label={link}
              to={`www.${link.toLowerCase}`}>
              {link}
            </StyledSafeLink>
          </div>
        ))}
      </StyledNav>
    </section>
    <section>
      <StyledNav>
        <StyledSocialMediaLinkWrapper>
          <StyledSocialMediaIcon>
            <EmailOutline />
          </StyledSocialMediaIcon>
          <StyledSafeLink to={links.email}>
            {t('footer.socialMediaLinks.newsletter')} <Forward />
          </StyledSafeLink>
        </StyledSocialMediaLinkWrapper>
        <StyledSocialMediaLinkWrapper>
          <StyledSocialMediaIcon>
            <Facebook />
          </StyledSocialMediaIcon>
          <StyledSafeLink to={links.facebook}>
            {t('footer.socialMediaLinks.facebook')} <Forward />
          </StyledSafeLink>
        </StyledSocialMediaLinkWrapper>
        <StyledSocialMediaLinkWrapper>
          <StyledSocialMediaIcon>
            <Twitter />
          </StyledSocialMediaIcon>
          <StyledSafeLink to={links.twitter}>
            {t('footer.socialMediaLinks.twitter')} <Forward />
          </StyledSafeLink>
        </StyledSocialMediaLinkWrapper>
        {links.share && (
          <StyledSocialMediaLinkWrapper>
            <StyledSocialMediaIcon>
              <Share />
            </StyledSocialMediaIcon>
            <StyledSafeLink to={links.share}>
              {t('footer.socialMediaLinks.sharePage')} <Forward />
            </StyledSafeLink>
          </StyledSocialMediaLinkWrapper>
        )}
      </StyledNav>
    </section>
  </StyledLinksWrapper>
);

export default injectT(FooterLinks);
