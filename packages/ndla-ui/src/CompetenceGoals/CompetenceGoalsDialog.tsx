/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { breakpoints, mq } from '@ndla/core';
import { ModalHeader, ModalBody, ModalCloseButton, Modal, ModalTitle, ModalProps } from '@ndla/modal';
import { FooterHeaderIcon } from '@ndla/icons/common';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  padding: 14px 20px 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

interface Props extends Omit<ModalProps, 'children'> {
  children?: ReactNode;
  subjectName?: string;
}

const CompetenceGoalsWrapper = styled.div`
  height: 100%;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 32px;

  ${mq.range({ from: breakpoints.mobile })} {
    padding: 0;
  }
`;

export const CompetenceGoalsDialog = ({ children, subjectName, ...modalProps }: Props) => {
  const { t } = useTranslation();

  return (
    <Modal {...(modalProps as ModalProps)} size="full">
      {(close) => (
        <>
          <ModalHeader>
            <HeaderWrapper>
              <ModalTitle>
                <FooterHeaderIcon size="24px" style={{ marginRight: '20px' }} />
                {t('competenceGoals.modalText')} {subjectName && ` \u2022 ${subjectName}`}
              </ModalTitle>
              <ModalCloseButton onClick={close} title={t('competenceGoals.competenceGoalClose')} />
            </HeaderWrapper>
          </ModalHeader>
          <ModalBody>
            <CompetenceGoalsWrapper>{children}</CompetenceGoalsWrapper>
          </ModalBody>
        </>
      )}
    </Modal>
  );
};

export default CompetenceGoalsDialog;
