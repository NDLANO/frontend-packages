/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ChangeEvent, ReactNode } from "react";
import BEMHelper from "react-bem-helper";
import { useTranslation } from "react-i18next";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { spacing, fonts, colors, misc, breakpoints, mq } from "@ndla/core";
import { List as ListIcon, Grid as GridIcon } from "@ndla/icons/action";
import { FilterListPhone } from "@ndla/ui";
import ListItem from "./ListItem";

const ListViewWrapper = styled.div`
  .sorting {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sorting-wrapper {
      display: flex;
      margin-right: ${spacing.xxlarge};
      &:not(:last-child) {
        margin-right: ${spacing.medium};
      }
      .search-input-wrapper {
        padding: 0;
      }
    }
  }
  .content-wrapper {
    margin-top: ${spacing.normal};
  }
  .content {
    list-style: none;

    &.grid {
      display: flex;
      flex-wrap: wrap;
      margin-left: -${spacing.small};
      margin-right: -${spacing.small};
    }

    &.list {
      display: block;
      margin-left: -${spacing.small};
      margin-right: -${spacing.small};
    }
  }
  .list-style {
    display: none;
    > button:first-of-type {
      margin-right: ${spacing.xsmall};
    }
    ${mq.range({ from: breakpoints.mobileWide })} {
      display: flex;
    }
  }

  .alphabet {
    display: none;
    flex-wrap: wrap;
    flex-grow: 1;
    list-style: none;
    justify-content: space-between;
    height: 32px;
    padding: 0;
    margin: ${spacing.normal} 0 ${spacing.normal} 0;
    ${mq.range({ from: breakpoints.tabletWide })} {
      display: flex;
    }
  }

  .letter {
    text-align: center;
    margin: 0;
    button {
      background: transparent;
      transition: background 100ms ease;
      border: none;
      color: ${colors.brand.primary};
      text-transform: uppercase;
      font-weight: ${fonts.weight.semibold};
      ${fonts.sizes("18px", 1.3)};
      height: ${spacing.normal};
      width: ${spacing.normal};
      border-radius: 50%;
      cursor: pointer;

      &:hover,
      &:focus {
        &:not(.active) {
          background-color: ${colors.brand.lighter};
        }
      }

      &.active {
        background-color: ${colors.brand.primary};
        color: #fff;
      }

      &.disabled {
        pointer-events: none;
        opacity: 0.56;
      }
    }
  }
  .style-button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 48px;
    background-color: ${colors.brand.greyLighter};
    border: none;
    border-radius: ${misc.borderRadius};
    color: ${colors.brand.tertiary};
    margin-left: ${spacing.small} / 2;
    text-align: center;

    &.active {
      background-color: ${colors.brand.lighter};
      color: ${colors.brand.primary};
    }

    &:hover {
      cursor: pointer;
      color: ${colors.brand.primary};
    }
  }
`;

const inputStyle = css`
  width: 100%;
  height: 48px;
  line-height: 48px;
  border: 1px solid ${colors.brand.greyLight};
  border-radius: $border-radius;
  padding-right: ${spacing.large};
  padding-left: ${spacing.normal};
  flex-grow: 1;
  outline: 0;

  &:focus {
    border-color: ${colors.brand.primary};
  }

  @include ${fonts.sizes(16, 20)};
`;

const CountWrapper = styled.h2`
  margin: 24px 0;
  font-weight: 600;
  font-size: 20px;
`;

export interface Category {
  title?: string;
  value?: string;
}

export interface ListItemType {
  id?: string;
  name: string;
  description: string;
  text?: string;
  image?: string;
  subject?: { title?: string; value?: string }[];
  category?: Category | Category[];
  source?: string;
  tags?: string[];
}

const filterClasses = BEMHelper("c-filter");
const searchFieldClasses = new BEMHelper("c-search-field");

interface Option {
  title: string;
  value: string;
  icon: Function;
  noResults?: boolean;
  disabled?: boolean;
}

interface Filter {
  options: Option[] | Option[][];
  onChange: (key: string, values: string[]) => void;
  filterValues?: string[];
  label?: string;
  key: "subject" | "category" | "default";
  isGroupedOptions?: boolean;
}

