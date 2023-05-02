/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { colors } from '@ndla/core';
import { Item } from '@radix-ui/react-accordion';
import { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  /** Unique id for state handling */
  value: string;
  children: ReactNode;
}

const StyledItem = styled(Item)`
  border: 1px solid ${colors.brand.light};
  &[data-state='open'] {
    border-color: ${colors.brand.primary};
  }
`;

const AccordionItem = ({ children, ...rest }: Props) => {
  return <StyledItem {...rest}>{children}</StyledItem>;
};

export default AccordionItem;
