/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { FormEvent, useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { colors, breakpoints, mq } from '@ndla/core';
import { Search as SearchIcon } from '@ndla/icons/common';
import { spacing } from '@ndla/core';
import { Cross as CrossIcon } from '@ndla/icons/action';

import { useTranslation } from 'react-i18next';
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
  border-radius: 100px;
  border: 2px solid ${colors.brand.greyLight};
  padding: ${spacing.xsmall} 8px;
  min-height: 58px;
  ${(props) =>
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
  margin-left: 3px;
`;

const iconStyle = {
  width: '24px',
  height: '24px',
};

type Props = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  value?: string;
  onChange: (value: string) => void;
  filters?: PopupFilterProps;
  activeFilters?: {
    filters: FilterProps[];
    onFilterRemove: (value: string, name: string) => void;
  };
};

const SearchFieldHeader = ({ value, onSubmit, onChange, filters, activeFilters }: Props) => {
  const { t } = useTranslation();
  const [hasFocus, setHasFocus] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const isNarrowScreenMatch = window.matchMedia(`(max-width: ${breakpoints.tablet})`);
    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsNarrowScreen(e.matches);
    };
    isNarrowScreenMatch.addEventListener('change', handleChange);
    handleChange(isNarrowScreenMatch);
    return () => {
      isNarrowScreenMatch.removeEventListener('change', handleChange);
    };
  }, []);

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
        placeholder={
          isNarrowScreen ? t('searchPage.searchFieldPlaceholderShort') : t('searchPage.searchFieldPlaceholder')
        }
        aria-label={t('searchPage.searchFieldPlaceholder')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />
      {value && (
        <ClearButton
          type="button"
          value={t<string>('welcomePage.resetSearch')}
          onClick={() => {
            onChange('');
            if (inputRef && inputRef.current) {
              inputRef.current.focus();
            }
          }}>
          <CrossIcon style={iconStyle} title={t<string>('welcomePage.resetSearch')} />
        </ClearButton>
      )}
      <SearchButton type="submit" value={t<string>('searchPage.search')}>
        <SearchIcon style={iconStyle} title={t<string>('searchPage.search')} />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchFieldHeader;
