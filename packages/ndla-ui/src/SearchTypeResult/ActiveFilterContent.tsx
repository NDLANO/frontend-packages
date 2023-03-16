/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { Cross } from '@ndla/icons/action';
import { spacing, fonts } from '@ndla/core';
import { ButtonV2 } from '@ndla/button';
import { useTranslation } from 'react-i18next';

export const StyledActiveFilterTitle = styled.span`
  white-space: nowrap;
  padding-right: ${spacing.small};
  font-weight: ${fonts.weight.semibold};
`;

const StyledButton = styled(ButtonV2)`
  display: grid;
  grid-template-columns: 1fr auto;
`;

export type FilterProps = {
  value: string;
  title: string;
  name: string;
};

type Props = {
  filter: FilterProps;
  onFilterRemove: (value: string, name: string) => void;
};

const ActiveFilterContent = forwardRef<HTMLButtonElement, Props>(({ filter, onFilterRemove }, ref) => {
  const { t } = useTranslation();
  return (
    <StyledButton
      aria-label={t('searchPage.searchFilterMessages.removeFilter', {
        filterName: filter.title,
      })}
      ref={ref}
      shape="pill"
      onClick={() => onFilterRemove(filter.value, filter.name)}
    >
      <StyledActiveFilterTitle>{filter.title}</StyledActiveFilterTitle>
      <Cross />
    </StyledButton>
  );
});

export default ActiveFilterContent;
