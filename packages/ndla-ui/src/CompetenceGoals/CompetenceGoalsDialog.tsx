/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ComponentProps, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { breakpoints, fonts, mq } from '@ndla/core';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { FooterHeaderIcon } from '@ndla/icons/common';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
  padding: 14px 20px 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeadingWrapper = styled.h1`
  display: flex;
  align-items: center;
  ${fonts.sizes('18px', '32px')};
  margin: 0;
  font-weight: ${fonts.weight.semibold};
`;

interface Props {
  children?: ReactNode;
  modalProps?: ComponentProps<typeof Modal>;
  isOpen?: boolean;
  onClose?: () => void;
  subjectName?: string;
  curriculums?: {
    id: string;
    name: string;
    goals?: {
      id: string;
      name: string;
    }[];
  }[];
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

export const CompetenceGoalsDialog = ({ children, isOpen, onClose, subjectName, modalProps }: Props) => {
  const { t } = useTranslation();
  const iconId = 'popupCompetenceGoals';

  return (
    <Modal
      labelledBy={iconId}
      {...modalProps}
      controllable
      isOpen={isOpen}
      onClose={onClose}
      size="fullscreen"
      backgroundColor="light-gradient"
      narrow
    >
      {(close) => (
        <>
          <ModalHeader modifier="menu">
            <HeaderWrapper>
              <HeadingWrapper>
                <FooterHeaderIcon id={iconId} size="24px" style={{ marginRight: '20px' }} />
                {t('competenceGoals.modalText')} {subjectName && ` \u2022 ${subjectName}`}
              </HeadingWrapper>
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
