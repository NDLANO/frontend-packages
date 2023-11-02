import { ReactNode } from 'react';
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
};

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

const FooterLinks = ({ links, commonLinks }: FooterLinksProps) => {
  const { t } = useTranslation();
  return (
    <>
      <StyledLinksWrapper>
        <div>
          <StyledHeaderLinks id="otherLinks">{t('footer.linksHeader')}</StyledHeaderLinks>
          <StyledNav aria-labelledby="otherLinks">
            {commonLinks?.map((link) => (
              <div key={link.to}>
                <StyledSafeLink
                  key={link.text}
                  aria-label={link.text}
                  to={link.to}
                  target={link.external ? '_blank' : ''}
                  rel="noopener noreferrer"
                >
                  {link.text}
                  {link.external && <Launch />}
                </StyledSafeLink>
              </div>
            ))}
          </StyledNav>
        </div>
        <StyledNav aria-label={t('footer.socialMedia')}>
          {links?.map((link) => (
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
    </>
  );
};

export default FooterLinks;
