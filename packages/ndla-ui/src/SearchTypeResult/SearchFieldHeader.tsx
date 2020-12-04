/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { colors, breakpoints, mq } from '@ndla/core';
// @ts-ignore
import { Search as SearchIcon } from '@ndla/icons/common';
// @ts-ignore
import { Cross as CrossIcon } from '@ndla/icons/action';
import { injectT, tType } from '@ndla/i18n';

import ActiveFilters from './ActiveFilters';
import PopupFilter, { PopupFilterProps } from './PopupFilter';
import { FilterProps } from './ActiveFilterContent';

type StyledProps = {
  inputHasFocus?: boolean;
};

const StyledForm = styled.form<StyledProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background: #fff;
  border-radius: 5px;
  border: 1px solid ${colors.brand.greyLight};
  padding: 7px;
  min-height: 58px;
  column-gap: 10px;
  ${props =>
    props.inputHasFocus &&
    `
      border-color: ${colors.brand.primary};
    `}
  &:hover {
    border-color: ${colors.brand.primary};
  }
`;

const HideOnNarrowScreen = styled.div`
  display: none;
  ${mq.range({ from: breakpoints.desktop })} {
    display: block;
  }
`;

const SearchButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background: unset;
  color: ${colors.brand.primary};
  cursor: pointer;
`;
const ClearButton = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background: unset;
  color: ${colors.text.light};
  cursor: pointer;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: 0;
  outline: 0;
`;

type Props = {
  onSubmit: (event: {}) => void;
  value: string;
  onChange: (value: string) => void;
  filters?: PopupFilterProps;
  activeFilters?: {
    filters: FilterProps[];
    onFilterRemove: (value: string, name: string) => void;
  };
};

const SearchFieldHeader: React.FC<Props & tType> = ({
  value,
  onSubmit,
  onChange,
  filters,
  activeFilters,
  t,
}) => {
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledForm action="/search/" inputHasFocus={hasFocus} onSubmit={onSubmit}>
      {filters && (
        <HideOnNarrowScreen>
          <PopupFilter {...filters} />
        </HideOnNarrowScreen>
      )}
      {activeFilters && <ActiveFilters {...activeFilters} />}
      <SearchInput
        ref={inputRef}
        type="search"
        autoComplete="off"
        id="search"
        name="search"
        placeholder={t('searchPage.searchFieldPlaceholder')}
        aria-label={t('searchPage.searchFieldPlaceholder')}
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      {value && (
        <ClearButton
          type="button"
          value={t('welcomePage.resetSearch')}
          onClick={() => {
            onChange('');
            if (inputRef && inputRef.current) {
              inputRef.current.focus();
            }
          }}>
          <CrossIcon style={{ width: '24px', height: '24px' }} />
        </ClearButton>
      )}
      <SearchButton type="submit" value={t('searchPage.search')}>
        <SearchIcon style={{ width: '24px', height: '24px' }} />
      </SearchButton>
    </StyledForm>
  );
};

export default injectT(SearchFieldHeader);
