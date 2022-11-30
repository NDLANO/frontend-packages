/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, misc, spacing } from '@ndla/core';
import { ChevronDown } from '@ndla/icons/common';
import { Header, Trigger } from '@radix-ui/react-accordion';
import { forwardRef, HTMLAttributes } from 'react';

const StyledHeader = styled(Header)`
  display: flex;
  background: ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  cursor: pointer;
  margin: 0;
  padding-left: ${spacing.small};
`;

const StyledTrigger = styled(Trigger)`
  flex: 1;
  display: flex;
  min-height: 40px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

const StyledChevron = styled(ChevronDown)`
  margin-left: auto;
  ${StyledTrigger}[data-state='open'] > & {
    transform: rotate(180deg);
  }
  width: 24px;
  height: 24px;
`;

interface Props extends HTMLAttributes<HTMLButtonElement> {
  toggleButtonCSS?: SerializedStyles;
}

const AccordionHeader = forwardRef<HTMLButtonElement, Props>(({ toggleButtonCSS, children, ...rest }, ref) => {
  return (
    <StyledHeader>
      <StyledTrigger ref={ref} {...rest}>
        {children}
        <StyledChevron css={toggleButtonCSS} />
      </StyledTrigger>
    </StyledHeader>
  );
});

export default AccordionHeader;
