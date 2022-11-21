/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ReactNode, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { spacing } from '@ndla/core';
import { ChevronDown, ChevronUp } from '@ndla/icons/lib/common';

const AccordionWrapper = styled.div``;
const Summary = styled.div`
  display: flex;
  flex-direction: row;
`;
const SummaryItems = styled.div``;
const Title = styled.div``;
const ToggleButton = styled.button``;
const Details = styled.div``;

interface CollapseProps {
  isOpen: boolean;
}

const Collapse = styled.div<CollapseProps>`
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0px')};
  overflow: hidden;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`;

export interface BaseAccordionProps {
  children: ReactNode;
  expanded?: boolean;
  icon?: ReactNode;
  initialValue?: boolean;
  onChange?: (isOpen: boolean) => void;
  title?: string;
  titleItems?: ReactNode;
  id: string | number;
}

const BaseAccordion = ({
  expanded,
  children,
  initialValue,
  onChange,
  icon,
  titleItems,
  title,
  id,
}: BaseAccordionProps) => {
  const [_isOpen, _setIsOpen] = useState(initialValue ?? false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOpen = expanded ?? _isOpen;
  const setIsOpen = onChange || _setIsOpen;

  const onOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <Summary id={`${id}-header`} aria-controls={`${id}-content`} onClick={buttonRef.current?.click}>
        {icon}
        <Title>{title}</Title>
        <SummaryItems onClick={(e) => e.stopPropagation()}>{titleItems}</SummaryItems>
        <ToggleButton ref={buttonRef} onClick={onOpenClick} type="button" aria-expanded={isOpen}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </ToggleButton>
      </Summary>
      <Collapse isOpen={isOpen}>
        <Details role="region" id={`${id}-content`} aria-labelledby={`${id}-header`}>
          {children}
        </Details>
      </Collapse>
    </AccordionWrapper>
  );
};

export default BaseAccordion;
