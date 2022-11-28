/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as Accordion from '@radix-ui/react-accordion';
import { ComponentProps, ReactNode } from 'react';

const AccordionContainer = ({ children, ...rest }: ComponentProps<typeof Accordion.Root>) => {
  return <Accordion.Root {...rest}>{children}</Accordion.Root>;
};

export default AccordionContainer;
