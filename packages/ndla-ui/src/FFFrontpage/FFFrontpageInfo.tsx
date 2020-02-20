import React from 'react';
import styled from '@emotion/styled';

import { colors, spacing, mq, breakpoints } from '@ndla/core';
import { SafeLinkButton } from '@ndla/safelink';

const StyledWrapper = styled.section`
  background: ${colors.white};
  padding: ${spacing.small};
  margin-top: -${spacing.large};
  margin-bottom: ${spacing.large};
  ${mq.range({ from: breakpoints.mobileWide })} {
    padding: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large} ${spacing.spacingUnit * 3}px;
    margin-top: -${spacing.spacingUnit * 3}px;
  }
`;

const StyledContentWrapper = styled.div`
  max-width: 748px;
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
  heading: string;
  text: string;
  link: {
    label: string;
    to: string;
  };
};

const FFFrontpageInfo = ({ heading, text, link }: Props) => {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledHeading>{heading}</StyledHeading>
        <StyledText>{text}</StyledText>
        <SafeLinkButton to={link.to}>{link.label}</SafeLinkButton>
      </StyledContentWrapper>
    </StyledWrapper>
  );
};

export default FFFrontpageInfo;
