/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { spacing, fonts, misc, mq, breakpoints } from '@ndla/core';
import { OneColumn } from '../Layout';
import { Locale } from '../types';

import PrivacyNb from './privacy_nb';
import PrivacyNn from './privacy_nn';
import PrivacyEn from './privacy_en';

type FooterPrivacyProps = {
  label: string;
  lang: Locale;
};

const privacyTexts = (lang: string) => {
  if (lang === 'nn') {
    return <PrivacyNn />;
  }
  if (lang === 'en') {
    return <PrivacyEn />;
  }
  return <PrivacyNb />;
};

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
const StyledFooterText = styled.div`
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

const FooterPrivacy: React.FunctionComponent<FooterPrivacyProps> = ({ lang, label }) => (
  <StyledFooterText>
    <Modal activateButton={<StyledPrivacyButton type="button">{label}</StyledPrivacyButton>} size="fullscreen">
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

export default FooterPrivacy;
