import React, { useState } from 'react';
import styled from '@emotion/styled';
import { colors } from '@ndla/core';
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
  padding: 3px;
  ${props =>
    props.inputHasFocus &&
    `
      border-color: ${colors.brand.primary};
    `}
  &:hover {
    border-color: ${colors.brand.primary};
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
  margin-right: 10px;
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
  return (
    <StyledForm action="/search/" inputHasFocus={hasFocus} onSubmit={onSubmit}>
      <SearchButton tabIndex={2} type="submit" value={t('searchPage.search')}>
        <SearchIcon style={{ width: '24px', height: '24px' }} />
      </SearchButton>
      {activeFilters && <ActiveFilters {...activeFilters} />}
      <SearchInput
        tabIndex={1}
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
      <ClearButton type="button" value={t('welcomePage.resetSearch')}>
        <CrossIcon style={{ width: '24px', height: '24px' }} />
      </ClearButton>
      {filters && <PopupFilter {...filters} />}
    </StyledForm>
  );
};

export default injectT(SearchFieldHeader);
