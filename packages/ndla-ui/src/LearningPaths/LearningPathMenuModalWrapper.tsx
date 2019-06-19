/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
// @ts-ignore
import { injectT } from '@ndla/i18n';
import { colors, spacing, fonts, misc, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import { LearningPathBadge } from '../index-javascript';

const StyledMobileButton = styled.button`
  position: fixed;
  z-index: 999;
  bottom: ${spacing.xsmall};
  left: calc(50% - ${spacing.spacingUnit * 2}px);
  width: ${spacing.spacingUnit * 4}px;
  height: ${spacing.spacingUnit * 1.5}px;
  ${mq.range({ until: breakpoints.mobileWide })} {
    left: calc(50% - ${spacing.spacingUnit * 1.5}px);
    width: ${spacing.spacingUnit * 3}px;
  };
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.brand.primary};
  padding: ${spacing.xsmall} ${spacing.small};
  color: #fff;
  font-weight: ${fonts.weight.semibold};
  border-radius: ${misc.borderRadius};
  border: 0;
  small {
    display: flex;
    padding: 0 3px;
  }
`;

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

interface ModalWrapperProps {
  innerWidth: number;
  currentIndex: number;
  learningstepsTotal: number;
  closeLabel: string;
  outOfLabel: string;
  children: JSX.Element;
  t: any;
};

const ModalWrapperComponent: React.FunctionComponent<ModalWrapperProps> = ({
  innerWidth, currentIndex, learningstepsTotal, closeLabel, outOfLabel, children, t,
}) => {
  if (innerWidth < 601) {
    return (
      <StyledWrapper>
        <Modal
          backgroundColor="grey"
          animation="slide-up"
          animationDuration={200}
          size="fullscreen"
          activateButton={
            <StyledMobileButton type="button">
              {currentIndex + 1}<small> {outOfLabel} </small>{learningstepsTotal}
            </StyledMobileButton>
          }>
          {(onClose: Function) => (
            <>
              <ModalHeader>
                <ModalCloseButton title={closeLabel} onClick={onClose} />
              </ModalHeader>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </Modal>
        <div>
          <LearningPathBadge size="xx-small" background />
          <StyledMiniHeader>{t('learningPath.youAreInALearningPath')}</StyledMiniHeader>
        </div>
      </StyledWrapper>
    );
  }
  return children;
};

export default injectT(ModalWrapperComponent);
