import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { ChevronRight } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { uuid } from '@ndla/util';
import { Trans } from '@ndla/i18n';
import Button from '@ndla/button';
import { FilterTabs } from '@ndla/tabs';
import Tooltip from '@ndla/tooltip';
import SafeLink from '@ndla/safelink';
import Spinner from '../../lib/Spinner';

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
  hideResultText,
}) => (
  <Trans>
    {({ t }) => (
      <Fragment>
        <h2 {...resultClasses('result-label')}>{!hideResultText ? messages.resultHeading : '\u00A0'}</h2>

        <div {...resultClasses()}>
          {author || (
            <div {...resultClasses('heading-wrapper')}>
              <h1 {...resultClasses('heading', currentCompetenceGoal ? 'competence-goal' : null)}>
                {messages.searchStringLabel} <span>{searchString}</span>
              </h1>
              {competenceGoalsOpen && (
                <Button link {...resultClasses('close-competencegoals-btn')} onClick={onToggleCompetenceGoals}>
                  {t('competenceGoals.closeCompetenceGoals')}
                  <Cross className="c-icon--22 u-margin-left-tiny" />
                </Button>
              )}
            </div>
          )}
          <h2>{messages.subHeading}</h2>
          {!competenceGoalsOpen && currentCompetenceGoal && (
            <ul {...resultClasses('current-goal')}>
              <li>{currentCompetenceGoal}</li>
            </ul>
          )}
          {!competenceGoalsOpen && competenceGoals && (
            <p {...resultClasses('current-goal-info')}>
              {messages.openCompetenceGoalsButtonPrefix}{' '}
              <Button link onClick={onToggleCompetenceGoals}>
                {messages.openCompetenceGoalsButton}
              </Button>
            </p>
          )}
          {competenceGoalsOpen && <div {...resultClasses('competence-goals')}>{competenceGoals}</div>}
          {!competenceGoalsOpen && (
            <Fragment>
              <FilterTabs
                dropdownBtnLabel={t('searchPage.searchPageMessages.dropdownBtnLabel')}
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
      </Fragment>
    )}
  </Trans>
);

SearchResult.propTypes = {
  hideResultText: PropTypes.bool,
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
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
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

export const SearchResultItem = ({ item, subjectsLabel, additionalContentToolip, children }) => {
  const itemBreadcrumb = (item, cssClasses = {}) => {
    if (item.breadcrumb?.length > 0) {
      return (
        <div {...cssClasses}>
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
      );
    }
  };
  return (
    <li key={item.id} {...searchResultItemClasses()}>
      <article>
        <header {...searchResultItemClasses('header')}>
          <h1>{item.url.href ? <a {...item.url}>{item.title}</a> : <SafeLink to={item.url}>{item.title}</SafeLink>}</h1>
          <div {...searchResultItemClasses('content-type-wrapper')}>{item.contentTypeIcon}</div>
          {item.contentTypeLabel && <div {...searchResultItemClasses('pills')}>{item.contentTypeLabel}</div>}
          {item.type && <div {...searchResultItemClasses('pills')}>{item.type}</div>}
          {item.additional && <div {...searchResultItemClasses('pills')}>{additionalContentToolip}</div>}
          {children}
        </header>
        <div {...searchResultItemClasses('content')}>
          <p {...searchResultItemClasses('ingress')} dangerouslySetInnerHTML={{ __html: item.ingress }} />
          {item.image}
        </div>
        {(!item.subjects || item.subjects.length === 0) && itemBreadcrumb(item, searchResultItemClasses('breadcrumb'))}
        {item.subjects && item.subjects.length !== 0 && (
          <div {...searchResultItemClasses('subjects')}>
            <span>{subjectsLabel}</span>
            <ul>
              {item.subjects.map((subject) => (
                <li key={uuid()}>
                  <Tooltip tooltip={itemBreadcrumb(subject)}>
                    {subject.url.href ? (
                      <a {...subject.url}>{subject.title}</a>
                    ) : (
                      <SafeLink to={subject.url}>{subject.title}</SafeLink>
                    )}
                  </Tooltip>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </li>
  );
};

SearchResultItem.propTypes = {
  item: searchResultItemShape.isRequired,
  additionalContentToolip: PropTypes.string.isRequired,
  subjectsLabel: PropTypes.string.isRequired,
};

export const SearchResultList = ({ results, component: Component, loading }) => {
  if (loading) {
    return <Spinner />;
  }
  if (!results) {
    return <article className="c-search-result-list__empty" />;
  }
  return (
    <Trans>
      {({ t }) =>
        results.length === 0 ? (
          <article className="c-search-result-list__empty">
            <h1>{t('searchPage.searchResultListMessages.noResultHeading')}</h1>
            <p>{t('searchPage.searchResultListMessages.noResultDescription')}</p>
          </article>
        ) : (
          <ul className="c-search-result-list">
            {results.map((item) => (
              <Component
                key={`search_result_item_${typeof item.url === 'object' ? item.url.href : item.url}`}
                item={item}
                additionalContentToolip={t('resource.tooltipAdditionalTopic')}
                subjectsLabel={t('searchPage.searchResultListMessages.subjectsLabel')}>
                {item.children}
              </Component>
            ))}
          </ul>
        )
      }
    </Trans>
  );
};

SearchResultList.defaultProps = {
  component: SearchResultItem,
};

SearchResultList.propTypes = {
  results: PropTypes.arrayOf(searchResultItemShape),
  loading: PropTypes.bool,
};
