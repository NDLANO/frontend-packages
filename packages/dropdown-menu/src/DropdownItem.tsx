/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DropdownMenuItem, DropdownMenuItemProps } from '@radix-ui/react-dropdown-menu';
import { forwardRef } from 'react';

interface Props extends DropdownMenuItemProps {}
const DropdownItem = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
  return (
    <DropdownMenuItem asChild ref={ref} {...rest}>
      {children}
    </DropdownMenuItem>
  );
});

export default DropdownItem;
