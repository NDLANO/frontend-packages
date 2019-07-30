/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { colors, spacing, fonts, misc, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import { OneColumn } from '@ndla/ui';
// @ts-ignore
import { injectT } from '@ndla/i18n';
// @ts-ignore
import { FooterHeaderIcon } from '@ndla/icons/common';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';

import PrivacyNb from './privacy_nb';
import PrivacyNn from './privacy_nn';
import PrivacyEn from './privacy_en';
import FooterLinks from './FooterLinks';

const StyledFooterText = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
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

type FooterTextProps = {
  children: React.ReactNode;
}

export const FooterText: React.FunctionComponent<FooterTextProps> = ({ children }) => (
  <StyledFooterText>{children}</StyledFooterText>
);

type FooterEditorProps = {
  title: string;
  name: string;
}

export const FooterEditor: React.FunctionComponent<FooterEditorProps> = ({ title, name }) => (
  <span>
    <strong>{title}</strong> {name}
  </span>
);

type FooterPrivacyProps = {
  label: string; 
  lang: 'nb' | 'nn' | 'en';
}

const privacyTexts = (lang: string) => {
  if (lang === 'nn') {
    return <PrivacyNn />
  }
  if (lang === 'en') {
    return <PrivacyEn />
  }
  return <PrivacyNb />
}

const StyledPrivacyButton = styled.button`
  background: none;
  color: #fff;
  border: 0;
  padding: 0;
  box-shadow: ${misc.textLinkBoxShadow};
  cursor: pointer;
  margin-bottom: ${spacing.large};
  &:hover,
  &:focus {
    box-shadow: none;
  }
`;

const FooterPrivacy: React.FunctionComponent<FooterPrivacyProps> = ({ lang, label }) => (
  <StyledFooterText>
    <Modal
      activateButton={<StyledPrivacyButton type="button">{label}</StyledPrivacyButton>}
      size="fullscreen">
      {(onClose: void) => (
        <OneColumn cssModifier="medium">
          <ModalHeader>
            <ModalCloseButton onClick={onClose} title="Lukk" />
          </ModalHeader>
          <ModalBody>{privacyTexts(lang)}</ModalBody>
        </OneColumn>
      )}
    </Modal>
  </StyledFooterText>
);

const StyledFooter = styled.footer`
  background: ${colors.brand.dark};
  color: #fff;
`;

const StyledHeader = styled.h1`
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
    width: ${spacing.spacingUnit * 3}px;
    height: ${spacing.spacingUnit * 3}px;
  }
`;

const StyledColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${spacing.large} ${spacing.large} 0 0;
  > div:first-child {
    padding: ${spacing.normal};
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    flex-direction: row;
    align-items: flex-start;
    > div:first-child {
      padding: ${spacing.normal} ${spacing.spacingUnit * 1.75}px ${spacing.normal} ${spacing.large};
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
  background: ${colors.brand.primary};
  &:before {
    content: none;
  }
`;

const StyledLanguageWrapper = styled.div`
  margin: ${spacing.large} 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: React.ReactNode;
  lang: 'nb' | 'nn' | 'en';
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  links: {
    email: string;
    facebook: string;
    twitter: string;
    share?: string;
  };
  languageSelector?: React.ReactNode;
}

const Footer: React.FunctionComponent<Props> = ({ lang, children, t, links, languageSelector }) => (
  <>
    {languageSelector && (
      <StyledLanguageWrapper>
        {languageSelector}
      </StyledLanguageWrapper>
    )}
    <StyledFooter>
      <OneColumn cssModifier="large">
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
        {children}
        <FooterPrivacy lang={lang} label={t('footer.footerPrivacyLink')} />
      </OneColumn>
    </StyledFooter>
  </>
);

export default injectT(Footer);
