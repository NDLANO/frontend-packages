/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { AccordionMultipleProps, AccordionSingleProps, Root } from '@radix-ui/react-accordion';
import { HTMLAttributes } from 'react';

interface SingleProps extends HTMLAttributes<HTMLDivElement> {
  type: 'single';
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

interface MultipleProps extends HTMLAttributes<HTMLDivElement> {
  type: 'multiple';
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  disabled?: boolean;
}

const AccordionRoot = ({ children, ...rest }: SingleProps | MultipleProps) => {
  return <Root {...rest}>{children}</Root>;
};

export default AccordionRoot;
