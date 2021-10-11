/*
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { fonts } from '@ndla/core';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { FooterHeaderIcon } from '@ndla/icons/common';
import styled from '@emotion/styled';
import { classes } from './CompetenceGoals';

const HeaderWrapper = styled.div`
  padding: 14px 20px 14px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeadingWrapper = styled.h2`
  display: flex;
  align-items: center;
  ${fonts.sizes('18px', '32px')};
  margin: 0;
  font-weight: ${fonts.weight.semibold};
`;

export const CompetenceGoalsDialog = ({ children, isOpen, onClose, subjectName, modalProps }) => {
  const { t } = useTranslation();
  return (
    <Modal
      {...modalProps}
      controllable
      isOpen={isOpen}
      onClose={onClose}
      size="fullscreen"
      animation="slide-up"
      backgroundColor="light-gradient"
      narrow>
      {(close) => (
        <Fragment>
          <ModalHeader modifier="menu">
            <HeaderWrapper>
              <HeadingWrapper>
                <FooterHeaderIcon size="24px" style={{ marginRight: '20px' }} />
                {'Utforsk læreplankoblinger'} {subjectName && ` \u2022 ${subjectName}`}
              </HeadingWrapper>
              <ModalCloseButton onClick={close} title={t('competenceGoals.competenceGoalClose')} />
            </HeaderWrapper>
          </ModalHeader>
          <ModalBody>
            <div {...classes()} className="c-competence-goals">
              {children}
            </div>
          </ModalBody>
        </Fragment>
      )}
    </Modal>
  );
};

CompetenceGoalsDialog.propTypes = {
  curriculums: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      goals: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        }),
      ),
    }),
  ),
  subjectName: PropTypes.string,
};

export default CompetenceGoalsDialog;
