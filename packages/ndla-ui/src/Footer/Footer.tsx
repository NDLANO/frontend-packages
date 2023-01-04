/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { colors, spacing, fonts, mq, breakpoints, spacingUnit } from '@ndla/core';
import { FooterHeaderIcon } from '@ndla/icons/common';
import { OneColumn } from '../Layout';
import FooterLinks from './FooterLinks';
import FooterPrivacy from './FooterPrivacy';
import { Locale } from '../types';

const StyledBackground = styled.div`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(96deg, rgba(0, 117, 160, 1) 0%, rgba(32, 88, 143, 0) 100%);
`;

type StyledFooterProps = {
  addMargin?: boolean;
};

const StyledDiv = styled.div<StyledFooterProps>`
  color: #fff;
  position: relative;
  background: ${colors.brand.dark};
  overflow: hidden;
  z-index: 0;
  ${(props) => props.addMargin && `margin-top: ${spacingUnit * 4}px;`}

  > div:first-of-type {
    position: relative;
    z-index: 1;
  }
`;

const StyledHeader = styled.h2`
  ${fonts.sizes(20, 1.5)};
  margin: 0;
  font-weight: ${fonts.weight.semibold};
  text-align: center;
  ${mq.range({ from: breakpoints.tabletWide })} {
    ${fonts.sizes(24, 1.5)};
    margin: ${spacing.normal} ${spacing.normal} ${spacing.large} 0;
    text-align: left;
  }
`;

const StyledFooterHeaderIcon = styled(FooterHeaderIcon)`
  color: #fff;
  width: ${spacing.large};
  height: ${spacing.large};
  ${mq.range({ from: breakpoints.tabletWide })} {
    width: ${spacingUnit * 3}px;
    height: ${spacingUnit * 3}px;
  }
`;

const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.large} ${spacing.large} 0 0;
  > div:first-of-type {
    padding: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    flex-direction: row;
    align-items: flex-start;
    > div:first-of-type {
      padding: ${spacing.normal} ${spacingUnit * 1.75}px ${spacing.normal} ${spacing.large};
    }
  }
  ${mq.range({ from: breakpoints.desktop })} {
    padding: ${spacing.large} 0;
  }
  ${mq.range({ until: breakpoints.tabletWide })} {
    padding: ${spacing.normal} ${spacing.normal} ${spacing.small};
  }
`;

const StyledHr = styled.hr`
  height: 1px;
  margin: ${spacing.normal};
  ${mq.range({ from: breakpoints.tabletWide })} {
    margin: ${spacing.large};
  }
  background: rgba(255, 255, 255, 0.1);
  &:before {
    content: none;
  }
`;

const StyledLanguageWrapper = styled.div`
  margin: ${spacing.large} 0 ${spacingUnit * 3}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: ReactNode;
  lang: Locale;
  links?: [
    {
      to: string;
      text: string;
      icon: ReactNode;
      facebook: string;
      twitter: string;
    },
  ];
  privacyLinks?: {
    url: string;
    label: string;
  }[];
  languageSelector?: ReactNode;
  auth?: ReactNode;
};

const Footer = ({ children, links, languageSelector, auth, privacyLinks }: Props) => {
  const { t } = useTranslation();

  const mainContent = (
    <>
      {children}
      {privacyLinks && <FooterPrivacy privacyLinks={privacyLinks} />}
    </>
  );

  const footerContent = links ? (
    <>
      <StyledColumns>
        <div>
          <StyledFooterHeaderIcon />
        </div>
        <div>
          <StyledHeader>{t('footer.vision')}</StyledHeader>
          <FooterLinks links={links} />
        </div>
      </StyledColumns>
      <StyledHr />
      {mainContent}
    </>
  ) : (
    mainContent
  );

  return (
    <>
      {languageSelector && <StyledLanguageWrapper>{languageSelector}</StyledLanguageWrapper>}
      <footer>
        <StyledDiv addMargin={!languageSelector}>
          <OneColumn cssModifier="large">{footerContent}</OneColumn>
          <StyledBackground />
        </StyledDiv>
        {auth}
      </footer>
    </>
  );
};

export default Footer;
