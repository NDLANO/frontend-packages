/**
 * Copyright (c) 2020-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { FormEvent, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { spacing, colors } from '@ndla/core';
import { Cross as CrossIcon } from '@ndla/icons/action';
import { Search as SearchIcon } from '@ndla/icons/common';

import SubjectFilters, { SubjectFilterProps } from './components/SubjectFilters';

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
  isNarrowScreen?: boolean;
};

const SearchFieldHeader = ({
  value,
  onSubmit,
  onChange,
  filters,
  activeFilters,
  isNarrowScreen,
}: Props & SubjectFilterProps) => {
  const { t } = useTranslation();
  const [hasFocus, setHasFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledForm action="/search/" inputHasFocus={hasFocus} onSubmit={onSubmit}>
      {!isNarrowScreen && (
        <SubjectFilters filters={filters} activeFilters={activeFilters} isNarrowScreen={isNarrowScreen} />
      )}
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
          value={t('welcomePage.resetSearch')}
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
        >
          <CrossIcon style={iconStyle} title={t('welcomePage.resetSearch')} />
        </ClearButton>
      )}
      <SearchButton type="submit" value={t('searchPage.search')}>
        <SearchIcon style={iconStyle} title={t('searchPage.search')} />
      </SearchButton>
    </StyledForm>
  );
};

export default SearchFieldHeader;
