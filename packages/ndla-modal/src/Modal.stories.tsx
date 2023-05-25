import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ButtonV2 } from '@ndla/button';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalHeader from './ModalHeader';
import ModalTitle from './ModalTitle';
import ModalCloseButton from './ModalCloseButton';

const meta: Meta<typeof Modal> = {
  title: 'Enkle komponenter/Modal',
  component: Modal,
  tags: ['autodocs'],
  args: {
    animationDuration: 300,
    controlled: false,
    title: 'Hello',
    size: 'full',
    position: 'top',
    activateButton: <ButtonV2>Åpne</ButtonV2>,
    children: (close) => (
      <>
        <ModalHeader>
          <ModalTitle>Tittel</ModalTitle>
          <ModalCloseButton onClick={close} />
        </ModalHeader>
        <ModalBody>Hello</ModalBody>
      </>
    ),
  },
};

export default meta;

export const ModalStory: StoryFn<typeof Modal> = (args) => {
  return <Modal {...args} />;
};

ModalStory.storyName = 'Modal';
