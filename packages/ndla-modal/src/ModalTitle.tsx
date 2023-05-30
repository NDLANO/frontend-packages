/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// import { Dialog, DialogTitleProps } from '@headlessui/react';
import { Title, DialogTitleProps } from '@radix-ui/react-dialog';
import { ElementType } from 'react';

interface Props {
  as?: ElementType;
}

const ModalTitle = ({ as: Element = 'h1', ...rest }: DialogTitleProps & Props) => {
  return (
    <Title asChild>
      <Element {...rest} />
    </Title>
  );
};

export default ModalTitle;
