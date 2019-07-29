/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { OneColumn } from '@ndla/ui';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import styled from '@emotion/styled';
import { colors, spacing } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';

import PrivacyNb from './privacy_nb';
import PrivacyNn from './privacy_nn';
import PrivacyEn from './privacy_en';

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

type Props = {
  children: React.ReactNode;
  inverted: boolean;
  lang: 'nb' | 'nn' | 'en';
  t(arg: string, obj?: { [key: string]: string | boolean | number }): string;
}

const Footer: React.FunctionComponent<Props> = ({ lang, children, inverted, t }) => (
  <StyledFooter inverted={inverted}>
    <div>
      {t('footer.vision')}
      <div>
        {t('footer.footerLinksHeader')}
      </div>
      {children}
    </div>
    <FooterPrivacy lang={lang} label={t('footer.footerPrivacyLink')} />
  </StyledFooter>
);

export default injectT(Footer);
