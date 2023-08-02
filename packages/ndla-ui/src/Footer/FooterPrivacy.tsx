/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing, fonts, misc, mq, breakpoints } from '@ndla/core';

type FooterPrivacyProps = {
  privacyLinks: {
    label: string;
    url: string;
  }[];
};

const StyledPrivacyLink = styled.a`
  background: none;
  color: #fff;
  border: 0;
  padding: 0;
  box-shadow: ${misc.textLinkBoxShadow};
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

const StyledLinkSpacer = styled.span`
  margin-left: ${spacing.xxsmall};
  margin-right: ${spacing.xxsmall};
  margin-bottom: ${spacing.large};
  ${mq.range({ until: breakpoints.mobileWide })} {
    visibility: hidden;
  }
`;

const StyledFooterText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  > span {
    padding: ${spacing.xsmall} 0;
    text-align: center;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    ${fonts.sizes(16, 1.5)};
    > span {
      padding: 0;
    }
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
    ${fonts.sizes(14, 1.3)};
    > span {
      padding-bottom: ${spacing.xsmall};
    }
    flex-direction: column;
  }
  margin-bottom: ${spacing.large};
`;

const FooterPrivacy = ({ privacyLinks }: FooterPrivacyProps) => {
  return (
    <StyledFooterText>
      {privacyLinks.map((link, index) => (
        <div key={link.label}>
          {index > 0 && <StyledLinkSpacer aria-hidden>|</StyledLinkSpacer>}
          <StyledPrivacyLink href={link.url}>{link.label}</StyledPrivacyLink>
        </div>
      ))}
    </StyledFooterText>
  );
};

export default FooterPrivacy;
