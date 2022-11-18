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

interface Props {
  children: ReactNode;
  expanded?: boolean;
  icon?: ReactNode;
  initialValue?: boolean;
  onChange?: (isOpen: boolean) => void;
  title?: string;
  titleItems?: ReactNode;
}
const Summary = styled.div``;
const AccordionWrapper = styled.div``;
const ToggleButton = styled.button``;
const SummaryItems = styled.div``;
const Title = styled.div``;

const AccordionV2 = ({ expanded, children, initialValue, onChange, icon, titleItems, title }: Props) => {
  const [_isOpen, _setIsOpen] = useState(initialValue ?? false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isOpen = expanded ?? _isOpen;
  const setIsOpen = onChange || _setIsOpen;

  const onOpenClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionWrapper>
      <Summary onClick={buttonRef.current?.click}>
        {icon}
        <Title>{title}</Title>
        <SummaryItems onClick={(e) => e.stopPropagation()}>{titleItems}</SummaryItems>
        <ToggleButton ref={buttonRef} onClick={onOpenClick} type="button" aria-expanded={isOpen}>
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </ToggleButton>
      </Summary>
      {isOpen && <div>{children}</div>}
    </AccordionWrapper>
  );
};

export default AccordionV2;
