import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { colors, spacing, spacingUnit, mq, breakpoints } from '@ndla/core';
import SafeLink from '@ndla/safelink';
import FrontpageHeaderIllustration from './illustrations/FrontpageHeaderIllustration';
import SvgLogo from '../Logo/SvgLogo';

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1024px;
  padding: ${spacing.normal} 0 0;
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.large} 0 ${spacing.small};
  }
`;

const StyledHeaderWrapper = styled.header`
  background: ${colors.brand.lighter};
  margin-bottom: ${spacingUnit * 3}px;
`;

const StyledLogo = styled(SafeLink)`
  width: 135px;
  box-shadow: none;
  ${mq.range({ from: breakpoints.tablet })} {
    width: 200px;
  }
`;

const HeaderIllustrationWrapper = styled.div`
  margin: ${spacing.small};
  width: 100%;
  padding: 0 ${spacing.normal};
  text-align: center;
  svg {
    max-width: 100%;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    width: 480px;
    margin: ${spacing.normal} 0 ${spacing.small};
    padding: 0;
  }
`;

interface FrontPageHeaderProps {
  locale: string;
  showHeader: boolean;
  children?: ReactNode;
}

const FrontpageHeader = ({ locale, showHeader = true, children }: FrontPageHeaderProps) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLogo to="/" aria-hidden="true">
        <SvgLogo locale={locale} />
      </StyledLogo>
      {showHeader && (
        <HeaderIllustrationWrapper aria-hidden="true">
          <FrontpageHeaderIllustration />
        </HeaderIllustrationWrapper>
      )}
      {children}
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default FrontpageHeader;
