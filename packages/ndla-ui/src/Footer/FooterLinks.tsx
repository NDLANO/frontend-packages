import React from 'react';
import styled from '@emotion/styled';
import { LinkProps } from 'react-router-dom';
import { spacing, fonts, colors, mq, breakpoints } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import {
  Forward,
  Launch,
  // @ts-ignore
} from '@ndla/icons/common';
import { injectT, tType } from '@ndla/i18n';

const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  section:first-of-type {
    margin-right: ${spacing.large};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    section:first-of-type {
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
  links: [
    {
      to: string;
      text: string;
      icon: React.ReactNode;
      facebook: string;
      twitter: string;
    },
  ];
};

const commonLinks = [
  { key: 'omNdla', url: 'https://om.ndla.no' },
  {
    key: 'aboutNdla',
    url: 'https://om.ndla.no/about-ndla',
  },
  { key: 'blog', url: 'https://blogg.ndla.no' },
  { key: 'tips', url: 'https://blogg.ndla.no/elever' },
  { key: 'fyr', url: 'https://fyr.ndla.no' },
  { key: 'sharing', url: 'https://deling.ndla.no' },
  { key: 'vacancies', url: 'https://om.ndla.no/jobb-for-ndla/' },
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
  background: ${colors.white};
  color: ${colors.brand.primary};
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

const FooterLinks: React.FunctionComponent<FooterLinksProps & tType> = ({
  t,
  links,
}) => (
  <>
    <StyledLinksWrapper>
      <section>
        <StyledHeaderLinks>
          {t('footer.footerLinksHeader')} <Launch />
        </StyledHeaderLinks>
        <StyledNav>
          {commonLinks.map(link => (
            <div key={link.url}>
              <StyledSafeLink
                key={t(`footer.ndlaLinks.${link.key}`)}
                aria-label={t(`footer.ndlaLinks.${link.key}`)}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer">
                {t(`footer.ndlaLinks.${link.key}`)}
              </StyledSafeLink>
            </div>
          ))}
        </StyledNav>
      </section>
      <section>
        <StyledNav>
          {links.map(link => (
            <StyledSocialMediaLinkWrapper key={link.to}>
              <StyledSocialMediaIcon>{link.icon}</StyledSocialMediaIcon>
              <StyledSafeLink to={link.to}>
                {link.text}
                <Forward />
              </StyledSafeLink>
            </StyledSocialMediaLinkWrapper>
          ))}
        </StyledNav>
      </section>
    </StyledLinksWrapper>
  </>
);

export default injectT(FooterLinks);
