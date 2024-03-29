/**
 * Copyright (c) 2023-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { DropdownMenuProps, Root } from "@radix-ui/react-dropdown-menu";

interface Props extends DropdownMenuProps {}

const DropdownMenu = (props: Props) => {
  return <Root {...props} />;
};

export default DropdownMenu;
