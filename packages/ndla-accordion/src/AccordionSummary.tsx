/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { colors, fonts, misc, spacing } from '@ndla/core';
import { ChevronDown, ChevronUp } from '@ndla/icons/common';
import { KeyboardEvent, MouseEvent, ReactNode, useContext, useRef } from 'react';
import { AccordionContext } from './AccordionContext';

const Summary = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${colors.brand.lighter};
  border-radius: ${misc.borderRadius};
  min-height: 40px;
  align-items: center;
  cursor: pointer;
  padding-left: ${spacing.small};
`;

const ToggleButton = styled.button`
  align-self: stretch;
  margin-left: auto;
  min-width: 40px;
  border: none;
  background: none;
  cursor: pointer;
  svg {
    width: 24px;
    height: 24px;
  }
`;

interface Props {
  className?: string;
  toggleButtonCSS?: SerializedStyles;
  children?: ReactNode;
}

const AccordionSummary = ({ className, toggleButtonCSS, children }: Props) => {
  const { isOpen, id, onChange } = useContext(AccordionContext);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange(!isOpen);
  };

  const onKeydown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === ' ' || e.key === 'Enter') {
      buttonRef.current?.click();
    }
  };

  return (
    <Summary
      className={className}
      role="button"
      id={`${id}-header`}
      aria-controls={`${id}-content`}
      onClick={() => buttonRef.current?.click()}
      onKeyDown={onKeydown}
      tabIndex={0}>
      {children}
      <ToggleButton
        css={toggleButtonCSS}
        ref={buttonRef}
        tabIndex={-1}
        onClick={onClick}
        type="button"
        aria-expanded={isOpen}>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </ToggleButton>
    </Summary>
  );
};

export default AccordionSummary;
