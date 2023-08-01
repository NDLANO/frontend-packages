/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { ReactNode, useCallback, useState } from 'react';
import { spacing, mq, breakpoints, colors } from '@ndla/core';
import { ModalHeader, ModalBody, ModalTrigger, ModalCloseButton, Modal, ModalContent } from '@ndla/modal';
import { css } from '@emotion/react';
import { ButtonV2 } from '@ndla/button';
import { LearningPath } from '@ndla/icons/contentType';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';

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

const StyledModalContent = styled(ModalContent)`
  background-color: ${colors.brand.greyLightest};
`;

type ModalWrapperProps = {
  innerWidth: number;
  children: (arg: VoidFunction) => ReactNode;
};

const ModalWrapperComponent = ({ innerWidth, children }: ModalWrapperProps) => {
  const [open, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  if (innerWidth < 601) {
    return (
      <Modal open={open} onOpenChange={setIsOpen}>
        <ModalTrigger>
          <ButtonV2 css={buttonToggleCss}>
            <LearningPath />
            <span>{t('learningPath.openMenuTooltip')}</span>
          </ButtonV2>
        </ModalTrigger>
        <StyledModalContent animationDuration={200} size="full">
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>{children(onClose)}</ModalBody>
        </StyledModalContent>
      </Modal>
    );
  }
  return <>{children(() => {})}</>;
};

export default ModalWrapperComponent;
