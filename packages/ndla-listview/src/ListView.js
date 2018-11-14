import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';
import BEMHelper from 'react-bem-helper';
import { spacing, fonts, colors, misc, breakpoints, mq } from '@ndla/core';
import { injectT } from '@ndla/i18n';
import { FilterListPhone } from '@ndla/ui';
import { ChevronDown } from '@ndla/icons/common';
import { List as ListIcon, Grid as GridIcon } from '@ndla/icons/action';

import ListItem from './ListItem';

/* TODO: USE NDLA-FORM WHEN FORM IS OUT! */
const SelectWrapper = styled.div`
  display: flex;
  height: 48px;
  line-height: 48px;
  align-items: center;

  .select-label {
    font-family: ${fonts.sans};
    font-weight: ${fonts.weight.semibold};
    display: flex;
    ${fonts.sizes('16px', 1.3)};
    margin-right: ${spacing.normal};
    width: 120px;
  }

  .select-wrapper {
    display: flex;
    border: 1px solid ${colors.brand.greyLight};
    border-radius: ${misc.borderRadius};
    margin-right: ${spacing.small};
    padding-right: ${spacing.large};
    position: relative;
  }

  .select-input {
    border: none;
    display: block;
    width: 100%;
    height: 48px;
    background: transparent;
    padding: 0 ${spacing.normal};
    ${fonts.sizes('16px', 1.3)};
    appearance: none;
    -moz-appearance: none;
    text-indent: 0;
    text-overflow: '';
    margin: 0;

    &:hover {
      cursor: pointer;
    }
  }

  .symbol {
    position: absolute;
    right: 0px;
    top: 0px;
    height: 48px;
    width: ${spacing.large};
    display: block;
    text-align: center;
    pointer-events: none;
  }
`;

/* TODO: USE NDLA-FORM WHEN FORM IS OUT! */
const Select = ({ children, label, value, id, onChange }) => (
  <SelectWrapper>
    <label htmlFor={id} className={cx('select-label')}>
      {label}
    </label>
    <div className={cx('select-wrapper')}>
      <select
        className={cx('select-input')}
        value={value}
        onChange={onChange}
        name={id}>
        {children}
      </select>
      <span className={cx('symbol')}>
        <ChevronDown />
      </span>
    </div>
  </SelectWrapper>
);

Select.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

const ListViewWrapper = styled.div`
  .sorting {
    display: none;
    flex-wrap: wrap;
    justify-content: space-between;
    .sorting-wrapper {
      display: flex;
      margin-right: calc(${spacing.large} * 2);
      &:not(:last-child) {
        margin-right: ${spacing.medium};
      }
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      display: flex;
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
    display: flex;
    > button:first-child {
      margin-right: ${spacing.xsmall};
    }
  }

  .alphabet {
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
    list-style: none;
    justify-content: space-between;
    height: 32px;
    padding: 0;
    margin: ${spacing.normal} 0 ${spacing.normal} 0;
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
  sortBy,
  searchValue,
  onChangedSearchValue,
  alphabet,
  onSelectItem,
  selectedItem,
  t,
}) => (
  <ListViewWrapper>
    {filters && (
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
    )}
    <div className={cx('sorting')}>
      {(sortBy || !disableSearch) && (
        <div className={cx('sorting-wrapper')}>
          {sortBy && (
            <div className={cx('sortBy')}>
              <Select
                label={sortBy.label}
                value={sortBy.value}
                id={sortBy.id}
                onChange={sortBy.onChange}>
                {sortBy.options.map(sortOption => (
                  <option key={sortOption.value} value={sortOption.value}>
                    {sortOption.label}
                  </option>
                ))}
              </Select>
            </div>
          )}
          {!disableSearch && (
            <div className={cx('search')}>
              <div {...searchFieldClasses()}>
                <div {...searchFieldClasses('input-wrapper', 'with-icon')}>
                  <input
                    {...searchFieldClasses('input', 'small')}
                    type="search"
                    placeholder="Søk i listevisning"
                    value={searchValue}
                    onChange={onChangedSearchValue}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      {!disableViewOption && (
        <div className={cx('list-style')}>
          <button
            type="button"
            className={cx('style-button', { active: viewStyle === 'list' })}
            onClick={() => onChangedViewStyle({ viewStyle: 'list' })}>
            <ListIcon />
          </button>
          <button
            type="button"
            className={cx('style-button', { active: viewStyle === 'grid' })}
            onClick={() => onChangedViewStyle({ viewStyle: 'grid' })}>
            <GridIcon />
          </button>
        </div>
      )}

      {viewStyle === 'list' && selectedLetterCallback ? (
        <ul className={cx('alphabet')}>
          {Object.keys(alphabet).map(letter => (
            <li key={`letter-${letter}`} className={cx('letter')}>
              <button
                type="button"
                className={cx('letter-button', {
                  active: selectedLetter === letter,
                  disabled: !alphabet[letter],
                })}
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

    <div className={cx('content-wrapper')}>
      <div className={cx('content', { [viewStyle]: true })}>
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
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  filterValues: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  label: PropTypes.string.isRequired,
  key: PropTypes.oneOf(['subject', 'category']),
});

const sortByShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
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
  sortBy: sortByShape,
  onSelectItem: PropTypes.func.isRequired,
  selectedItem: PropTypes.node,
  t: PropTypes.func.isRequired,
};

ListView.defaultProps = {
  viewStyle: 'grid',
  selectedLetter: '',
};

export default injectT(ListView);
