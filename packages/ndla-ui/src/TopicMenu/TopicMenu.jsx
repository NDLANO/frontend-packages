/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

// Can be removed when updating to jsx-a11y 6.x
/* eslint jsx-a11y/no-noninteractive-element-to-interactive-role: 1 */

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { Trans } from '@ndla/i18n';
import debounce from 'lodash/debounce';
import { css } from '@emotion/core';
import { mq, breakpoints, spacing, fonts, colors } from '@ndla/core';

import { Home, Back, Additional, ChevronRight } from '@ndla/icons/common';
import { Cross } from '@ndla/icons/action';
import { ModalHeader } from '@ndla/modal';
import Button from '@ndla/button';
import Tooltip from '@ndla/tooltip';
import SubtopicLinkList from './SubtopicLinkList';
import { TopicShape } from '../shapes';
import SafeLink from '../common/SafeLink';

import Logo from '../Logo';
import { FilterListPhone } from '../Filter';

const classes = new BEMHelper({
  name: 'topic-menu',
  prefix: 'c-',
});

export const renderAdditionalIcon = (isAdditional, label) => {
  if (isAdditional && label) {
    return (
      <Tooltip
        tooltip={label}
        tooltipContainerClass="c-topic-menu__tooltipContainer">
        <Additional className="c-icon--20" />
      </Tooltip>
    );
  }
  if (isAdditional) {
    return <Additional className="c-icon--20 c-topic-menu__tooltipContainer" />;
  }
  return null;
};

