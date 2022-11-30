/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AccordionMultipleProps, AccordionSingleProps, Root } from '@radix-ui/react-accordion';

const AccordionRoot = ({ children, ...rest }: AccordionSingleProps | AccordionMultipleProps) => {
  return <Root {...rest}>{children}</Root>;
};

export default AccordionRoot;
