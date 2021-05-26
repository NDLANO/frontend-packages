/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import Modal, { ModalCloseButton, ModalHeader } from '@ndla/modal';
import { injectT, tType } from '@ndla/i18n';
import { Launch } from '@ndla/icons/common';
import { fonts, spacing } from '@ndla/core';

const BodyWrapper = styled.div`
  flex: 1;
`;

const StyledIframe = styled.iframe`
  border: 0;
  height: 100%;
  width: 100%;
`;

const ButtonText = styled.span`
  margin-right: ${spacing.xsmall};
  font-weight: ${fonts.weight.semibold};
`;

type Props = {
  src: string;
  title: string;
  buttonTitle: string;
};

const IframeButton = ({ src, title, buttonTitle, t }: Props & tType) => {
  return (
    <div data-iframe-button={1} data-src={src} data-title={title} data-button-title={buttonTitle}>
      <Modal
        activateButton={
          <Button size="normal">
            <ButtonText>{buttonTitle}</ButtonText>
            <Launch />
          </Button>
        }
        animation="subtle"
        animationDuration={50}
        backgroundColor="white"
        customDialogStyles={{ display: 'flex', flexDirection: 'column' }}
        size="fullscreen">
        {(onClose: () => void) => (
          <>
            <ModalHeader>
              <ModalCloseButton onClick={onClose} title={t('modal.closeModal')} />
            </ModalHeader>
            <BodyWrapper>
              <StyledIframe src={src} title={title} frameBorder="0" />
            </BodyWrapper>
          </>
        )}
      </Modal>
    </div>
  );
};

export default injectT(IframeButton);
