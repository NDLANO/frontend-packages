/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { injectT, tType } from '@ndla/i18n';
import { colors, spacing, fonts } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import { LearningPathBadge } from '../index-javascript';

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 -${spacing.normal} ${spacing.medium};
  background: ${colors.brand.lighter};
  padding: ${spacing.small} ${spacing.normal};
`;

const StyledMiniHeader = styled.span`
  padding-left: ${spacing.xsmall};
  ${fonts.sizes(16, 1.1)};
`;

type ModalWrapperProps = {
  innerWidth: number;
  closeLabel: string;
  activateButton: Object;
  children: JSX.Element;
};

const ModalWrapperComponent: React.FunctionComponent<ModalWrapperProps &
  tType> = ({ innerWidth, closeLabel, children, t, activateButton }) => {
  if (innerWidth < 601) {
    return (
      <StyledWrapper>
        <Modal
          backgroundColor="grey"
          animation="slide-up"
          animationDuration={200}
          size="fullscreen"
          activateButton={activateButton}>
          {(onClose: Function) => (
            <>
              <ModalHeader>
                <ModalCloseButton title={closeLabel} onClick={onClose} />
              </ModalHeader>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </Modal>
        <div>
          <LearningPathBadge size="xx-small" background />
          <StyledMiniHeader>
            {t('learningPath.youAreInALearningPath')}
          </StyledMiniHeader>
        </div>
      </StyledWrapper>
    );
  }
  return children;
};

export default injectT(ModalWrapperComponent);
