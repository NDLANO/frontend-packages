/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { Dialog, DialogTitleProps } from '@headlessui/react';
import { ElementType } from 'react';

interface Props {}

const ModalTitle = ({ as = 'h1', ...rest }: DialogTitleProps<ElementType> & Props) => {
  return <Dialog.Title as={as} {...rest} />;
};

export default ModalTitle;
