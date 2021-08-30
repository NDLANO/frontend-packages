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
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
import { classes } from './CompetenceGoals';

export const CompetenceGoalsDialog = ({ children, isOpen, onClose, modalProps }) => {
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
          <ModalHeader modifier="white modal-body">
            <ModalCloseButton onClick={close} title={t('competenceGoals.competenceGoalClose')} />
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
};

export default CompetenceGoalsDialog;
