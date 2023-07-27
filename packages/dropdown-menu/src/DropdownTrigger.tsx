/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode } from 'react';
import { Trigger } from '@radix-ui/react-dropdown-menu';

interface Props {
  children: ReactNode;
}

const DropdownTrigger = ({ children }: Props) => {
  return <Trigger asChild>{children}</Trigger>;
};

export default DropdownTrigger;
