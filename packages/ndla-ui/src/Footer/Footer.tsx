/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
// @ts-ignore
import { OneColumn } from '@ndla/ui';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import styled from '@emotion/styled';
// @ts-ignore
import { FooterHeaderIcon } from '@ndla/icons/common';
import { colors, spacing, fonts } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';

import PrivacyNb from './privacy_nb';
import PrivacyNn from './privacy_nn';
import PrivacyEn from './privacy_en';
import FooterLinks from './FooterLinks';

type FooterTextProps = {
  children: React.ReactNode;
}

export const FooterText: React.FunctionComponent<FooterTextProps> = ({ children }) => (
  <p className="footer_text">{children}</p>
);

export const FooterRuler: React.FunctionComponent = () => (
  <div className="footer_ruler" />
);

type FooterEditorProps = {
  title: string;
  name: string;
}

export const FooterEditor: React.FunctionComponent<FooterEditorProps> = ({ title, name }) => (
  <span className="footer_editor">
    {title} <strong>{name}</strong>
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

const FooterPrivacy: React.FunctionComponent<FooterPrivacyProps> = ({ lang, label }) => (
  <Modal
    activateButton={<Button link>{label}</Button>}
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
);

type StyledFooterProps = {
  inverted: boolean;
};

const StyledFooter = styled.footer<StyledFooterProps>`
  background: ${colors.brand.dark};
  color: #fff;
`;

const StyledHeader = styled.h1`
  ${fonts.sizes(24, 1.5)};
  font-weight: ${fonts.weight.semibold};
  margin-bottom: ${spacing.large}; 
`;

const StyledFooterHeaderIcon = styled(FooterHeaderIcon)`
  color: #fff;
  width: ${spacing.spacingUnit * 3}px;
  height: ${spacing.spacingUnit * 3}px;
`;

const StyledColumns = styled.div`
  display: flex;
  padding: ${spacing.large} 0;
  > div:first-child {
    padding: ${spacing.normal} ${spacing.spacingUnit * 1.75}px ${spacing.normal} ${spacing.large};
  }
`;

type Props = {
  children: React.ReactNode;
  inverted: boolean;
  lang: 'nb' | 'nn' | 'en';
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
  links: {
    email: string;
    facebook: string;
    twitter: string;
    share?: string;
  }
}

const Footer: React.FunctionComponent<Props> = ({ lang, children, inverted, t, links }) => (
  <StyledFooter inverted={inverted}>
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
      {children}
      <FooterPrivacy lang={lang} label={t('footer.footerPrivacyLink')} />
    </OneColumn>
  </StyledFooter>
);

export default injectT(Footer);
