/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { spacing, fonts, misc, mq, breakpoints } from '@ndla/core';
import { useTranslation } from 'react-i18next';

type FooterPrivacyProps = {
  privacyLinks: [
    {
      label: string;
      url: string;
    },
  ];
};

const StyledPrivacyLink = styled.a`
  background: none;
  color: #fff;
  border: 0;
  padding: 0;
  box-shadow: ${misc.textLinkBoxShadow};
  cursor: pointer;
  margin-bottom: ${spacing.large};
  margin-left: ${spacing.small};
  &:hover,
  &:focus {
    box-shadow: none;
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
  }
`;

const FooterPrivacy = ({ privacyLinks }: FooterPrivacyProps) => {
  const { t } = useTranslation();

  return (
    <StyledFooterText>
      {privacyLinks.map((link) => (
        <StyledPrivacyLink href={link.url} key={link.label}>
          {link.label}
        </StyledPrivacyLink>
      ))}
    </StyledFooterText>
  );
};

export default FooterPrivacy;
