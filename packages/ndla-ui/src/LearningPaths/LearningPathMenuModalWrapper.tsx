/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactChild, ReactChildren } from 'react';
import { injectT, tType } from '@ndla/i18n';
import { spacing, mq, breakpoints } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { css } from '@emotion/core';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { LearningPath } from '@ndla/icons/contentType';

const buttonToggleCss = css`
  ${mq.range({ from: breakpoints.tablet })} {
    display: none;
  }
  margin-right: auto;
  margin-left: ${spacing.normal};
  z-index: 100;
  svg {
    width: 20px;
    height: 20px;
    margin-right: ${spacing.xsmall};
    transform: translateY(-2px);
  }
`;

type ModalWrapperProps = {
  innerWidth: number;
  children: (arg: VoidFunction) => ReactChild | ReactChildren | React.ReactNode;
};

const ModalWrapperComponent: React.FC<ModalWrapperProps & tType> = ({ innerWidth, children, t }) => {
  if (innerWidth < 601) {
    return (
      <Modal
        backgroundColor="grey"
        animation="slide-up"
        animationDuration={200}
        size="fullscreen"
        activateButton={
          <Button css={buttonToggleCss}>
            <LearningPath />
            <span>{t('learningPath.openMenuTooltip')}</span>
          </Button>
        }>
        {(closeModal: VoidFunction) => (
          <>
            <ModalHeader>
              <ModalCloseButton title={t('modal.closeModal')} onClick={closeModal} />
            </ModalHeader>
            <ModalBody>{children(closeModal)}</ModalBody>
          </>
        )}
      </Modal>
    );
  }
  return <>{children(() => {})}</>;
};

export default injectT(ModalWrapperComponent);
