import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { Cross } from '@ndla/icons/action';
import { spacing, mq, breakpoints, colors, misc, fonts } from '@ndla/core';

const StyledActiveFilter = styled('button')`
  height: 38px;
  border: 0;
  background: ${colors.brand.light};
  color: ${colors.brand.dark};
  border-radius: ${misc.borderRadius};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.small};
  width: 100%;
  justify-content: space-between;
  ${fonts.sizes('16px', '36px')};
  font-weight: ${fonts.weight.semibold};

  ${mq.range({ from: breakpoints.desktop })} {
    width: auto;
    justify-content: flex-start;
    ${fonts.sizes('18px', '40px')};
    height: 40px;
  }
`;

export const StyledActiveFilterTitle = styled('span')`
  white-space: nowrap;
  padding-right: ${spacing.small};
`;

interface Props {
  filter: {
    value: string;
    title: string;
    filterName?: string;
  };
  onFilterRemove: (value: string, filterName?: string) => void;
  ariaLabel: string;
}

const ActiveFilterContent = forwardRef<HTMLButtonElement, Props>(({ filter, onFilterRemove, ariaLabel }, ref) => (
  <StyledActiveFilter
    aria-label={ariaLabel}
    type="button"
    ref={ref}
    onClick={() => onFilterRemove(filter.value, filter.filterName)}
  >
    <StyledActiveFilterTitle>{filter.title}</StyledActiveFilterTitle>
    <Cross />
  </StyledActiveFilter>
));

export default ActiveFilterContent;
