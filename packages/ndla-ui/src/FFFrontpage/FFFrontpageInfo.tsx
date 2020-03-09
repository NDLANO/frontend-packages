import React from 'react';
import styled from '@emotion/styled';

import { colors, spacing, mq, breakpoints } from '@ndla/core';
import { SafeLinkButton } from '@ndla/safelink';

const StyledWrapper = styled.section`
  background: ${colors.white};
  padding: ${spacing.small};
  margin: -${spacing.large} -${spacing.medium} ${spacing.large};
  ${mq.range({ from: breakpoints.tablet })} {
    padding: ${spacing.normal} ${spacing.small};
    margin-left: 0;
    margin-right: 0;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large} ${spacing.small};
    margin-top: -${spacing.spacingUnit * 3}px;
  }
`;

const StyledContentWrapper = styled.div`
  max-width: 748px;
  margin: 0 auto;
`;

const StyledHeading = styled.h1`
  margin-top: 0;
`;

const StyledText = styled.p`
  font-size: 20px;
  ${mq.range({ from: breakpoints.tablet })} {
    font-size: 24px;
  }
`;

type Props = {
  heading?: string;
  text?: string;
  link?: {
    label: string;
    to: string;
  };
  children: React.ReactNode;
};

const FFFrontpageInfo = ({ heading, text, link, children }: Props) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        {heading && <StyledHeading>{heading}</StyledHeading>}
        {text && <StyledText>{text}</StyledText>}
        {link && <SafeLinkButton to={link.to}>{link.label}</SafeLinkButton>}
      </StyledContentWrapper>
      {children}
    </StyledWrapper>
  );
};

export default FFFrontpageInfo;
