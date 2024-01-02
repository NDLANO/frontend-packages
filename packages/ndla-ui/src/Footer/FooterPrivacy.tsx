/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from "@emotion/styled";
import { spacing, fonts, mq, breakpoints } from "@ndla/core";

type FooterPrivacyProps = {
  privacyLinks: {
    label: string;
    url: string;
  }[];
};

const StyledPrivacyLink = styled.a`
  color: #fff;
  box-shadow: none;
  text-decoration: underline;
  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const StyledLinkSpacer = styled.span`
  margin: 0 ${spacing.small};
  ${mq.range({ until: breakpoints.tablet })} {
    display: none;
  }
`;

const StyledFooterText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${fonts.sizes(16, 1.5)};
  ${mq.range({ until: breakpoints.tablet })} {
    flex-direction: column;
    gap: ${spacing.small};
  }
  margin-bottom: ${spacing.large};
`;

const TextWrapper = styled.div`
  ${mq.range({ from: breakpoints.tablet })} {
    display: flex;
    justify-content: center;
    align-self: flex-start;
    text-align: center;
  }
`;

const FooterPrivacy = ({ privacyLinks }: FooterPrivacyProps) => {
  return (
    <StyledFooterText>
      {privacyLinks.map((link, index) => (
        <TextWrapper key={link.label}>
          {index > 0 && <StyledLinkSpacer aria-hidden>|</StyledLinkSpacer>}
          <StyledPrivacyLink href={link.url}>{link.label}</StyledPrivacyLink>
        </TextWrapper>
      ))}
    </StyledFooterText>
  );
};

export default FooterPrivacy;
