/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { injectT, tType } from '@ndla/i18n';
import { colors, spacing, fonts } from '@ndla/core';
// @ts-ignore
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';
// @ts-ignore
import Button from '@ndla/button';
// @ts-ignore
import { LearningPath } from '@ndla/icons/contentType';
// @ts-ignore
import { LearningPathBadge } from '../index-javascript';

const buttonToggleCss = css`
  position: fixed;
  z-index: 999;
  bottom: ${spacing.xsmall};
  left: ${spacing.normal};
  svg {
    width: 20px;
    height: 20px;
    margin-right: ${spacing.xsmall};
    transform: translateY(-2px);
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

type ModalWrapperProps = {
  innerWidth: number;
  closeLabel: string;
  children: JSX.Element;
};

const ModalWrapperComponent: React.FunctionComponent<
  ModalWrapperProps & tType
> = ({ innerWidth, closeLabel, children, t }) => {
  if (innerWidth < 601) {
    return (
      <StyledWrapper>
        <Modal
          backgroundColor="grey"
          animation="slide-up"
          animationDuration={200}
          size="fullscreen"
          activateButton={
            <Button css={buttonToggleCss}>
              <LearningPath />
              <span>Vis læringssti</span>
            </Button>
          }>
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
