import React, { ReactNode, memo } from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, colors, mq, breakpoints, spacingUnit } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import { Forward, Launch } from '@ndla/icons/common';
import { useTranslation } from 'react-i18next';

const StyledLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.normal};
  div:first-of-type {
    margin-right: ${spacing.large};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    div:first-of-type {
      margin-right: ${spacingUnit * 4}px;
    }
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    flex-direction: column;
    > div {
      margin-top: ${spacing.large};
    }
  }
`;

interface FooterLinksProps {
  links: {
    to: string;
    text: string;
    icon: ReactNode;
  }[];
}

const commonLinks = [
  { key: 'omNdla', url: 'https://om.ndla.no' },
  {
    key: 'aboutNdla',
    url: 'https://om.ndla.no/about-ndla',
  },
  { key: 'blog', url: 'https://blogg.ndla.no' },
  { key: 'tips', url: 'https://blogg.ndla.no/elever' },
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

const StyledSafeLink = styled(SafeLink)`
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

const StyledHeaderLinks = styled.h3`
  ${fonts.sizes(16, 1.5)};
  font-weight: ${fonts.weight.semibold};
  margin: ${spacing.xsmall} 0;
`;

const FooterLinks = ({ links }: FooterLinksProps) => {
  const { t } = useTranslation();
  return (
    <StyledLinksWrapper>
      <div>
        <StyledHeaderLinks id="otherLinks">
          {t('footer.linksHeader')} <Launch />
        </StyledHeaderLinks>
        <StyledNav aria-labelledby="otherLinks">
          {commonLinks.map((link) => (
            <div key={link.url}>
              <StyledSafeLink
                key={t<string>(`footer.ndlaLinks.${link.key}`)}
                aria-label={t(`footer.ndlaLinks.${link.key}`)}
                to={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t(`footer.ndlaLinks.${link.key}`)}
              </StyledSafeLink>
            </div>
          ))}
        </StyledNav>
      </div>
      <StyledNav aria-label={t('footer.socialMedia')}>
        {links.map((link) => (
          <StyledSocialMediaLinkWrapper key={link.to}>
            <StyledSocialMediaIcon>{link.icon}</StyledSocialMediaIcon>
            <StyledSafeLink to={link.to}>
              {link.text}
              <Forward />
            </StyledSafeLink>
          </StyledSocialMediaLinkWrapper>
        ))}
      </StyledNav>
    </StyledLinksWrapper>
  );
};

export default memo(FooterLinks);
