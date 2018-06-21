import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, Additional } from 'ndla-icons/common';
import { uuid } from 'ndla-util';

import { FilterTabs } from 'ndla-tabs';
import Tooltip from '../Tooltip';
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
    <h2>{messages.subHeading}</h2>
    <FilterTabs
      messages={messages}
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
  currentTab: PropTypes.string,
  children: PropTypes.node.isRequired,
  messages: PropTypes.shape({
    searchStringLabel: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    dropdownBtnLabel: PropTypes.string.isRequired,
  }).isRequired,
  searchString: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};

const searchResultItemClasses = BEMHelper('c-search-result-item');

const searchResultItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  breadcrumb: PropTypes.arrayOf(PropTypes.string),
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
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
  additionalContentToolip: PropTypes.string,
});

const SearchResultItem = ({ item, messages }) => (
  <li key={item.id} {...searchResultItemClasses()}>
    <article>
      <header {...searchResultItemClasses('header')}>
        <h1>
          {item.url.href ? (
            <a {...item.url}>{item.title}</a>
          ) : (
            <SafeLink to={item.url}>{item.title}</SafeLink>
          )}
        </h1>
        {item.contentTypeIcon}
        <span {...searchResultItemClasses('content-type-label')}>
          {item.contentTypeLabel}
        </span>
        {item.additional &&
          (messages.additionalContentToolip ? (
            <Tooltip
              tooltip={messages.additionalContentToolip}
              {...searchResultItemClasses('additional')}>
              <Additional className="c-icon--20" />
            </Tooltip>
          ) : (
            <span {...searchResultItemClasses('additional')}>
              <Additional className="c-icon--20" />
            </span>
          ))}
      </header>
      {item.breadcrumb &&
        item.breadcrumb.length > 0 && (
          <div {...searchResultItemClasses('breadcrumb')}>
            {item.breadcrumb.map((breadcrumbItem, index) => {
              let icon = null;

              if (index !== item.breadcrumb.length - 1) {
                icon = <ChevronRight />;
              }
              return (
                <Fragment key={uuid()}>
                  <span>{breadcrumbItem}</span>
                  {icon}
                </Fragment>
              );
            })}
          </div>
        )}
      <div {...searchResultItemClasses('content')}>
        <p
          {...searchResultItemClasses('ingress')}
          dangerouslySetInnerHTML={{ __html: item.ingress }}
        />
        {item.image}
      </div>
      {item.subjects &&
        item.subjects.length !== 0 && (
          <div {...searchResultItemClasses('subjects')}>
            <span>{messages.subjectsLabel}</span>
            <ul>
              {item.subjects.map(subject => (
                <li key={uuid()}>
                  {subject.url.href ? (
                    <a {...subject.url}>{subject.title}</a>
                  ) : (
                    <SafeLink to={subject.url}>{subject.title}</SafeLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
    </article>
  </li>
);

SearchResultItem.propTypes = {
  item: searchResultItemShape.isRequired,
  messages: messagesShape.isRequired,
};

export const SearchResultList = ({ results, messages }) => {
  if (results.length === 0) {
    return (
      <article className="c-search-result-list__empty">
        <h1>{messages.noResultHeading}</h1>
        <p>{messages.noResultDescription}</p>
      </article>
    );
  }
  return (
    <ul className="c-search-result-list">
      {results.map(item => (
        <SearchResultItem
          key={`search_result_item_${
            typeof item.url === 'object' ? item.url.href : item.url
          }`}
          item={item}
          messages={messages}
        />
      ))}
    </ul>
  );
};

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(searchResultItemShape),
  messages: messagesShape.isRequired,
};
