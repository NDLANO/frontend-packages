import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, Additional } from 'ndla-icons/common';

import FilterTabs from '../filter/FilterTabs';
import SafeLink from '../common/SafeLink';

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
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
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
  noResultHeading: PropTypes.string.isRequired,
  noResultDescription: PropTypes.string.isRequired,
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
              <li key={subject.url}>
                <SafeLink to={subject.url}>{subject.title}</SafeLink>
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

export const SearchResultList = ({ results, messages }) => {
  if (results.length === 0) {
    return (
      <div className="c-search-result-list__empty">
        <h3>{messages.noResultHeading}</h3>
        <p>{messages.noResultDescription}</p>
      </div>
    );
  }

  return (
    <ul className="c-search-result-list">
      {results.map(item => (
        <SearchResultItem key={item.url} item={item} messages={messages} />
      ))}
    </ul>
  );
};

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(searchResultItemShape),
  messages: messagesShape.isRequired,
};
