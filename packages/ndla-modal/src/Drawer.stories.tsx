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
import { Modal, ModalTrigger } from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalCloseButton from './ModalCloseButton';
import { defaultParameters } from '../../../stories/defaults';
import Drawer from './Drawer';

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  tags: ['autodocs'],
  component: Drawer,
  parameters: {
    ...defaultParameters,
    docs: {
      controls: { include: ['animation', 'animationDuration', 'size', 'position', 'modalMargin', 'expands'] },
    },
  },
  args: {
    animationDuration: 300,
    size: 'normal',
    modalMargin: 'none',
    expands: false,
  },
};

export default meta;

export const Uncontrolled: StoryFn<typeof Drawer> = ({ ...args }) => {
  return (
    <Modal>
      <ModalTrigger>
        <ButtonV2>Åpne</ButtonV2>
      </ModalTrigger>
      <Drawer {...args}>
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton />
        </ModalHeader>
      </Drawer>
    </Modal>
  );
};

export const Controlled: StoryFn<typeof Drawer> = () => {
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
      <Drawer>
        <ModalHeader>
          <ModalTitle>Opened</ModalTitle>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <p>This modal will be closed by an external useEffect in 10 seconds</p>
        </ModalBody>
      </Drawer>
    </Modal>
  );
};
