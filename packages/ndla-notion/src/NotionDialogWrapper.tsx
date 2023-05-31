import React, { ReactNode } from 'react';
import { Modal } from '@ndla/modal';
import NotionHeader from './NotionHeader';
import NotionBody from './NotionBody';

interface Props {
  title: string;
  children?: ReactNode;
  closeCallback?: () => void;
  subTitle?: string;
}

const NotionDialogWrapper = ({ title, children, closeCallback, subTitle }: Props) => (
  <Modal controlled isOpen animation="subtle" onClose={() => closeCallback?.()}>
    {(onCloseModal: () => void) => (
      <>
        <NotionHeader title={title} subTitle={subTitle} onClose={onCloseModal} />
        <NotionBody>{children}</NotionBody>
      </>
    )}
  </Modal>
);

export default NotionDialogWrapper;
