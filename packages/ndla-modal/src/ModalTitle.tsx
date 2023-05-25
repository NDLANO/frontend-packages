import { Dialog, DialogTitleProps } from '@headlessui/react';
import { ElementType } from 'react';

interface Props {}

const ModalTitle = ({ as = 'h1', ...rest }: DialogTitleProps<ElementType> & Props) => {
  return <Dialog.Title as={as} {...rest} />;
};

export default ModalTitle;
