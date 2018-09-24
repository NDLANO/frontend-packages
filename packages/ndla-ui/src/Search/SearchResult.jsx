import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight, Additional } from 'ndla-icons/common';
import { Cross } from 'ndla-icons/action';
import { uuid } from 'ndla-util';
import { Trans } from 'ndla-i18n';

import { FilterTabs } from 'ndla-tabs';
import Tooltip from '../Tooltip';
import SafeLink from '../common/SafeLink';
import Button from '../Button';

const resultClasses = BEMHelper('c-search-result');

export const SearchResult = ({
  tabOptions,
  children,
  messages,
  searchString,
  currentTab,
  onTabChange,
  author,
  currentCompetenceGoal,
  competenceGoalsOpen,
  onToggleCompetenceGoals,
  competenceGoals,
}) => (
  <Trans>
    {({ t }) => (
      <div {...resultClasses()}>
        {author || (
          <div {...resultClasses('heading-wrapper')}>
            <h1
              {...resultClasses(
                'heading',
                currentCompetenceGoal ? 'competence-goal' : null,
              )}>
              {messages.searchStringLabel} <span>{searchString}</span>
            </h1>
            {competenceGoalsOpen && (
              <Button
                link
                {...resultClasses('close-competencegoals-btn')}
                onClick={onToggleCompetenceGoals}>
                {t('competenceGoals.closeCompetenceGoals')}
                <Cross className="c-icon--22 u-margin-left-tiny" />
              </Button>
            )}
          </div>
        )}
        <h2>{messages.subHeading}</h2>
        {!competenceGoalsOpen &&
          currentCompetenceGoal && (
            <ul {...resultClasses('current-goal')}>
              <li>{currentCompetenceGoal}</li>
            </ul>
          )}
        {!competenceGoalsOpen &&
          competenceGoals !== null && (
            <p {...resultClasses('current-goal-info')}>
              {messages.openCompetenceGoalsButtonPrefix}{' '}
              <Button link onClick={onToggleCompetenceGoals}>
                {messages.openCompetenceGoalsButton}
              </Button>
            </p>
          )}
        {competenceGoalsOpen && (
          <div {...resultClasses('competence-goals')}>{competenceGoals}</div>
        )}
        {!competenceGoalsOpen && (
          <Fragment>
            <FilterTabs
              dropdownBtnLabel={t(
                'searchPage.searchPageMessages.dropdownBtnLabel',
              )}
              value={currentTab}
              options={tabOptions}
              contentId="search-result-content"
              onChange={onTabChange}>
              {children}
            </FilterTabs>
            <div {...resultClasses('narrow-result')}>{children}</div>
          </Fragment>
        )}
      </div>
    )}
  </Trans>
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
    openCompetenceGoalsButtonPrefix: PropTypes.string,
    openCompetenceGoalsButton: PropTypes.string,
  }).isRequired,
  currentCompetenceGoal: PropTypes.string,
  competenceGoalsOpen: PropTypes.bool,
  onToggleCompetenceGoals: PropTypes.func,
  competenceGoals: PropTypes.node,
  searchString: (props, propName, componentName) => {
    if (props.author === null && typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop 'searchString' in ${componentName}. Required unless props.author === PropTypes.node`,
      );
    }
    return null;
  },
  onTabChange: PropTypes.func.isRequired,
  author: PropTypes.node,
};

SearchResult.defaultProps = {
  author: null,
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

const SearchResultItem = ({ item, subjectsLabel, additionalContentToolip }) => (
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
        <div {...searchResultItemClasses('content-type-wrapper')}>
          {item.contentTypeIcon}
          <span {...searchResultItemClasses('content-type-label')}>
            {item.contentTypeLabel}
          </span>
        </div>
        {item.type && (
          <div {...searchResultItemClasses('pills')}>{item.type}</div>
        )}
        {item.additional &&
          (additionalContentToolip ? (
            <Tooltip
              id={`search-additional-tooltip-${item.id}`}
              tooltip={additionalContentToolip}
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
            <span>{subjectsLabel}</span>
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
  additionalContentToolip: PropTypes.string.isRequired,
  subjectsLabel: PropTypes.string.isRequired,
};

export const SearchResultList = ({ results }) => (
  <Trans>
    {({ t }) =>
      results.length === 0 ? (
        <article className="c-search-result-list__empty">
          <h1>{t('searchPage.searchResultListMessages.noResultHeading')}</h1>
          <p>{t('searchPage.searchResultListMessages.noResultDescription')}</p>
        </article>
      ) : (
        <ul className="c-search-result-list">
          {results.map(item => (
            <SearchResultItem
              key={`search_result_item_${
                typeof item.url === 'object' ? item.url.href : item.url
              }`}
              item={item}
              additionalContentToolip={t('resource.tooltipAdditionalTopic')}
              subjectsLabel={t(
                'searchPage.searchResultListMessages.subjectsLabel',
              )}
            />
          ))}
        </ul>
      )
    }
  </Trans>
);

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(searchResultItemShape),
};
