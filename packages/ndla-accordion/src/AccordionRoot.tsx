/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';
import { Root } from '@radix-ui/react-accordion';
import { spacing } from '@ndla/core';

interface SingleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'dir'> {
  type: 'single';
  collapsible?: boolean;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
}

interface MultipleProps extends Omit<HTMLAttributes<HTMLDivElement>, 'dir'> {
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

export default memo(AccordionRoot);
