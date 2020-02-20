import React from 'react';
import styled from '@emotion/styled';
import { spacing, mq, breakpoints } from '@ndla/core';

// @ts-ignore
import Logo from '../Logo';

const StyledHeader = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  max-width: 1024px;
  align-items: flex-end;
  ${mq.range({ until: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.spacingUnit * 3}px
      ${spacing.large};
  }
  ${mq.range({ from: breakpoints.desktop, until: breakpoints.wide })} {
    padding: ${spacing.spacingUnit * 2}px ${spacing.normal}
      ${spacing.spacingUnit * 5}px ${spacing.spacingUnit * 3}px;
  }
  ${mq.range({ from: breakpoints.wide })} {
    padding: ${spacing.spacingUnit * 2}px ${spacing.normal}
      ${spacing.spacingUnit * 5}px;
  }
`;

const StyledHeaderWrapper = styled.header`
  background: #5f219c;
`;

const StyledLogo = styled.div`
  width: 140px;
  box-shadow: none;
  display: flex;

  ${mq.range({ from: breakpoints.tablet })} {
    width: 180px;
  }

  ${mq.range({ from: breakpoints.desktop })} {
    width: 287px;
  }
`;

export type FFFrontpageHeaderProps = {
  languageOptions: string;
  locale: string;
};

const FFFrontpageHeader: React.FunctionComponent<FFFrontpageHeaderProps> = ({
  children,
}) => (
  <StyledHeaderWrapper>
    <StyledHeader>
      <StyledLogo>
        <Logo to="/" label={'NDLA'} large cssModifier={'white'} />
      </StyledLogo>
      {children}
    </StyledHeader>
  </StyledHeaderWrapper>
);

export default FFFrontpageHeader;
