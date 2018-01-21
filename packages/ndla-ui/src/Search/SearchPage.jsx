import React, { Fragment } from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import { ChevronRight, Additional } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';

import SafeLink from '../common/SafeLink';
import FilterList from '../filter/FilterList';
import SearchField from './SearchField';
import FilterTabs from '../filter/FilterTabs';
import ActiveFilters from './ActiveFilters';

const classes = BEMHelper('c-search-page');

export const SearchPage = ({
  searchString,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onSearchFieldFilterRemove,
  searchFieldFilters,
  // only on narrow screen
  activeFilters,
  onActiveFilterRemove,
  filters,
  children,
  messages,
  closeUrl,
}) => (
  <div {...classes()}>
    <SafeLink to={closeUrl} {...classes('close-button')}>
      <span>{messages.closeButton}</span> <Cross />
    </SafeLink>
    <div {...classes('search-field-wrapper')}>
      <SearchField
        value={searchString}
        onChange={onSearchFieldChange}
        placeholder={searchFieldPlaceholder}
        filters={searchFieldFilters}
        onFilterRemove={onSearchFieldFilterRemove}
      />
    </div>
    <div {...classes('filter-result-wrapper')}>
      <div {...classes('filter-wrapper')}>
        <h2>{messages.filterHeading}</h2>
        {filters}
      </div>
      <div {...classes('result-wrapper')}>
        <h2>{messages.resultHeading}</h2>
        <div {...classes('active-filters')}>
          <ActiveFilters
            filters={activeFilters}
            onFilterRemove={onActiveFilterRemove}
          />
        </div>
        {children}
      </div>
    </div>
  </div>
);

SearchPage.propTypes = {
  // should be <Fragment />
  filters: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  searchString: PropTypes.string.isRequired,
  onSearchFieldChange: PropTypes.func.isRequired,
  searchFieldPlaceholder: PropTypes.string.isRequired,
  onSearchFieldFilterRemove: PropTypes.func.isRequired,
  searchFieldFilters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    }),
  ),
  activeFilters: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
      filterName: PropTypes.string.isRequired,
    }),
  ),
  onActiveFilterRemove: PropTypes.func.isRequired,
  messages: PropTypes.shape({
    filterHeading: PropTypes.string.isRequired,
    resultHeading: PropTypes.string,
    closeButton: PropTypes.string.isRequired,
  }).isRequired,
  closeUrl: PropTypes.string.isRequired,
};

const resultClasses = BEMHelper('c-search-result');

export const SearchResult = ({
  tabOptions,
  children,
  messages,
  searchString,
  currentTab,
  onTabChange,
}) => (
  <div {...resultClasses()}>
    <h1>
      {messages.searchStringLabel} <span>{searchString}</span>
    </h1>
    <FilterTabs
      value={currentTab}
      options={tabOptions}
      contentId="search-result-content"
      onChange={onTabChange}>
      {children}
    </FilterTabs>
    <div {...resultClasses('narrow-result')}>{children}</div>
  </div>
);

SearchResult.propTypes = {
  tabOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  messages: PropTypes.shape({
    searchStringLabel: PropTypes.string.isRequired,
  }).isRequired,
  searchString: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

const searchResultItemClasses = BEMHelper('c-search-result-item');

const searchResultItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  breadcrumb: PropTypes.arrayOf(PropTypes.string),
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      display: PropTypes.string.isRequired,
    }),
  ),
  additional: PropTypes.bool,
  image: PropTypes.node,
  ingress: PropTypes.string.isRequired,
  contentTypeIcon: PropTypes.node.isRequired,
  contentTypeLabel: PropTypes.string.isRequired,
});

const messagesShape = PropTypes.shape({
  subjectsLabel: PropTypes.string.isRequired,
});

const SearchResultItem = ({ item, messages }) => (
  <li key={item.title} {...searchResultItemClasses()}>
    <div {...searchResultItemClasses('header')}>
      <h3>
        <SafeLink to={item.url}>{item.title}</SafeLink>
      </h3>
      {item.contentTypeIcon}
      <span {...searchResultItemClasses('content-type-label')}>
        {item.contentTypeLabel}
      </span>
      {item.additional && (
        <span {...searchResultItemClasses('additional')}>
          <Additional className="c-icon--20" />
        </span>
      )}
    </div>
    {item.breadcrumb &&
      item.breadcrumb.length > 0 && (
        <div {...searchResultItemClasses('breadcrumb')}>
          {item.breadcrumb.map((breadcrumbItem, index) => {
            let icon = null;

            if (index !== item.breadcrumb.length - 1) {
              icon = <ChevronRight />;
            }

            return (
              <Fragment key={breadcrumbItem}>
                <span>{breadcrumbItem}</span>
                {icon}
              </Fragment>
            );
          })}
        </div>
      )}
    <div {...searchResultItemClasses('content')}>
      <p {...searchResultItemClasses('ingress')}>{item.ingress}</p>
      {item.image}
    </div>
    {item.subjects &&
      item.subjects.length !== 0 && (
        <div {...searchResultItemClasses('subjects')}>
          <span>{messages.subjectsLabel}</span>
          <ul>
            {item.subjects.map(subject => (
              <li>
                <SafeLink to={subject.url}>{subject.display}</SafeLink>
              </li>
            ))}
          </ul>
        </div>
      )}
  </li>
);

SearchResultItem.propTypes = {
  item: searchResultItemShape.isRequired,
  messages: messagesShape.isRequired,
};

export const SearchResultList = ({ results, messages }) => (
  <ul className="c-search-result-list">
    {results.map(item => (
      <SearchResultItem key={item.url} item={item} messages={messages} />
    ))}
  </ul>
);

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(searchResultItemShape),
  messages: messagesShape.isRequired,
};

const searchFilterClasses = BEMHelper({
  prefix: 'c-',
  name: 'search-filter',
  outputIsString: true,
});

const valueShape = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

export const SearchFilter = ({
  label,
  options,
  values,
  defaultVisibleCount,
  showLabel,
  hideLabel,
}) => (
  <section className={searchFilterClasses()}>
    <FilterList
      options={options}
      label={label}
      values={values}
      defaultVisibleCount={defaultVisibleCount}
      modifiers="search"
      showLabel={showLabel}
      hideLabel={hideLabel}
    />
  </section>
);

SearchFilter.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: valueShape.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  values: PropTypes.arrayOf(valueShape),
  defaultVisibleCount: PropTypes.number,
  showLabel: PropTypes.string,
  hideLabel: PropTypes.string,
};

SearchFilter.defaultProps = {
  values: [],
};
