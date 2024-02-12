/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { HTMLAttributes, ReactNode, memo } from "react";
import styled from "@emotion/styled";
import { Item } from "@radix-ui/react-accordion";
import { colors, misc } from "@ndla/core";

interface Props extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  /** Unique id for state handling */
  value: string;
  children: ReactNode;
  gloss?: boolean;
}

const StyledItem = styled(Item)`
  border: 1px solid ${colors.brand.light};
  border-radius: ${misc.borderRadius};
  &[data-gloss="true"] {
    border: none;
    border-radius: 0px;
  }
  &[data-state="open"] {
    border-color: ${colors.brand.primary};
  }
`;

const AccordionItem = ({ children, gloss, ...rest }: Props) => {
  return (
    <StyledItem data-gloss={gloss} {...rest}>
      {children}
    </StyledItem>
  );
};

export default memo(AccordionItem);
