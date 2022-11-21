/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import styled from '@emotion/styled';
import { ReactNode } from 'react';
import { RenderProps } from './BaseAccordion';

const Collapse = styled.div<RenderProps>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  overflow: hidden;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

const Details = styled.div``;

interface Props {
  className?: string;
  isOpen: boolean;
  id: string | number;
  children: ReactNode;
}

const AccordionDetails = ({ className, id, isOpen, children }: Props) => {
  return (
    <Collapse isOpen={isOpen}>
      <Details className={className} role="region" id={`${id}-content`} aria-labelledby={`${id}-header`}>
        {children}
      </Details>
    </Collapse>
  );
};

export default AccordionDetails;
