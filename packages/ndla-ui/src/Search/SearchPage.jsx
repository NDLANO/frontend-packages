import React from 'react';
import BEMHelper from 'react-bem-helper';
import PropTypes from 'prop-types';
import Tabs from 'ndla-tabs';
import SafeLink from '../common/SafeLink';

import SearchField from './SearchField';

const classes = BEMHelper('c-search-page');

export const SearchPage = ({
  searchString,
  onSearchFieldChange,
  searchFieldPlaceholder,
  onSearchFieldFilterRemove,
  searchFieldFilters,
  filters,
  children,
  messages,
}) => (
  <div {...classes()}>
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
  messages: PropTypes.shape({
    filterHeading: PropTypes.string.isRequired,
    resultHeading: PropTypes.string,
  }).isRequired,
};

const resultClasses = BEMHelper('c-search-result');

export const SearchResult = ({ tabs, messages, searchString }) => (
  <div {...resultClasses()}>
    <h1>
      {messages.searchStringLabel} <span>{searchString}</span>
    </h1>
    <Tabs tabs={tabs} />
  </div>
);

SearchResult.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    }),
  ).isRequired,
  messages: PropTypes.shape({
    searchStringLabel: PropTypes.string.isRequired,
  }).isRequired,
  searchString: PropTypes.string.isRequired,
};

const searchResultItemClasses = BEMHelper('c-search-result-item');

const searchResultItemShape = PropTypes.shape({
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  breadcrumb: PropTypes.arrayOf(PropTypes.string),
  ingress: PropTypes.string.isRequired,
  contentTypeIcon: PropTypes.node.isRequired,
  contentTypeLabel: PropTypes.string.isRequired,
});

const SearchResultItem = ({ item }) => (
  <li key={item.title} {...searchResultItemClasses()}>
    <div {...searchResultItemClasses('header')}>
      <h3>
        <SafeLink to={item.url}>{item.title}</SafeLink>
      </h3>
      {item.contentTypeIcon}
      <span {...searchResultItemClasses('content-type-label')}>
        {item.contentTypeLabel}
      </span>
    </div>
    {item.breadcrumb &&
      item.breadcrumb.length > 0 && (
        <ul {...searchResultItemClasses('breadcrumb')}>
          {item.breadcrumb.map(breadcrumbItem => <li>{breadcrumbItem}</li>)}
        </ul>
      )}
    <p {...searchResultItemClasses('ingress')}>{item.ingress}</p>
    <ul />
  </li>
);

SearchResultItem.propTypes = {
  item: searchResultItemShape.isRequired,
};

export const SearchResultList = ({ results }) => (
  <ul className="c-search-result-list">
    {results.map(item => <SearchResultItem item={item} />)}
  </ul>
);

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(searchResultItemShape),
};
