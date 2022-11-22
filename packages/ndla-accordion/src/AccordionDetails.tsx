/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { ReactNode, useContext } from 'react';
import { AccordionContext } from './AccordionContext';
import { RenderProps } from './AccordionV2';

const Collapse = styled.div<RenderProps>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  overflow: hidden;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

const Details = styled.div`
  padding: ${spacing.xsmall} ${spacing.small};
`;

interface Props {
  className?: string;
  children?: ReactNode;
}

const AccordionDetails = ({ className, children }: Props) => {
  const { isOpen, id } = useContext(AccordionContext);

  return (
    <Collapse isOpen={isOpen}>
      <Details className={className} role="region" id={`${id}-content`} aria-labelledby={`${id}-header`}>
        {children}
      </Details>
    </Collapse>
  );
};

export default AccordionDetails;
