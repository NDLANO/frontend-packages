/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { Root } from '@radix-ui/react-accordion';
import { spacing } from '@ndla/core';
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

const StyledRoot = styled(Root)`
  display: flex;
  flex-direction: column;
  gap: ${spacing.small};
`;

const AccordionRoot = ({ children, ...rest }: SingleProps | MultipleProps) => {
  return <StyledRoot {...rest}>{children}</StyledRoot>;
};

export default AccordionRoot;
