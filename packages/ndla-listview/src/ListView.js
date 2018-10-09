import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { cx } from 'react-emotion';
import BEMHelper from 'react-bem-helper';
import { spacing, fonts, colors, misc, breakpoints, mq } from 'ndla-core';
import { injectT } from 'ndla-i18n';
import {
  FilterListPhone,
  ConceptDialogWrapper,
  ConceptDialogContent,
  ConceptDialogImage,
  ConceptDialogText,
} from 'ndla-ui';

import { ChevronDown } from 'ndla-icons/common';
import { List as ListIcon, Grid as GridIcon } from 'ndla-icons/action';

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
    flex: 0 1 33%;
    ${fonts.sizes(16, 1.2)};
  }

  .select-wrapper {
    flex: 0 1 67%;
    border: 1px solid ${colors.brand.greyLight};
    border-radius: ${misc.borderRadius};
    position: relative;
  }

  .select-input {
    // Strip input (the <select> element) of all styles and apply them to wrapper element instead. Also remove default arrow
    border: none;
    display: block;
    width: 100%;
    height: 48px;
    background: transparent;
    padding: 0 ${spacing.normal};
    ${fonts.sizes(16, 1.2)};
    // Remove dropdown ndla-icons
    appearance: none;
    -moz-appearance: none;
    text-indent: 0;
    text-overflow: '';

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

// import ListViewCSS from './listviewCSS';
const ListViewWrapper = styled.div`
  .sorting {
    display: none;
    flex-wrap: wrap;
    justify-content: space-evenly;
    > * {
      &:not(:last-child) {
        margin-right: ${spacing.medium};
      }
    }
    ${mq.range({ from: breakpoints.tabletWide })} {
      display: flex;
    }
  }
  .content {
    list-style: none;

    &.grid {
      display: flex;
    }

    &.list {
      display: block;
    }
  }
  .list-style {
    display: flex;
  }

  /* Style for alphabet filter */
  .alphabet {
    flex: 0 1 100%;
    list-style: none;
    display: flex;
    align-items: stretch;
    height: 32px;
    margin: ${spacing.normal} 0 ${spacing.normal} 0;
  }

  .letter {
    flex: 1 1 32px;
    text-align: center;
    margin: 0;
    button {
      background: transparent;
      border: none;
      color: ${colors.brand.primary};
      text-transform: uppercase;
      font-weight: ${fonts.weight.semibold};
      ${fonts.sizes(18, 1.1)};
      height: 100%;
      width: 100%;
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
const alphabet = 'abcdefghijklmnopqrstuvxyzæøå';

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailedItem: null,
    };
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  getActiveLetters() {
    const { items } = this.props;
    const letters = {};
    const len = items.length;
    for (let i = 0; i < len; i += 1) {
      const item = items[i];
      letters[item.name.charAt(0).toLowerCase()] = true;
    }
    return letters;
  }

  handleSelectItem(detailedItem) {
    this.setState({
      detailedItem,
    });
  }

  render() {
    const {
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
      t,
    } = this.props;

    const { detailedItem } = this.state;

    return (
      <ListViewWrapper>
        {filters && (
          <div {...filterClasses('wrapper-multiple-filters')}>
            {filters.map(filter => (
              <FilterListPhone
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
              {alphabet.split('').map(letter => (
                <li key={`letter-${letter}`} className={cx('letter')}>
                  <button
                    type="button"
                    className={cx('letter-button', {
                      active: selectedLetter === letter,
                      disabled: !this.getActiveLetters()[letter],
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
                clickCallback={() => this.handleSelectItem(item)}
                viewStyle={viewStyle}
              />
            ))}
          </div>
        </div>
        {detailedItem && (
          <ConceptDialogWrapper
            title={detailedItem.name}
            subtitle={detailedItem.category.title}
            content={
              <ConceptDialogContent>
                {detailedItem.image ? (
                  <ConceptDialogImage
                    src={detailedItem.image}
                    alt={detailedItem.description}
                    wide
                  />
                ) : null}
                <ConceptDialogText>
                  {detailedItem.description}
                </ConceptDialogText>
              </ConceptDialogContent>
            }
            modifiers={['visible', 'listview']}
            messages={{
              close: 'Lukk',
              ariaLabel: '',
            }}
            closeCallback={this.handleSelectItem}
            license={detailedItem.license}
            source={detailedItem.source}
            tags={detailedItem.tags}
          />
        )}
      </ListViewWrapper>
    );
  }
}

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
  filterValues: PropTypes.arrayOf([PropTypes.string, PropTypes.number]),
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
  onChangedSearchValue: PropTypes.func,
  searchValue: PropTypes.string,
  sortBy: sortByShape,
  t: PropTypes.func.isRequired,
};

ListView.defaultProps = {
  viewStyle: 'grid',
  selectedLetter: '',
};

export default injectT(ListView);