export default class TopicMenu extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleBtnKeyPress = this.handleBtnKeyPress.bind(this);
    this.handleSubtopicExpand = this.handleSubtopicExpand.bind(this);
    this.handleOnGoBack = this.handleOnGoBack.bind(this);
    this.setScreenSize = this.setScreenSize.bind(this);
    this.setScreenSizeDebounced = debounce(() => this.setScreenSize(false), 50);

    this.state = {
      isNarrowScreen: false,
      competenceGoalsOpen: false,
    };
  }

  componentDidMount() {
    this.setScreenSize(true);
    window.addEventListener('resize', this.setScreenSizeDebounced);
  }

  componentWillUnmount() {
    this.setScreenSizeDebounced.cancel();
    window.removeEventListener('resize', this.setScreenSizeDebounced);
  }

  setScreenSize(initial = false) {
    const isNarrowScreen =
      (window.innerWidth || document.documentElement.clientWidth) < 768;

    /* eslint react/no-did-mount-set-state: 0 */
    if ((initial && isNarrowScreen) || !initial) {
      this.setState({
        isNarrowScreen,
      });
    }
    /* eslint react/no-did-mount-set-state: 1 */
  }

  handleClick(event, topicId) {
    this.props.onNavigate(topicId, null);
  }

  handleSubtopicExpand(subtopicId, index) {
    this.props.onNavigate(this.props.expandedTopicId, subtopicId, index);
  }

  handleOnGoBack() {
    this.props.onNavigate(
      this.props.expandedSubtopicsId.length ? this.props.expandedTopicId : null,
      null,
    );
  }

  handleBtnKeyPress(event, topicId) {
    if (event.charCode === 32 || event.charCode === 13) {
      // space or enter
      event.preventDefault();
      this.props.onNavigate(topicId, null);
    }
  }

  renderCompentenceGoals(competenceGoalsOpen, t) {
    return (
      <Button
        css={
          this.state.isNarrowScreen
            ? css`
                animation-name: fadeInLeft;
                animation-duration: 0.5s;
                transform: translate3d(0px, 0px, 0px);
                margin: ${spacing.normal} 0 ${spacing.normal} ${spacing.normal};
                ${fonts.sizes('14px')};
                ${mq.range({ until: breakpoints.mobileWide })} {
                  margin-left: 20px;
                  margin-right: 20px;
                }
                ${mq.range({ from: breakpoints.desktop })} {
                  display: none;
                }
              `
            : css`
                ${fonts.sizes('14px', '18px')};
                font-weight: ${fonts.weight.bold};
                color: ${colors.brand.primary};
                background: transparent;
                border: none;
                &:hover {
                  cursor: pointer;
                }
              `
        }
        appearance={this.state.isNarrowScreen ? 'lighter' : 'stripped'}
        onClick={() =>
          this.setState({
            competenceGoalsOpen: !competenceGoalsOpen,
          })
        }>
        {competenceGoalsOpen ? (
          <span>
            {t('competenceGoals.closeCompetenceGoals')} <Cross />
          </span>
        ) : (
          t('competenceGoals.showCompetenceGoals')
        )}
      </Button>
    );
  }

  render() {
    const {
      topics,
      toTopic,
      subjectTitle,
      toSubject,
      close: closeMenu,
      expandedTopicId,
      expandedSubtopicsId,
      filterOptions,
      filterValues,
      onFilterClick,
      resourceToLinkProps,
      hideSearch,
      competenceGoals,
      searchFieldComponent,
      toFrontpage,
      locale,
      isOnSubjectFrontPage,
    } = this.props;
    const { competenceGoalsOpen } = this.state;
    const expandedTopic = topics.find(topic => topic.id === expandedTopicId);

    const currentlyExpandedSubTopics = [];
    if (expandedTopic) {
      let currentSubtopic;
      let foundMatch;
      expandedSubtopicsId.forEach((id, index) => {
        if (index === 0) {
          currentSubtopic = expandedTopic.subtopics.find(
            topic => topic.id === id,
          );
          foundMatch = currentSubtopic ? 0 : undefined;
        } else {
          currentSubtopic = currentSubtopic.subtopics.find(
            topic => topic.id === id,
          );
          foundMatch += currentSubtopic ? 1 : 0;
        }
        if (foundMatch === index) {
          currentlyExpandedSubTopics[index] = currentSubtopic;
        }
      });
    }

    const hasExpandedSubtopics = currentlyExpandedSubTopics.length > 0;
    const subTopicModifiers = ['sub-topic'];

    if (!hasExpandedSubtopics) {
      subTopicModifiers.push('no-border');
    }

    const disableMain = this.state.isNarrowScreen && expandedTopic;
    const disableSubTopic = disableMain && hasExpandedSubtopics;
    const disableHeaderNavigation =
      this.state.isNarrowScreen && competenceGoalsOpen;

    const sliderCounter = !expandedTopicId ? 0 : expandedSubtopicsId.length + 1;

    return (
      <Trans>
        {({ t }) => (
          <nav>
            <ModalHeader modifier={['white', 'menu']}>
              <div {...classes('masthead-left')}>
                <button
                  type="button"
                  {...classes('close-button')}
                  onClick={closeMenu}>
                  <Cross />
                  <span>{t('masthead.menu.close')}</span>
                </button>
              </div>
              <div {...classes('masthead-right')}>
                {!hideSearch && searchFieldComponent}
                <Logo
                  to="/"
                  isBeta={this.props.isBeta}
                  label={t('logo.altText')}
                  locale={locale}
                />
              </div>
            </ModalHeader>
            <div {...classes('content')}>
              <div {...classes('back', 'wide')}>
                <SafeLink {...classes('back-link')} to={toFrontpage()}>
                  <Home {...classes('home-icon', '', 'c-icon--20')} />
                  {t('masthead.menu.subjectOverview')}
                </SafeLink>
              </div>
              <div
                {...classes('back', {
                  'hidden-phone': competenceGoalsOpen,
                  narrow: true,
                })}>
                <SafeLink {...classes('back-link')} to={toFrontpage()}>
                  <Home {...classes('home-icon', '', 'c-icon--20')} />
                  {t('masthead.menu.subjectOverview')}
                </SafeLink>
              </div>
              {!disableMain && (
                <Fragment>
                  {!disableHeaderNavigation && (
                    <div
                      {...classes('subject', {
                        hasFilter:
                          filterOptions &&
                          filterOptions.length > 0 &&
                          !competenceGoalsOpen,
                      })}>
                      <div {...classes('subject__header')}>
                        <h1>
                          {isOnSubjectFrontPage ? (
                            <button
                              type="button"
                              onClick={closeMenu}
                              aria-label={t(
                                'masthead.menu.backToSubjectFrontpage',
                              )}>
                              {subjectTitle}
                              <ChevronRight className="c-icon--22" />
                            </button>
                          ) : (
                            <SafeLink to={toSubject()}>
                              {subjectTitle}
                              <ChevronRight className="c-icon--22" />
                            </SafeLink>
                          )}
                        </h1>
                        {competenceGoals &&
                          !this.state.isNarrowScreen &&
                          this.renderCompentenceGoals(competenceGoalsOpen, t)}
                      </div>
                      {!competenceGoalsOpen &&
                        filterOptions &&
                        filterOptions.length > 1 && (
                          <div {...classes('filter-wrapper')}>
                            <FilterListPhone
                              preid="topic-menu"
                              activeFiltersNarrow
                              alignedGroup
                              options={filterOptions}
                              values={filterValues}
                              onChange={onFilterClick}
                              messages={{
                                useFilter: t('masthead.menu.useFilter'),
                                openFilter: t('masthead.menu.openFilter'),
                                closeFilter: t('masthead.menu.closeFilter'),
                              }}
                              label={`${subjectTitle}:`}
                            />
                          </div>
                        )}
                      {!competenceGoalsOpen && (
                        <div {...classes('back-button-slide-wrapper')}>
                          <button
                            type="button"
                            {...classes(
                              'back-button-slides',
                              `slide-${sliderCounter}`,
                            )}
                            onClick={this.handleOnGoBack}>
                            <Back /> <span>{t('masthead.menu.back')}</span>
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </Fragment>
              )}
              {competenceGoalsOpen && (
                <div {...classes('competence')}>
                  <button
                    type="button"
                    {...classes(
                      this.state.isNarrowScreen
                        ? 'competence-close-button'
                        : 'competence-close-button',
                    )}
                    onClick={() =>
                      this.setState({
                        competenceGoalsOpen: false,
                      })
                    }>
                    <Back />
                    {t('competenceGoals.competenceGoalsNarrowBackButton')}
                  </button>
                  {competenceGoals}
                </div>
              )}
              {!competenceGoalsOpen && (
                <div
                  {...classes('subject-navigation', `slide-${sliderCounter}`)}>
                  {!disableMain && (
                    <Fragment>
                      <div {...classes('section', 'main')}>
                        <SafeLink
                          onClick={closeMenu}
                          to={toSubject()}
                          className={classes('link', 'big').className}>
                          <span {...classes('link-label')}>
                            {t('masthead.menu.goTo')}:
                          </span>
                          <span {...classes('link-target')}>
                            {t('masthead.menu.subjectPage')}
                            <span>
                              <ChevronRight className="c-icon--22" />
                            </span>
                          </span>
                        </SafeLink>
                        <ul {...classes('list')}>
                          {topics.map(topic => {
                            const active = topic.id === expandedTopicId;

                            return (
                              <li
                                {...classes('topic-item', active && 'active')}
                                key={topic.id}>
                                <button
                                  type="button"
                                  {...classes('link')}
                                  onClick={event =>
                                    this.handleClick(event, topic.id)
                                  }
                                  onKeyPress={event =>
                                    this.handleBtnKeyPress(event, topic.id)
                                  }>
                                  <span>
                                    {topic.name}
                                    {renderAdditionalIcon(
                                      topic.additional,
                                      t('resource.additionalTooltip'),
                                    )}
                                  </span>
                                  <ChevronRight />
                                </button>
                              </li>
                            );
                          })}
                        </ul>
                        {competenceGoals &&
                          this.state.isNarrowScreen &&
                          this.renderCompentenceGoals(false, t)}
                      </div>
                    </Fragment>
                  )}
                  {expandedTopic && !disableSubTopic && (
                    <SubtopicLinkList
                      classes={classes}
                      className={
                        classes('section', subTopicModifiers).className
                      }
                      closeMenu={closeMenu}
                      topic={expandedTopic}
                      backLabel={
                        !hasExpandedSubtopics
                          ? subjectTitle
                          : currentlyExpandedSubTopics[
                              currentlyExpandedSubTopics.length - 1
                            ].name
                      }
                      goToTitle={t('masthead.menu.goTo')}
                      toTopic={toTopic}
                      expandedSubtopicId={
                        currentlyExpandedSubTopics[0] &&
                        currentlyExpandedSubTopics[0].id
                      }
                      onSubtopicExpand={id => {
                        this.handleSubtopicExpand(id, 0);
                      }}
                      onGoBack={this.handleOnGoBack}
                      resourceToLinkProps={resourceToLinkProps}
                      lastOpen={!hasExpandedSubtopics}
                      competenceButton={
                        competenceGoals &&
                        this.state.isNarrowScreen &&
                        this.renderCompentenceGoals(false, t)
                      }
                    />
                  )}
                  {currentlyExpandedSubTopics.map((subTopic, index) => (
                    <SubtopicLinkList
                      key={subTopic.id}
                      classes={classes}
                      className={
                        classes('section', ['sub-topic', 'no-border']).className
                      }
                      closeMenu={closeMenu}
                      topic={subTopic}
                      backLabel={
                        index === 0
                          ? this.props.topics.find(
                              topic => topic.id === this.props.expandedTopicId,
                            ).name
                          : currentlyExpandedSubTopics[index - 1].name
                      }
                      toTopic={toTopic}
                      expandedSubtopicId={
                        currentlyExpandedSubTopics[index + 1]
                          ? currentlyExpandedSubTopics[index + 1].id
                          : 'no way'
                      }
                      onSubtopicExpand={id => {
                        this.handleSubtopicExpand(id, index + 1);
                      }}
                      onGoBack={this.handleOnGoBack}
                      resourceToLinkProps={resourceToLinkProps}
                      lastOpen={sliderCounter === index + 2}
                      defaultCount={this.props.defaultCount}
                      competenceButton={
                        competenceGoals &&
                        this.state.isNarrowScreen &&
                        this.renderCompentenceGoals(false, t)
                      }
                    />
                  ))}
                </div>
              )}
            </div>
          </nav>
        )}
      </Trans>
    );
  }
}

TopicMenu.propTypes = {
  topics: PropTypes.arrayOf(TopicShape).isRequired,
  toFrontpage: PropTypes.func.isRequired,
  toTopic: PropTypes.func.isRequired,
  toSubject: PropTypes.func.isRequired,
  close: PropTypes.func,
  defaultCount: PropTypes.number,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ),
  onFilterClick: PropTypes.func,
  filterValues: PropTypes.arrayOf(PropTypes.string),
  subjectTitle: PropTypes.string.isRequired,
  resourceToLinkProps: PropTypes.func.isRequired,
  onNavigate: PropTypes.func.isRequired,
  expandedTopicId: PropTypes.string,
  expandedSubtopicsId: PropTypes.arrayOf(PropTypes.string).isRequired,
  isBeta: PropTypes.bool,
  hideSearch: PropTypes.bool,
  competenceGoals: PropTypes.node,
  searchFieldComponent: PropTypes.node,
  locale: PropTypes.string,
  isOnSubjectFrontPage: PropTypes.bool,
};

TopicMenu.defaultProps = {
  defaultCount: 12,
};
