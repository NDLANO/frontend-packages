/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonV2 } from '@ndla/button';
import { Modal, ModalContent, ModalTrigger } from './Modal';
import ModalBody from './ModalBody';
import ModalCloseButton from './ModalCloseButton';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import { ModalContentProps } from './types';
import { defaultParameters } from '../../../stories/defaults';

const meta: Meta<typeof ModalContent> = {
  title: 'Components/Modal',
  tags: ['autodocs'],
  component: ModalContent,
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

export const Story: StoryFn<ModalContentProps> = (args) => {
  return (
    <Modal {...args}>
      <ModalTrigger>
        <ButtonV2>Åpne</ButtonV2>
      </ModalTrigger>
      <ModalContent {...args}>
        <ModalHeader>
          <ModalTitle>Tittel</ModalTitle>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>Hello</ModalBody>
      </ModalContent>
    </Modal>
  );
};

Story.storyName = 'Modal';

export const Controlled: StoryFn<ModalContentProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setIsOpen(false), 10000);
    }
  }, [isOpen]);

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <ModalTrigger>
        <ButtonV2>Åpne</ButtonV2>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <p>This modal will be closed by an external useEffect in 10 seconds</p>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export const Uncontrolled: StoryFn<ModalContentProps> = () => {
  return (
    <Modal>
      <ModalTrigger>
        <ButtonV2>Åpne</ButtonV2>
      </ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton />
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};

export const CustomHeightAndWidth: StoryFn<ModalContentProps> = () => {
  return (
    <Modal>
      <ModalTrigger>
        <ButtonV2>Åpne</ButtonV2>
      </ModalTrigger>
      <ModalContent size={{ width: 'large', height: 'xsmall' }}>
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton />
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
};