interface Props {
  items: ListItemType[];
  filters?: Filter[];
  selectedLetterCallback?: (letter: string) => void;
  selectedLetter?: string;
  viewStyle?: "grid" | "list";
  viewStyleToggleable?: boolean;
  disableSearch?: boolean;
  disableViewOption?: boolean;
  onChangedViewStyle?: (e: { viewStyle: "grid" | "list" }) => void;
  alphabet?: Record<string, boolean>;
  onChangedSearchValue?: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  onSelectItem: (item: ListItemType) => void;
  selectedItem?: ReactNode;
  renderMarkdown: (text: string) => ReactNode;
  totalCount: number;
}

const ListView = ({
  items,
  selectedLetter = "",
  selectedLetterCallback,
  disableSearch,
  disableViewOption,
  onChangedViewStyle,
  viewStyle = "grid",
  filters,
  searchValue,
  onChangedSearchValue,
  alphabet,
  onSelectItem,
  selectedItem,
  totalCount,
  renderMarkdown = (text) => {
    return text;
  },
}: Props) => {
  const { t } = useTranslation();
  const hasOption = filters?.some((f) =>
    f.options.some((opt: Option | Option[]) => (Array.isArray(opt) ? opt.length > 0 : true)),
  );
  return (
    <ListViewWrapper>
      {filters && hasOption ? (
        <div {...filterClasses("wrapper-multiple-filters")}>
          {filters.map((filter) => (
            <FilterListPhone
              preid="list-view"
              key={filter.key}
              label={filter.label}
              options={filter.options}
              isGroupedOptions={filter.isGroupedOptions}
              alignedGroup
              showActiveFiltersOnSmallScreen
              values={filter.filterValues}
              messages={{
                useFilter: t(`listview.filters.${filter.key}.useFilter`),
                openFilter: t(`listview.filters.${filter.key}.openFilter`),
                closeFilter: t(`listview.filters.${filter.key}.closeFilter`),
              }}
              onChange={(values: string[]) => {
                filter.onChange(filter.key, values);
              }}
            />
          ))}
        </div>
      ) : null}
      <div className={"sorting"}>
        {!disableSearch && (
          <div className={"sorting-wrapper"}>
            <div className={"search"}>
              <div {...searchFieldClasses()}>
                <div {...searchFieldClasses("input-wrapper", "with-icon", "search-input-wrapper")}>
                  <input
                    css={inputStyle}
                    type="search"
                    placeholder={t(`listview.search.placeholder`)}
                    value={searchValue}
                    onChange={onChangedSearchValue}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
        {!disableViewOption && (
          <div className={"list-style"} aria-hidden="true">
            <button
              type="button"
              className={`style-button ${viewStyle === "list" && "active"}`}
              onClick={() => onChangedViewStyle?.({ viewStyle: "list" })}
            >
              <ListIcon size="normal" />
            </button>
            <button
              type="button"
              className={`style-button ${viewStyle === "grid" && "active"}`}
              onClick={() => onChangedViewStyle?.({ viewStyle: "grid" })}
            >
              <GridIcon />
            </button>
          </div>
        )}

        {selectedLetterCallback && alphabet ? (
          <ul className={"alphabet"}>
            {Object.keys(alphabet).map((letter) => (
              <li key={`letter-${letter}`} className={"letter"}>
                <button
                  type="button"
                  className={`letter-button ${selectedLetter === letter && "active"} ${
                    !alphabet[letter] && "disabled"
                  }`}
                  onClick={() =>
                    selectedLetter === letter ? selectedLetterCallback("") : selectedLetterCallback(letter)
                  }
                  aria-pressed={selectedLetter === letter}
                  aria-label={t("listview.filters.alphabet.letterFilter", {
                    letter: letter,
                  })}
                >
                  {letter}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
      <CountWrapper>{t("listview.hits", { count: totalCount })}</CountWrapper>
      <div className={"content-wrapper"}>
        <div className={`content ${viewStyle}`}>
          {items.map((item) => (
            <ListItem
              item={item}
              key={item.id}
              clickCallback={() => onSelectItem(item)}
              viewStyle={viewStyle}
              renderMarkdown={renderMarkdown}
            />
          ))}
        </div>
      </div>
      {selectedItem}
    </ListViewWrapper>
  );
};

export default ListView;
