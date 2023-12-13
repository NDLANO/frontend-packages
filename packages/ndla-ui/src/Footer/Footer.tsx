/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { colors, spacing, fonts, mq, breakpoints, spacingUnit } from '@ndla/core';
import { FooterHeaderIcon } from '@ndla/icons/common';
import FooterLinks from './FooterLinks';
import FooterPrivacy from './FooterPrivacy';
import { OneColumn } from '../Layout';
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

const StyledDiv = styled.div`
  color: #fff;
  position: relative;
  background: ${colors.brand.dark};
  overflow: hidden;
  z-index: 0;
  &[data-margin='true'] {
    margin-top: ${spacing.xxlarge};
  }
`;

const StyledOneColumn = styled(OneColumn)`
  z-index: 1;
  position: relative;
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
    width: ${spacing.xlarge};
    height: ${spacing.xlarge};
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
  position: relative;
  z-index: 1;
  margin-top: ${spacing.normal};
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: ReactNode;
  lang: Locale;
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
  privacyLinks?: {
    url: string;
    label: string;
  }[];
  languageSelector?: ReactNode;
  auth?: ReactNode;
};

const Footer = ({ children, commonLinks, links, languageSelector, auth, privacyLinks }: Props) => {
  const { t } = useTranslation();

  const mainContent = (
    <>
      {children}
      {privacyLinks && <FooterPrivacy privacyLinks={privacyLinks} />}
    </>
  );

  const footerContent =
    links || commonLinks ? (
      <>
        <StyledColumns>
          <div>
            <StyledFooterHeaderIcon />
          </div>
          <div>
            <StyledHeader>{t('footer.vision')}</StyledHeader>
            <FooterLinks commonLinks={commonLinks} links={links} />
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
      <footer>
        <StyledDiv data-margin={!languageSelector}>
          {languageSelector && <StyledLanguageWrapper>{languageSelector}</StyledLanguageWrapper>}
          <StyledOneColumn cssModifier="large">{footerContent}</StyledOneColumn>
          <StyledBackground />
        </StyledDiv>
        {auth}
      </footer>
    </>
  );
};

export default Footer;
