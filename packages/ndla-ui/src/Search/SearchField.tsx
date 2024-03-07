/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { FocusEvent, MouseEvent, RefObject } from "react";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import { ButtonV2, IconButtonV2 } from "@ndla/button";
import { colors, spacing, mq, breakpoints, misc, fonts } from "@ndla/core";
import { Search as SearchIcon } from "@ndla/icons/common";

import ActiveFilters from "./ActiveFilters";
import LoadingWrapper from "./LoadingWrapper";

const SearchButton = styled(IconButtonV2)`
  position: absolute;
  padding: ${spacing.small};
  ${mq.range({ from: breakpoints.tablet })} {
    top: 5px;
    right: 10px;
  }
`;

const CloseButton = styled(ButtonV2)`
  position: absolute;
  padding: ${spacing.small};
  right: ${spacing.large};
  color: ${colors.text.light};
  text-transform: uppercase;
  ${fonts.sizes("14px", "16px")};
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 0 ${spacing.large} 0 ${spacing.normal};
  display: flex;
  align-items: center;
  flex-flow: row-reverse;
  border: 1px solid ${colors.brand.greyLight};
  border-radius: ${misc.borderRadius};

  &:active,
  &:hover {
    border: 1px solid ${colors.brand.primary};
  }

  ${mq.range({ from: breakpoints.tablet })} {
    position: relative;
    padding: 0;
  }
`;

const FiltersWrapper = styled.div`
  display: flex;
  height: ${spacing.large};
  background: ${colors.white};
  padding-left: ${spacing.small};
  padding-right: 0;
  border-right: 0;
  flex-shrink: 0;
  align-items: center;
  ${mq.range({ from: breakpoints.mobileWide, until: breakpoints.desktop })} {
    padding-right: ${spacing.xsmall};
  }
  ${mq.range({ from: breakpoints.tablet })} {
    height: 58px;
    padding-right: ${spacing.small};
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: ${spacing.large};
  line-height: 28px;
  margin: 2px;
  border: 0px;
  &[data-has-filters="true"] {
    border-left: 0px;
  }
  padding-right: ${spacing.large};
  padding-left: ${spacing.small};
  flex-grow: 1;
  outline: 0;
  ${mq.range({ from: breakpoints.tablet })} {
    height: 58px;
    line-height: 58px;
    ${fonts.sizes("18px", "24px")};
  }
`;

interface Props {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  filters?: { value: string; title: string }[];
  onFilterRemove?: (value: string, filterName?: string) => void;
  onFocus?: (event?: FocusEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  loading?: boolean;
  inputRef?: RefObject<HTMLInputElement>;
}

const SearchField = ({
  placeholder,
  value,
  onChange,
  filters,
  onClick,
  onFocus,
  onBlur,
  loading,
  onFilterRemove,
  inputRef,
}: Props) => {
  const { t } = useTranslation();
  const handleOnFilterRemove = (value: string, filterName?: string) => {
    onFilterRemove?.(value, filterName);
    inputRef?.current?.focus();
    onFocus?.();
  };
  return (
    <InputWrapper>
      {loading && <LoadingWrapper value={value} />}
      <StyledInput
        data-has-filters={!!filters?.length}
        ref={inputRef}
        type="search"
        aria-autocomplete="list"
        autoComplete="off"
        id="search"
        name="search"
        placeholder={placeholder}
        aria-label={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={onFocus}
        onClick={onClick}
      />
      {filters && filters.length > 0 && (
        <FiltersWrapper>
          <ActiveFilters filters={filters} onFilterRemove={handleOnFilterRemove} />
        </FiltersWrapper>
      )}
      {value !== "" && (
        <CloseButton
          variant="stripped"
          onClick={() => {
            onChange("");
            onFocus?.();
            inputRef?.current?.focus();
          }}
        >
          {t("welcomePage.resetSearch")}
        </CloseButton>
      )}
      <SearchButton
        variant="stripped"
        type="submit"
        value="Search"
        aria-label={t("siteNav.search")}
        title={t("siteNav.search")}
      >
        <SearchIcon />
      </SearchButton>
    </InputWrapper>
  );
};

export default SearchField;
