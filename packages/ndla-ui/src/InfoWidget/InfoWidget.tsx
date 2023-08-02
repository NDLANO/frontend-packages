import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ReactNode } from 'react';
import { Forward } from '@ndla/icons/common';
import SafeLink from '@ndla/safelink';
import { colors, fonts, spacing } from '@ndla/core';

import SectionHeading from '../SectionHeading';
import { HeadingLevel } from '../types';

interface InfoWidgetSectionProps {
  center?: boolean;
}
const InfoWidgetSection = styled.section<InfoWidgetSectionProps>`
  max-width: 600px;
  margin: ${(p) => p.center && '0 auto'};
`;

const InfoWidgetDescription = styled.div`
  padding: ${spacing.normal};
  background: ${colors.brand.lighter};
  color: ${colors.brand.dark};
  ${fonts.sizes('18px', '26px')};

  p {
    margin-top: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const InfoWidgetLinksContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const iconLinkStyle = css`
  width: 47px;
  height: 47px;
  border-radius: 100%;
  background: ${colors.brand.lighter};
  color: ${colors.brand.dark};
  box-shadow: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${spacing.small};

  .c-icon {
    width: 20px;
    height: 20px;
  }
`;

const IconSafeLink = styled(SafeLink)(iconLinkStyle);

const IconAnchor = styled.a(iconLinkStyle);
const IconSpan = styled.span(iconLinkStyle);

const StyledMainLink = styled.a`
  color: ${colors.brand.dark};
  ${fonts.sizes('16px', '24px')};
`;
interface Props {
  heading: string;
  headingLevel: HeadingLevel;
  description: string;
  mainLink: {
    name: string;
    url?: string;
    href?: string;
  };
  iconLinks: {
    name: string;
    url?: string;
    href?: string;
    icon: ReactNode;
  }[];
  center?: boolean;
}

const InfoWidget = ({ heading, description, mainLink, iconLinks, headingLevel, center = false }: Props) => (
  <InfoWidgetSection center={center}>
    <SectionHeading headingLevel={headingLevel} large>
      {heading}
    </SectionHeading>
    <InfoWidgetDescription>
      <p>{description}</p>
    </InfoWidgetDescription>
    <InfoWidgetLinksContainer>
      {iconLinks?.map((link) => {
        if (link.url) {
          return (
            <IconSafeLink key={link.url} to={link.url} aria-label={link.name}>
              {link.icon}
            </IconSafeLink>
          );
        }
        if (link.href) {
          return (
            <IconAnchor key={link.href} href={link.href} aria-label={link.name}>
              {link.icon}
            </IconAnchor>
          );
        }
        return (
          <IconSpan key={link.name} aria-label={link.name}>
            {link.icon}
          </IconSpan>
        );
      })}
      {mainLink.url ? (
        <div className="o-text-link__wrapper o-text-link__wrapper--right">
          <SafeLink className="o-text-link" to={mainLink.url}>
            <span>{mainLink.name}</span> <Forward />
          </SafeLink>
        </div>
      ) : (
        <StyledMainLink href={mainLink.href}>{mainLink.name}</StyledMainLink>
      )}
    </InfoWidgetLinksContainer>
  </InfoWidgetSection>
);

export default InfoWidget;
