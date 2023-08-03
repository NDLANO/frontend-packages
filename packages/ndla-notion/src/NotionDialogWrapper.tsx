import { ReactNode } from 'react';
import { Modal, ModalContent } from '@ndla/modal';
import NotionHeader from './NotionHeader';
import NotionBody from './NotionBody';

interface Props {
  title: string;
  children?: ReactNode;
  subTitle?: string;
}

const NotionDialogWrapper = ({ title, children, subTitle }: Props) => (
  <Modal defaultOpen>
    <ModalContent animation="subtle">
      <NotionHeader title={title} subTitle={subTitle} />
      <NotionBody>{children}</NotionBody>
    </ModalContent>
  </Modal>
);

export default NotionDialogWrapper;
