/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonV2 } from '@ndla/button';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalCloseButton from './ModalCloseButton';
import { defaultParameters } from '../../../stories/defaults';
import { DialogProps } from './types';

const meta: Meta<typeof Modal> = {
  title: 'Enkle komponenter/Modal',
  tags: ['autodocs'],
  component: Modal,
  parameters: {
    ...defaultParameters,
    docs: {
      controls: { include: ['animation', 'animationDuration', 'size', 'position', 'modalMargin', 'expands'] },
    },
  },
  args: {
    animationDuration: 300,
    animation: 'zoom',
    size: 'normal',
    position: 'center',
    modalMargin: 'none',
    expands: false,
  },
};

export default meta;

export const Story: StoryFn<DialogProps> = (args) => {
  return (
    <Modal activateButton={<ButtonV2>Åpne</ButtonV2>} {...args}>
      {(close) => (
        <>
          <ModalHeader>
            <ModalTitle>Tittel</ModalTitle>
            <ModalCloseButton onClick={close} />
          </ModalHeader>
          <ModalBody>Hello</ModalBody>
        </>
      )}
    </Modal>
  );
};

Story.storyName = 'Modal';

export const Controlled: StoryFn<DialogProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ButtonV2 onClick={() => setIsOpen(true)}>Åpne</ButtonV2>
      <Modal controlled isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {(close) => (
          <ModalHeader>
            <ModalTitle>Opened</ModalTitle>
            <ModalCloseButton onClick={close} />
          </ModalHeader>
        )}
      </Modal>
    </>
  );
};

export const Uncontrolled: StoryFn<DialogProps> = () => {
  return (
    <Modal activateButton={<ButtonV2>Åpne</ButtonV2>}>
      {(close) => (
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton onClick={close} />
        </ModalHeader>
      )}
    </Modal>
  );
};

export const CustomHeightAndWidth: StoryFn<DialogProps> = () => {
  return (
    <Modal size={{ width: 'large', height: 'xsmall' }} activateButton={<ButtonV2>Åpne</ButtonV2>}>
      {(close) => (
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton onClick={close} />
        </ModalHeader>
      )}
    </Modal>
  );
};
