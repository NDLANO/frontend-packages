/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AccordionItemProps, Item } from '@radix-ui/react-accordion';

const AccordionItem = ({ children, ...rest }: AccordionItemProps) => {
  return <Item {...rest}>{children}</Item>;
};

export default AccordionItem;
