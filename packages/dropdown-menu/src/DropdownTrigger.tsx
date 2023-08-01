/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, forwardRef } from 'react';
import { DropdownMenuTriggerProps, Trigger } from '@radix-ui/react-dropdown-menu';

interface Props extends DropdownMenuTriggerProps {
  children: ReactNode;
}

const DropdownTrigger = forwardRef<HTMLButtonElement, Props>(({ children, ...props }, ref) => {
  return (
    <Trigger asChild ref={ref} {...props}>
      {children}
    </Trigger>
  );
});

export default DropdownTrigger;
