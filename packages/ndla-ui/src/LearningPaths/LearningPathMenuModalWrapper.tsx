/**
 * Copyright (c) 2019-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { css } from '@emotion/core';
import { colors, spacing, fonts, misc, typography } from '@ndla/core';
import Modal, { ModalHeader, ModalBody, ModalCloseButton } from '@ndla/modal';

const numbersButtonCSS = css`
  display: flex;
  align-items: center;
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

const wrapperCSS = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -${spacing.normal} ${spacing.medium};
  background: ${colors.brand.lighter};
  padding: ${spacing.xsmall} ${spacing.normal};
`;

interface ModalWrapperProps {
  innerWidth: number;
  currentIndex: number;
  learningstepsTotal: number;
  closeLabel: string;
  outOfLabel: string;
  children: React.ReactNode;
};

const ModalWrapperComponent: React.FunctionComponent<ModalWrapperProps> = ({
  innerWidth, currentIndex, learningstepsTotal, closeLabel, outOfLabel, children
}) => (
  innerWidth < 601 ? (
    <div css={wrapperCSS}>
      <Modal
        backgroundColor="grey"
        animation="slide-up"
        animationDuration={200}
        size="fullscreen"
        activateButton={
          <button type="button" css={numbersButtonCSS}>{currentIndex + 1}<small> {outOfLabel} </small>{learningstepsTotal + 1}</button>
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
      <div css={typography.smallHeading}>Du er nå inne i en læringssti</div>
    </div>
  ) : <>{children}</>
);

export default ModalWrapperComponent;
