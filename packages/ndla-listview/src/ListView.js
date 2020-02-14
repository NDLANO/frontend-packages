import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import BEMHelper from 'react-bem-helper';
import { spacing, fonts, colors, misc, breakpoints, mq } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import { FilterListPhone } from '@ndla/ui';
import { List as ListIcon, Grid as GridIcon } from '@ndla/icons/action';

import ListItem from './ListItem';

const ListViewWrapper = styled.div`
  .sorting {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .sorting-wrapper {
      display: flex;
      margin-right: calc(${spacing.large} * 2);
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
      ${fonts.sizes('18px', 1.3)};
      height: ${spacing.normal};
      width: ${spacing.normal};
      border-radius: 50%;

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
    .c-icon {
      width: 24px;
      height: 24px;
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

const listItemShape = PropTypes.shape({
  name: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.string,
  subject: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  category: PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  }),
  source: PropTypes.string,
  license: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
});

const filterClasses = BEMHelper('c-filter');
const searchFieldClasses = new BEMHelper('c-search-field');

const ListView = ({
  items,
  selectedLetter,
  selectedLetterCallback,
  disableSearch,
  disableViewOption,
  onChangedViewStyle,
  viewStyle,
  filters,
  searchValue,
  onChangedSearchValue,
  alphabet,
  onSelectItem,
  selectedItem,
  t,
}) => (
  <ListViewWrapper>
    {filters ? (
      <div {...filterClasses('wrapper-multiple-filters')}>
        {filters.map(filter => (
          <FilterListPhone
            preid="list-view"
            key={filter.key}
            label={filter.label}
            options={filter.options}
            alignedGroup
            values={filter.filterValues}
            messages={{
              useFilter: t(`listview.filters.${filter.key}.useFilter`),
              openFilter: t(`listview.filters.${filter.key}.openFilter`),
              closeFilter: t(`listview.filters.${filter.key}.closeFilter`),
            }}
            onChange={values => {
              filter.onChange(filter.key, values);
            }}
          />
        ))}
      </div>
    ) : null}
    <div className={'sorting'}>
      {!disableSearch && (
        <div className={'sorting-wrapper'}>
          <div className={'search'}>
            <div {...searchFieldClasses()}>
              <div
                {...searchFieldClasses(
                  'input-wrapper',
                  'with-icon',
                  'search-input-wrapper',
                )}>
                <input
                  css={inputStyle}
                  type="search"
                  placeholder="Søk i listevisning"
                  value={searchValue}
                  onChange={onChangedSearchValue}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {!disableViewOption && (
        <div className={'list-style'}>
          <button
            type="button"
            className={`style-button ${viewStyle === 'list' && 'active'}`}
            onClick={() => onChangedViewStyle({ viewStyle: 'list' })}>
            <ListIcon />
          </button>
          <button
            type="button"
            className={`style-button ${viewStyle === 'grid' && 'active'}`}
            onClick={() => onChangedViewStyle({ viewStyle: 'grid' })}>
            <GridIcon />
          </button>
        </div>
      )}

      {selectedLetterCallback ? (
        <ul className={'alphabet'}>
          {Object.keys(alphabet).map(letter => (
            <li key={`letter-${letter}`} className={'letter'}>
              <button
                type="button"
                className={`letter-button ${selectedLetter === letter &&
                  'active'} ${!alphabet[letter] && 'disabled'}`}
                onClick={() =>
                  selectedLetter === letter
                    ? selectedLetterCallback('')
                    : selectedLetterCallback(letter)
                }>
                {letter}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
    <div className={'content-wrapper'}>
      <div className={`content ${viewStyle}`}>
        {items.map(item => (
          <ListItem
            item={item}
            key={item.id}
            clickCallback={() => onSelectItem(item)}
            viewStyle={viewStyle}
          />
        ))}
      </div>
    </div>
    {selectedItem}
  </ListViewWrapper>
);

const filterShapes = PropTypes.shape({
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      icon: PropTypes.func,
      noResults: PropTypes.bool,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  filterValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  label: PropTypes.string.isRequired,
  key: PropTypes.oneOf(['subject', 'category']),
});

ListView.propTypes = {
  items: PropTypes.arrayOf(listItemShape).isRequired,
  filters: PropTypes.arrayOf(filterShapes),
  selectedLetterCallback: PropTypes.func,
  selectedLetter: PropTypes.string,
  viewStyle: PropTypes.oneOf(['grid', 'list']),
  viewStyleToggleable: PropTypes.bool,
  disableSearch: PropTypes.bool,
  disableViewOption: PropTypes.bool,
  onChangedViewStyle: (props, propName, componentName) => {
    if (
      props.disableViewOption !== true &&
      typeof props[propName] !== 'function'
    ) {
      return new Error(
        `Invalid prop ${propName} supplied to ${componentName}. Must be a function when disableViewOption !== true.`,
      );
    }
    return null;
  },
  alphabet: PropTypes.objectOf(PropTypes.bool),
  onChangedSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
  onSelectItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.node,
  t: PropTypes.func.isRequired,
};

ListView.defaultProps = {
  viewStyle: 'grid',
  selectedLetter: '',
};

export default injectT(ListView);
